/**
 * @file envValidator.js
 * @description Valida e organiza as variáveis de ambiente essenciais, garantindo que a aplicação não inicie se configurações críticas estiverem ausentes.
 */

// -----------------------------------------------------------------------------
// 📋 ESTRUTURA DE VARIÁVEIS OBRIGATÓRIAS POR CATEGORIA
// As variáveis são agrupadas por funcionalidade para facilitar a identificação
// de qual parte do sistema precisa de configuração.
// -----------------------------------------------------------------------------
const ENV_VARS_BY_CATEGORY = {
    '⚙️ Configurações Gerais': ['PORT', 'CLIENT_URL'],
    '🗄️ Banco de Dados': ['DATABASE_URL'],
    '🛡️ Segurança e Autenticação': ['JWT_SECRET', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET'],
    '💳 Provedores de Pagamentos - Stripe': ['STRIPE_SECRET_KEY'],
    '💳 Provedores de Pagamentos - PayPal': ['PAYPAL_CLIENT_ID', 'PAYPAL_CLIENT_SECRET'],
    '💳 Provedores de Pagamentos - SyncPay': ['SYNC_PAY_CLIENT_ID', 'SYNC_PAY_CLIENT_SECRET'],
    '📤 Upload de Arquivos (Cloudflare R2)': ['R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY', 'R2_BUCKET_NAME'],
    '✉️ Envio de E-mail (SMTP)': ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'],
};

/**
 * Valida as variáveis de ambiente essenciais, agrupadas por categoria.
 * Loga o status de cada uma e encerra a aplicação com um relatório claro se alguma estiver faltando.
 */
export function validateAndLogEnv() {
    console.log('\n--- Verificando Variáveis de Ambiente Essenciais ---');
    const missingVarsByCategory = {};
    let totalMissing = 0;

    // Itera sobre cada categoria e suas respectivas variáveis
    for (const category in ENV_VARS_BY_CATEGORY) {
        const vars = ENV_VARS_BY_CATEGORY[category];
        const missingInCategory = [];

        vars.forEach(varName => {
            // Verifica se a variável existe no `process.env` e não está vazia.
            if (process.env[varName] && process.env[varName].trim() !== '') {
                console.log(`[ENV] ✅ ${varName}: Reconhecida.`);
            } else {
                console.error(`[ENV] ❌ ${varName}: Não encontrada ou vazia.`);
                missingInCategory.push(varName);
            }
        });

        // Se houver variáveis faltando na categoria, registra para o relatório de erro.
        if (missingInCategory.length > 0) {
            missingVarsByCategory[category] = missingInCategory;
            totalMissing += missingInCategory.length;
        }
    }

    // Se qualquer variável estiver faltando, exibe um relatório detalhado e encerra a aplicação.
    if (totalMissing > 0) {
        console.error('\n--- 🚨 Configuração Incompleta --- ');
        console.error('ERRO: A aplicação não pode iniciar. As seguintes variáveis de ambiente são obrigatórias e não foram definidas:\n');

        // Exibe as variáveis faltando, agrupadas por sua categoria.
        for (const category in missingVarsByCategory) {
            console.error(`  ${category}:`);
            missingVarsByCategory[category].forEach(varName => {
                console.error(`    - ${varName}`);
            });
        }

        console.error('\nPor favor, configure as variáveis em seu arquivo .env ou no ambiente do servidor e reinicie a aplicação.');
        
        // Encerra o processo com um código de erro.
        process.exit(1);
    } else {
        console.log('--- ✅ Todas as variáveis de ambiente foram carregadas com sucesso. ---\n');
    }
}
