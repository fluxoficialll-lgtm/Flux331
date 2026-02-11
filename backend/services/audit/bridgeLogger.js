
/**
 * @file bridgeLogger.js
 * @description Este logger é especializado em registrar eventos de segurança e autenticação
 *              que ocorrem na "ponte" de comunicação em tempo real entre o cliente e o servidor.
 * 
 *              A "ponte" (Bridge) é a camada que valida se um cliente tem permissão para
 *              se conectar e se comunicar. Este logger cria um registro de auditoria
 *              de todas as tentativas de acesso, sejam elas bem-sucedidas ou não.
 */
export const bridgeLogger = {
    /**
     * ✅ Registra uma concessão de acesso bem-sucedida.
     *     Isso acontece quando um cliente fornece credenciais válidas (ex: um token JWT).
     * @param {object} req - O objeto de requisição (pode ser de uma conexão WebSocket ou HTTP).
     * @param {string} context - O contexto da autenticação (ex: 'WebSocket', 'API').
     */
    logAccessGranted: (req, context) => {
        // Tenta identificar o cliente através de um cabeçalho customizado.
        const clientId = req.headers['x-flux-client-id'] || 'unknown';
        // ✍️ Loga que o acesso foi permitido, em qual modo e para qual cliente.
        console.log(`[AUTH] ✅ ACCESS_GRANTED | Mode: ${context} | Client: ${clientId}`);
    },

    /**
     * ❌ Registra uma tentativa de acesso que foi recusada.
     *     Isso é um evento de segurança importante. Ocorre quando as credenciais são inválidas.
     * @param {object} req - O objeto de requisição.
     * @param {string} reason - A razão pela qual o acesso foi negado (ex: "Token Expirado").
     */
    logAccessRefused: (req, reason) => {
        // 🕵️ Captura o endereço IP do solicitante para auditoria de segurança.
        //    Usa 'x-forwarded-for' para o caso de o servidor estar atrás de um proxy.
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        // ✍️ Loga um aviso de segurança com o motivo da recusa, o IP e o recurso que ele tentou acessar.
        console.warn(`[SECURITY] ❌ ACCESS_REFUSED | Reason: ${reason} | IP: ${ip} | Path: ${req.path}`);
    },

    /**
     * 🚫 Registra uma tentativa de acesso sem credenciais.
     *     Ocorre quando o cliente tenta acessar um recurso protegido sem enviar nenhum token ou autenticação.
     * @param {object} req - O objeto de requisição.
     */
    logAuthMissing: (req) => {
        // ✍️ Loga um erro crítico de segurança, indicando um bloqueio por falta de credenciais.
        //    Isso pode indicar um bot mal-intencionado ou um erro grave no cliente.
        console.error(`[SECURITY] 🚫 AUTH_MISSING | Blocked: No credentials for ${req.path}`);
    }
};
