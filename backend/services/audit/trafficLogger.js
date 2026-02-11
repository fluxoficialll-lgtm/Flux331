
/**
 * @file trafficLogger.js
 * @description Este arquivo é o coração do monitoramento de tráfego do sistema.
 *              Ele fornece funções para registrar (logar) todas as requisições HTTP
 *              que chegam e saem do servidor, formatando as mensagens de uma maneira
 *              clara e padronizada para o painel de administração e para depuração.
 */

export const trafficLogger = {
    /**
     * 📡 Registra uma requisição recebida (Inbound).
     * É chamado no início do ciclo de vida da requisição.
     * @param {object} req - O objeto de requisição do Express.
     */
    logInbound: (req) => {
        // 💓 Verifica se é uma "verificação de saúde" (health check) ou ping.
        // Essas são requisições automáticas para saber se o servidor está vivo.
        const isHealthCheck = (req.path === '/' || req.path === '/api/ping') && (req.method === 'GET' || req.method === 'HEAD');
        
        // 🆔 Tenta obter um ID de rastreamento único do cabeçalho da requisição.
        // Isso ajuda a seguir uma requisição específica por todo o sistema.
        const traceId = req.headers['x-flux-trace-id'] || 'no-trace';
        
        // Se for um health check, loga uma mensagem especial de "batimento cardíaco".
        if (isHealthCheck) {
            // Nota: Você pode comentar a linha abaixo se não quiser ver os pings no log.
            console.log(`[HEALTH] 💓 PING | ${req.method} ${req.path} | Trace: ${traceId}`);
            return; // Encerra a função aqui para pings.
        }

        // 📦 Calcula o tamanho do corpo da requisição (payload).
        const size = req.headers['content-length'] || 0;

        // ✍️ Formata e loga a mensagem da requisição de entrada.
        console.log(`[INBOUND] 📡 REQUEST | ${req.method} ${req.path} | Size: ${size}b | Trace: ${traceId}`);
    },

    /**
     * ✅ Registra uma resposta enviada (Outbound).
     * É chamado no final do ciclo de vida da requisição, após a resposta ser enviada.
     * @param {object} req - O objeto de requisição do Express.
     * @param {object} res - O objeto de resposta do Express.
     * @param {number} duration - O tempo total que a requisição levou para ser processada, em milissegundos.
     */
    logOutbound: (req, res, duration) => {
        // 🆔 Obtém o mesmo ID de rastreamento para correlacionar com o log de entrada.
        const traceId = req.headers['x-flux-trace-id'] || 'no-trace';
        const isHealthCheck = (req.path === '/' || req.path === '/api/ping');
        
        // 🤫 Silencia a saída dos pings aqui também para manter o log limpo.
        if (isHealthCheck) return;

        // ✅ Define um ícone e um status de acordo com o código de status HTTP.
        // Sucesso (2xx, 3xx) ou Falha (4xx, 5xx).
        const statusIcon = res.statusCode < 400 ? '✅' : '❌';
        const statusType = res.statusCode < 400 ? 'SUCCESS' : 'FAILURE';

        // ✍️ Formata e loga a mensagem da resposta de saída.
        console.log(`[OUTBOUND] ${statusIcon} ${statusType} | ${res.statusCode} | ${req.method} ${req.path} | ${duration}ms | Trace: ${traceId}`);
    },

    /**
     * 🛡️ Registra uma requisição CORS "Preflight".
     * Essas requisições OPTIONS são enviadas pelo navegador para verificar permissões antes de uma requisição real.
     * @param {object} req - O objeto de requisição do Express.
     */
    logCors: (req) => {
        // ✍️ Loga a origem da requisição CORS para fins de segurança e depuração.
        console.log(`[SECURITY] 🛡️ CORS_PREFLIGHT | Origin: ${req.headers.origin || 'unknown'}`);
    }
};
