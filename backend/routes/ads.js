
// 📦 Importa o framework Express para criar e gerenciar as rotas.
import express from 'express';
// 📊 Importa o repositório de análise de anúncios para registrar e buscar métricas de performance.
import { AdAnalyticsRepository } from '../database/repositories/AdAnalyticsRepository.js';
// 🗃️ Importa o gerenciador de banco de dados para interagir com as campanhas de anúncios.
import { dbManager } from '../databaseManager.js';

// 🎉 Inicializa um novo objeto de roteador do Express.
const router = express.Router();

// 🚀 Rota para criar uma nova campanha de anúncio.
router.post('/create', async (req, res) => {
    try {
        // 📥 Obtém os dados da campanha do corpo da requisição.
        const campaign = req.body;
        // 🛡️ Valida se os campos essenciais (ID da campanha e ID do proprietário) foram fornecidos.
        if (!campaign.id || !campaign.ownerId) {
            return res.status(400).json({ error: "ID e ownerId são obrigatórios." });
        }
        // 💾 Cria a nova campanha no banco de dados.
        await dbManager.ads.create(campaign);
        // ✅ Retorna uma resposta de sucesso.
        res.json({ success: true });
    } catch (e) {
        // 💣 Em caso de erro, retorna o status 500 com a mensagem de erro.
        res.status(500).json({ error: e.message });
    }
});

// 🔄 Rota para atualizar uma campanha existente (status, criativos, etc.).
router.put('/:id', async (req, res) => {
    try {
        // 🆔 Extrai o ID da campanha dos parâmetros da URL.
        const { id } = req.params;
        // 📝 Obtém os dados de atualização do corpo da requisição.
        const updates = req.body;
        // 💾 Atualiza a campanha no banco de dados com os novos dados.
        await dbManager.ads.update(id, updates);
        // ✅ Retorna uma resposta de sucesso.
        res.json({ success: true });
    } catch (e) {
        // 💣 Em caso de erro, retorna o status 500 com a mensagem de erro.
        res.status(500).json({ error: e.message });
    }
});

// 💰 Rota para adicionar orçamento a uma campanha (top-up).
router.post('/:id/top-up', async (req, res) => {
    try {
        // 🆔 Extrai o ID da campanha dos parâmetros da URL.
        const { id } = req.params;
        // 💵 Obtém o valor a ser adicionado do corpo da requisição.
        const { amount } = req.body;
        // 🛡️ Valida se o valor é um número positivo.
        if (!amount || amount <= 0) return res.status(400).json({ error: "Valor inválido." });
        // 💸 Adiciona o orçamento à campanha no banco de dados.
        await dbManager.ads.addBudget(id, amount);
        // ✅ Retorna uma resposta de sucesso.
        res.json({ success: true });
    } catch (e) {
        // 💣 Em caso de erro, retorna o status 500 com a mensagem de erro.
        res.status(500).json({ error: e.message });
    }
});

// 🗑️ Rota para deletar uma campanha de anúncio.
router.delete('/:id', async (req, res) => {
    try {
        // 🆔 Extrai o ID da campanha dos parâmetros da URL.
        const { id } = req.params;
        // 💀 Deleta a campanha do banco de dados.
        await dbManager.ads.delete(id);
        // ✅ Retorna uma resposta de sucesso.
        res.json({ success: true });
    } catch (e) {
        // 💣 Em caso de erro, retorna o status 500 com a mensagem de erro.
        res.status(500).json({ error: e.message });
    }
});

// 📈 Rota para obter a performance em tempo real de uma campanha.
router.get('/:id/performance', async (req, res) => {
    try {
        // 🎯 Busca as métricas de performance da campanha usando o repositório de analytics.
        const metrics = await AdAnalyticsRepository.getAdPerformance(req.params.id);
        // ✨ Retorna as métricas com um status de sucesso.
        res.json({ success: true, metrics });
    } catch (e) {
        // 💣 Em caso de erro, retorna o status 500 com a mensagem de erro.
        res.status(500).json({ error: e.message });
    }
});

// 👁️ Rota para registrar um evento de anúncio (como visualização ou clique).
router.post('/track', async (req, res) => {
    try {
        // 📥 Extrai os detalhes do evento do corpo da requisição.
        const { adId, userId, type, metadata } = req.body;
        // ✍️ Registra o evento no banco de dados de analytics.
        await AdAnalyticsRepository.recordEvent(adId, userId, type, 0, metadata);
        // ✅ Retorna uma resposta de sucesso.
        res.json({ success: true });
    } catch (e) {
        // 💣 Em caso de erro, retorna o status 500 com a mensagem de erro.
        res.status(500).json({ error: e.message });
    }
});

// 🚢 Exporta o roteador para ser usado no servidor principal.
export default router;
