/**
 * @file envService.ts
 * @description Detecta e fornece o contexto do ambiente de execução (Produção, Staging, Local) e o provedor de hospedagem (Render, Vercel, Firebase, etc.).
 *              Isso permite que a aplicação adapte seu comportamento, como a seleção de URLs de API e configurações específicas, de forma dinâmica.
 */

type HostingProvider = 'Render' | 'Vercel' | 'Netlify' | 'Firebase' | 'Local' | 'Unknown';
type EnvironmentType = 'Production' | 'Staging' | 'Development';

class EnvironmentService {
    private static instance: EnvironmentService;
    private readonly provider: HostingProvider;
    private readonly environment: EnvironmentType;
    private readonly apiUrl: string;

    private constructor() {
        // Detecção do Provedor de Hospedagem
        if (process.env.RENDER) {
            this.provider = 'Render';
        } else if (process.env.VERCEL) {
            this.provider = 'Vercel';
        } else if (process.env.NETLIFY) {
            this.provider = 'Netlify';
        } else if (process.env.FIREBASE_CONFIG) {
            this.provider = 'Firebase';
        } else {
            this.provider = 'Local';
        }

        // Detecção do Tipo de Ambiente (Produção/Desenvolvimento)
        // A VITE_API_URL que definimos no .env agora controla isso.
        const rawApiUrl = process.env.VITE_API_URL || 'http://localhost:3001';
        if (rawApiUrl.includes('localhost') || rawApiUrl.includes('127.0.0.1')) {
            this.environment = 'Development';
        } else if (rawApiUrl.includes('staging')) {
            this.environment = 'Staging';
        } else {
            this.environment = 'Production';
        }
        
        this.apiUrl = rawApiUrl;

        console.log(`[ENV] Contexto detectado: ${this.provider} (${this.environment})`);
        console.log(`[ENV] API URL: ${this.apiUrl}`);
    }

    /**
     * Retorna a instância única do serviço (Singleton Pattern).
     */
    public static getInstance(): EnvironmentService {
        if (!EnvironmentService.instance) {
            EnvironmentService.instance = new EnvironmentService();
        }
        return EnvironmentService.instance;
    }

    /**
     * Retorna o provedor de hospedagem detectado.
     * @returns {HostingProvider} O nome do provedor (ex: 'Render', 'Local').
     */
    public getHostingProvider(): HostingProvider {
        return this.provider;
    }

    /**
     * Retorna o tipo de ambiente.
     * @returns {EnvironmentType} 'Production', 'Staging', ou 'Development'.
     */
    public getEnvironmentType(): EnvironmentType {
        return this.environment;
    }

    /**
     * Retorna a URL base da API para o ambiente atual.
     */
    public getApiUrl(): string {
        return this.apiUrl;
    }

    public isProduction(): boolean {
        return this.environment === 'Production';
    }

    public isDevelopment(): boolean {
        return this.environment === 'Development';
    }

    public isLocal(): boolean {
        return this.provider === 'Local';
    }

    public isRender(): boolean {
        return this.provider === 'Render';
    }

    public isVercel(): boolean {
        return this.provider === 'Vercel';
    }
}

// Exporta uma instância única para ser usada em toda a aplicação.
export const envService = EnvironmentService.getInstance();
