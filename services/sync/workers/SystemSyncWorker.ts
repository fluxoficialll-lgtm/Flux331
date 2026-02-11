
import { notificationService } from '../../notificationService';
import { authService } from '../../authService';
import { API_BASE } from '../../../apiConfig';
import { db } from '../../../database';
import { hydrationManager } from '../HydrationManager';

export const SystemSyncWorker = {
    name: 'SystemWorker',

    async syncHighPriority() {
        const email = authService.getCurrentUserEmail();
        if (!email) {
            hydrationManager.markReady('AUTH');
            return;
        }

        try {
            // Executamos a sincronização de integridade primeiro pois ela popula o perfil
            await Promise.all([
                this.syncIntegrityStatus(email).catch(error => {
                    console.error("Critical Auth Sync Failure:", error);
                    // Notifica o sistema que o estado de autenticação é falso devido ao erro
                    hydrationManager.setAuthenticationStatus(false);
                    // Rethrow ou lida com o erro para que o finally ainda possa marcar o Auth
                    throw error;
                }),
                this.syncNotifications()
            ]);
        } catch (e) {
            console.warn("⚠️ [Sync] Falha no check de sistema:", e);
        } finally {
            hydrationManager.markReady('AUTH');
        }
    },

    async syncNotifications() {
        console.log("🔔 [Sync] Sincronizando notificações...");
        await notificationService.syncNotifications();
    },

    async syncIntegrityStatus(email: string) {
        try {
            const res = await fetch(`${API_BASE}/api/users/update?email=${encodeURIComponent(email)}`);
            if (res.ok) {
                const data = await res.json();
                const user = data.user;
                
                if (user) {
                    if (user.isBanned) {
                        authService.logout();
                        window.location.reload();
                        return;
                    }
                    
                    // CRÍTICO: Sincroniza o cache local com os dados reais do Postgres
                    console.log("♻️ [Sync] Hidratando perfil do usuário via PostgreSQL");
                    db.users.set(user);
                    localStorage.setItem('cached_user_profile', JSON.stringify(user));
                    localStorage.setItem('user_id', user.id);
                }
            } else {
                // Se a API falhar em retornar OK, consideramos um erro de sincronização
                throw new Error(`API returned status ${res.status}`);
            }
        } catch (e) {
            console.warn("⚠️ [Sync] Falha ao verificar integridade, mantendo estado local.");
            // Propaga o erro para ser pego pelo catch no Promise.all
            throw e;
        }
    }
};
