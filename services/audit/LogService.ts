
// services/audit/LogService.ts

/**
 * 🪵 LogEntry: Define a estrutura de uma entrada de log.
 */
interface LogEntry {
    timestamp: string;
    level: 'INFO' | 'WARN' | 'ERROR';
    message: string;
    details?: any;
}

/**
 * 🪵 LogService: Um serviço simples para registrar eventos da aplicação no console.
 *
 * Este serviço ajuda a rastrear o fluxo de execução e a diagnosticar problemas
 * durante o desenvolvimento e em produção, fornecendo um output formatado
 * e com timestamp.
 */
class LogService {
    private getTimestamp(): string {
        return new Date().toISOString();
    }

    private log(level: 'INFO' | 'WARN' | 'ERROR', message: string, details?: any) {
        const entry: LogEntry = {
            timestamp: this.getTimestamp(),
            level,
            message,
            details,
        };

        const color = {
            INFO: 'color: #00c2ff',
            WARN: 'color: #ffc200',
            ERROR: 'color: #ff3b30',
        };

        console.log(
            `%c[${entry.level}]%c [${entry.timestamp}] - ${entry.message}`,
            `${color[level]}; font-weight: bold;`,
            'color: gray; font-weight: normal;',
            details || ''
        );
    }

    info(message: string, details?: any) {
        this.log('INFO', message, details);
    }

    warn(message: string, details?: any) {
        this.log('WARN', message, details);
    }

    error(message: string, details?: any) {
        this.log('ERROR', message, details);
    }
}

// Instância única do serviço para ser usada em toda a aplicação.
export const logService = new LogService();
