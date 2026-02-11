
// 📦 Importa o framework Express para gerenciar as rotas de mensagens.
import express from 'express';
// 🗃️ Importa o gerenciador de banco de dados para interagir com os dados de chats e mensagens.
import { dbManager } from '../databaseManager.js';

// 🎉 Inicializa um novo objeto de roteador do Express.
const router = express.Router();

// 💬 GET /private
// Rota para listar todos os chats privados de um usuário com base no seu e-mail.
router.get('/private', async (req, res) => {
    try {
        // 📧 Obtém o e-mail do usuário da query string.
        const { email } = req.query;
        // 🤔 Verifica se o e-mail foi fornecido; se não, retorna um erro 400.
        if (!email) return res.status(400).json({ error: "Email é obrigatório." });
        // 📚 Busca os chats privados associados ao e-mail.
        const chats = await dbManager.chats.findPrivate(email);
        // ✨ Retorna a lista de chats.
        res.json({ chats });
    } catch (e) { 
        // 💣 Em caso de erro, retorna status 500 com a mensagem.
        res.status(500).json({ error: e.message }); 
    }
});

// 🗨️ GET /private/:chatId
// Rota para obter as mensagens de um chat privado específico.
router.get('/private/:chatId', async (req, res) => {
    try {
        // 🆔 Pega o ID do chat dos parâmetros da URL.
        const { chatId } = req.params;
        // 🕵️‍♂️ Busca o chat pelo ID.
        const chat = await dbManager.chats.findById(chatId);
        // ❓ Se o chat não existir, retorna uma lista de mensagens vazia.
        if (!chat) return res.json({ messages: [] });
        // ✨ Retorna as mensagens do chat, ou uma lista vazia se não houver mensagens.
        res.json({ messages: chat.messages || [] });
    } catch (e) { 
        // 💣 Em caso de erro, retorna status 500.
        res.status(500).json({ error: e.message }); 
    }
});

// 👨‍👩‍👧‍👦 GET /groups/:id
// Rota para obter as mensagens de um chat de grupo específico.
router.get('/groups/:id', async (req, res) => {
    try {
        // 🆔 Busca o chat de grupo pelo ID na URL.
        const chat = await dbManager.chats.findById(req.params.id);
        // ❓ Se o chat não existir, retorna uma lista vazia.
        if (!chat) return res.json({ messages: [] });
        // ✨ Retorna as mensagens do grupo.
        res.json({ messages: chat.messages || [] });
    } catch (e) { 
        // 💣 Em caso de erro, retorna status 500.
        res.status(500).json({ error: e.message }); 
    }
});

// 🚀 POST /send
// Rota central para enviar uma mensagem para um chat (privado ou de grupo).
router.post('/send', async (req, res) => {
    try {
        // 📥 Extrai o ID do chat e a mensagem do corpo da requisição.
        const { chatId, message } = req.body;
        // 🤔 Validação básica para garantir que os dados essenciais foram enviados.
        if (!chatId || !message) return res.status(400).json({ error: "chatId e message são obrigatórios." });
        
        // 🕵️‍♂️ Busca os dados do chat existente.
        let chatData = await dbManager.chats.findById(chatId);
        
        // 🔄 Se o chat já existe...
        if (chatData) {
            chatData.deletedBy = []; // Limpa a marcação de "deletado" se a conversa for retomada.
            chatData.messages.push(message); // Adiciona a nova mensagem.
        } else {
            // 🌱 Se não existe, cria uma nova estrutura de chat.
            chatData = { 
                id: chatId, 
                contactName: message.senderName || 'Desconhecido', 
                isBlocked: false, 
                deletedBy: [],
                messages: [message] 
            };
        }

        // 💾 Salva os dados atualizados ou o novo chat no banco.
        await dbManager.chats.set(chatData);

        // 🔥 Se não for um chat privado (identificado pela ausência de '@'), atualiza a atividade do grupo.
        if (!chatId.includes('@')) {
            await dbManager.groups.updateActivity(chatId);
        }

        // 📡 Se a conexão de socket.io estiver disponível na requisição...
        if (req.io) {
            // Emite um evento 'new_message' para a sala correspondente ao chatId.
            req.io.to(chatId).emit('new_message', { chatId, message });
        }

        // ✅ Retorna sucesso.
        res.json({ success: true });
    } catch (e) { 
        // 💣 Em caso de erro, retorna status 500.
        res.status(500).json({ error: e.message }); 
    }
});

// 🗑️ DELETE /private/:chatId
// Rota para deletar mensagens específicas ou um chat inteiro.
router.delete('/private/:chatId', async (req, res) => {
    try {
        const { chatId } = req.params;
        const { userEmail, target, messageIds } = req.body; 

        // 🔐 Requer a identidade do usuário para a operação.
        if (!userEmail) return res.status(400).json({ error: "Identidade do usuário necessária." });

        // 🎯 Lógica para deletar MENSAGENS ESPECÍFICAS.
        if (messageIds && messageIds.length > 0) {
            await dbManager.chats.deleteMessages(chatId, messageIds, userEmail, target);
            
            // 📡 Se a exclusão for para todos (`target === 'all'`), notifica os clientes via socket.
            if (target === 'all' && req.io) {
                req.io.to(chatId).emit('messages_deleted_globally', { chatId, messageIds });
            }
            
            return res.json({ success: true, action: 'messages_deleted' });
        }

        // 🎯 Lógica para deletar o CHAT INTEIRO.
        let result;
        if (target === 'all') {
            // 💥 Exclusão permanente (Hard Delete).
            result = await dbManager.chats.hardDelete(chatId);
            // 📡 Notifica os clientes sobre a exclusão global do chat.
            if (req.io) {
                req.io.to(chatId).emit('chat_deleted_globally', { chatId });
            }
            res.json({ success: true, action: 'deleted_for_all' });
        } else {
            // 👻 Exclusão lógica (Soft Delete), apenas para o usuário que solicitou.
            result = await dbManager.chats.markAsDeleted(chatId, userEmail);
            res.json({ success: true, action: result });
        }
    } catch (e) { 
        // 💣 Em caso de erro, retorna status 500.
        res.status(500).json({ error: e.message }); 
    }
});

// 🙈 POST /groups/:id/hide
// Rota para ocultar uma mensagem para um usuário (placeholder).
// OBS: Atualmente, esta rota não implementa a lógica de banco de dados, apenas retorna o ID.
router.post('/groups/:id/hide', async (req, res) => {
    try {
        const { messageId, userEmail } = req.body;
        // ✅ Retorna o ID da mensagem que foi "ocultada".
        res.json({ success: true, hiddenId: messageId });
    } catch (e) { 
        // 💣 Em caso de erro, retorna status 500.
        res.status(500).json({ error: e.message }); 
    }
});

// 🚢 Exporta o roteador para ser utilizado no servidor principal.
export default router;
