// 📦 Importa o framework Express para criar e gerenciar o servidor.
import express from 'express';
// 🛡️ Importa o middleware de validação para garantir que apenas administradores acessem as rotas.
import { validateAdmin } from '../middleware.js';
// 🚚 Importa o dispatcher que processa e direciona todas as ações administrativas.
import { adminDispatcher } from './admin/dispatcher.js';

// 🎉 Inicializa um novo objeto de roteador do Express.
const router = express.Router();

/**
 * 🚪 ENDPOINT ÚNICO ADMINISTRATIVO
 * ---------------------------------------------------------
 * 🤯 A partir de agora, não existem mais rotas fixas no Admin.
 * 🚀 Tudo é resolvido dinamicamente pelo Dispatcher para maior flexibilidade.
 * 
 * 📝 Padrão da URL: /api/admin/execute/:category/:action
 * @param {string} category - A categoria da ação a ser executada (ex: 'users', 'groups').
 * @param {string} action - A ação específica a ser realizada (ex: 'get-all', 'update-status').
 */
// 📞 Define uma rota que captura TODAS as requisições (GET, POST, etc.) no padrão especificado.
// 1️⃣ Primeiro, o middleware `validateAdmin` é executado para verificar as permissões.
// 2️⃣ Se a validação for bem-sucedida, a requisição é passada para o `adminDispatcher`.
router.all('/execute/:category/:action', validateAdmin, adminDispatcher);

// 🚢 Exporta o roteador para que ele possa ser usado no arquivo principal do servidor.
export default router;