
/**
 * @file HydrationManager.ts
 * @description Gerenciador do estado de "hidratação" da aplicação.
 * 
 * Este módulo é crucial para a inicialização do app. Ele controla quais partes
 * dos dados do usuário (módulos críticos) já foram carregadas e sincronizadas
 * antes de liberar a interface principal. Isso evita que o usuário veja
 * a aplicação em um estado inconsistente ou incompleto.
 */

// 📦 Importação do estado de sincronização (embora não usado diretamente, é conceitual)
import { SyncState } from './SyncState';

/**
 * 💧 Classe HydrationManager
 * 
 * Orquestra o processo de hidratação da aplicação, garantindo que os dados
 * essenciais estejam prontos antes de exibir a UI completa.
 */
class HydrationManager {
    // ✅ Módulos que já foram sincronizados e estão prontos.
    private readyModules = new Set<string>();
    
    // 🎧 Funções (callbacks) que serão notificadas sobre a mudança no estado de hidratação.
    private listeners = new Set<(isReady: boolean) => void>();
    
    // 👤 Status de autenticação do usuário.
    private isAuthenticated = false;

    // 🎯 Módulos essenciais que PRECISAM estar prontos se o usuário estiver autenticado.
    private readonly CRITICAL_MODULES = ['AUTH', 'GROUPS', 'WALLET'];

    /**
     * Define o status de autenticação do usuário.
     * @param isAuthenticated - `true` se o usuário está logado, `false` caso contrário.
     */
    public setAuthenticationStatus(isAuthenticated: boolean) {
        if (this.isAuthenticated !== isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
            // Notifica os listeners sobre a possível mudança no estado de hidratação.
            this.notify(this.isFullyHydrated());
        }
    }

    /**
     * Marca um módulo como "pronto" (sincronizado).
     * @param module - O nome do módulo a ser marcado (ex: 'AUTH', 'GROUPS').
     */
    public markReady(module: string) {
        this.readyModules.add(module);
        // Se todos os módulos críticos estiverem prontos, notifica os listeners.
        if (this.isFullyHydrated()) {
            this.notify(true);
        }
    }

    /**
     * Verifica se a aplicação está totalmente "hidratada".
     * Esta é a lógica central que determina se a tela de loading deve sumir.
     * @returns `true` se a aplicação pode prosseguir, `false` se precisa esperar.
     */
    public isFullyHydrated(): boolean {
        // 💡 [CORREÇÃO] Se o usuário NÃO está autenticado, a aplicação é considerada
        // imediatamente pronta para exibir a tela de login. Não precisa esperar nada.
        if (!this.isAuthenticated) {
            return true;
        }
        
        // Se o usuário ESTÁ autenticado, verifica se todos os módulos críticos foram carregados.
        return this.CRITICAL_MODULES.every(m => this.readyModules.has(m));
    }

    /**
     * Permite que outras partes do app "assinem" para receber atualizações do estado de hidratação.
     * @param cb - A função a ser chamada quando o estado mudar.
     * @returns Uma função para cancelar a assinatura.
     */
    public subscribe(cb: (isReady: boolean) => void) {
        this.listeners.add(cb);
        // Chama o callback imediatamente com o estado atual.
        cb(this.isFullyHydrated());
        // Retorna a função de "unsubscribe".
        return () => this.listeners.delete(cb);
    }

    /**
     * Notifica todos os listeners sobre o novo estado de hidratação.
     * @param isReady - O estado atual de prontidão.
     */
    private notify(isReady: boolean) {
        this.listeners.forEach(cb => cb(isReady));
    }

    /**
     * Reseta o estado do gerenciador. Usado geralmente durante o logout.
     */
    public reset() {
        this.readyModules.clear();
        this.isAuthenticated = false;
        this.notify(false);
    }
}

// 🌍 Exporta uma instância única (singleton) do gerenciador para ser usada em todo o app.
export const hydrationManager = new HydrationManager();
