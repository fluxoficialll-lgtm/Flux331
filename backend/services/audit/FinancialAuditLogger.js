
//  orchestrator/index.js
import { FeeAuditOrchestrator } from './fees/index.js';

/**
 * @file FinancialAuditLogger.js
 * @description Atua como uma fachada (Facade) para o sistema de auditoria financeira.
 * 
 *              Este logger simplifica o processo de registrar eventos financeiros. Em vez de
 *              conhecer a lógica de cada provedor (Stripe, PayPal), ele apenas recebe os dados
 *              e delega a tarefa de formatação e registro para um orquestrador especializado.
 *              Isso torna o sistema mais limpo e fácil de manter.
 */
export const FinancialAuditLogger = {
    /**
     * 🏦 Registra uma alteração em uma regra de taxa (ex: mudança na taxa do Stripe).
     * 
     * Utiliza o padrão de design "Strategy" ou "Driver", onde o `FeeAuditOrchestrator`
     * escolhe o "driver" (formatador) correto com base no provedor (`data.provider`).
     * 
     * @param {object} data - O objeto contendo os detalhes da regra de taxa.
     *                        Ex: { provider: 'stripe', fixed_fee: 0.50, percent_fee: 2.9, ... }
     */
    logChange(data) {
        try {
            // 👉 Delega a tarefa para o orquestrador.
            // O orquestrador encontrará o formatador certo (ex: StripeFeeLogger) e o usará.
            FeeAuditOrchestrator.log(data);

        } catch (e) {
            // ⚠️ Fallback de Segurança: Se o orquestrador falhar por qualquer motivo
            // (ex: um novo provedor ainda não tem um formatador), ele não trava o sistema.
            console.warn(`⚠️ [Audit] Falha ao usar o formatador de log de taxa para '${data.provider}'. Usando fallback. Erro: ${e.message}`);
            
            // ✍️ Em vez disso, ele loga uma mensagem genérica, mas segura, garantindo que a informação
            // NUNCA seja perdida. A auditoria é crítica demais para falhar silenciosamente.
            console.log(`[AUDIT_FALLBACK] 🕒 ${new Date().toLocaleTimeString()} | 🏦 ${data.provider} | 📊 Taxa Fixa: ${data.fixed_fee}, Taxa Percentual: ${data.percent_fee}%`);
        }
    }
};