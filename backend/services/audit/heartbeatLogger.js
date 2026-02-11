
/**
 * @file heartbeatLogger.js
 * @description Monitora a "presença" e a "vitalidade" dos clientes conectados.
 * 
 *              Este logger implementa um sistema de "batimento cardíaco" (heartbeat).
 *              O front-end envia um "pulso" a cada minuto para dizer "ainda estou aqui!".
 *              Este serviço rastreia esses pulsos. Se um cliente para de enviar pulsos,
 *              o servidor assume que a conexão foi perdida (ex: o usuário fechou o navegador)
 *              e pode limpar os recursos associados a ele.
 */

// 🧠 Cache em memória para guardar o último "pulso" de cada cliente.
// A chave é o ID do cliente (clientId), e o valor é o timestamp de quando o pulso foi visto pela última vez.
const activePulses = new Map();

export const heartbeatLogger = {
    /**
     * 💓 Registra o recebimento de um pulso de um cliente.
     * @param {string} clientId - O identificador único do cliente que enviou o pulso.
     */
    logPulse: (clientId) => {
        // Ignora se o ID do cliente não for válido.
        if (!clientId) return;
        
        const now = Date.now(); // Pega o timestamp atual.
        activePulses.set(clientId, now); // Atualiza o mapa: "vi este cliente neste momento".

        // ✍️ Loga que o pulso foi recebido com sucesso.
        console.log(`[PULSE] 💓 PULSE_RECEIVED | Client: ${clientId} | Status: ALIVE`);
    },

    /**
     * 🕵️ Verifica a vitalidade de todos os clientes monitorados.
     *     Esta função é o "vigia" que procura por clientes silenciosos.
     */
    checkVitality: () => {
        const now = Date.now();
        // ⏳ Define o tempo limite. Se não virmos um pulso em 65s, consideramos o cliente "silencioso".
        // O valor é um pouco maior que o intervalo do cliente (60s) para dar uma margem de segurança.
        const timeout = 65000; 

        // Itera sobre todos os clientes que estamos monitorando.
        activePulses.forEach((lastSeen, clientId) => {
            // Se o tempo desde o último pulso for maior que o nosso timeout...
            if (now - lastSeen > timeout) {
                // 🤫 ... então o cliente está em silêncio.
                console.warn(`[PULSE] 🤫 SILENCE_DETECTED | Alerta: O cliente ${clientId} parou de enviar sinais há mais de 60s.`);
                
                // 🗑️ Remove o cliente do mapa para não verificá-lo novamente.
                // O sistema pode então tomar outras ações, como encerrar a sessão do usuário.
                activePulses.delete(clientId);
            }
        });
    },

    /**
     * ⌛ Registra um timeout explícito para a sessão de um cliente.
     * Usado quando o sistema decide ativamente encerrar a sessão por inatividade.
     * @param {string} clientId - O identificador do cliente.
     */
    logTimeout: (clientId) => {
        console.log(`[PULSE] ⌛ SESSION_TIMEOUT | Encerrando contexto por inatividade do cliente ${clientId}`);
        activePulses.delete(clientId); // Garante a limpeza do mapa.
    }
};

// ⏰ Inicia o motor do vigia.
// A cada 30 segundos, a função `checkVitality` será executada para procurar por clientes silenciosos.
setInterval(() => heartbeatLogger.checkVitality(), 30000);
