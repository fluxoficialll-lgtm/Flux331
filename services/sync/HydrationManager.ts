
import { SyncState } from './SyncState';

class HydrationManager {
    private readyModules = new Set<string>();
    private listeners = new Set<(isReady: boolean) => void>();
    private isAuthenticated = false;

    private readonly CRITICAL_MODULES = ['AUTH', 'GROUPS', 'WALLET'];

    public setAuthenticationStatus(isAuthenticated: boolean) {
        if (this.isAuthenticated !== isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
            this.notify(this.isFullyHydrated());
        }
    }

    public markReady(module: string) {
        this.readyModules.add(module);
        if (this.isFullyHydrated()) {
            this.notify(true);
        }
    }

    public isFullyHydrated(): boolean {
        if (!this.isAuthenticated) {
            return this.readyModules.has('AUTH');
        }
        return this.CRITICAL_MODULES.every(m => this.readyModules.has(m));
    }

    public subscribe(cb: (isReady: boolean) => void) {
        this.listeners.add(cb);
        cb(this.isFullyHydrated());
        return () => this.listeners.delete(cb);
    }

    private notify(isReady: boolean) {
        this.listeners.forEach(cb => cb(isReady));
    }

    public reset() {
        this.readyModules.clear();
        this.isAuthenticated = false;
        this.notify(false);
    }
}

export const hydrationManager = new HydrationManager();
