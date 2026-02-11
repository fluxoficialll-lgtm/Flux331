━━━━━━━━━━━━━━━━━━━━━
🗺️ Mapa de Variáveis de Ambiente

→ Este documento mapeia as variáveis de ambiente essenciais para o funcionamento do projeto, conectando-as aos seus respectivos serviços e locais de uso no código.

━━━━━━━━━━━━━━━━━━━━━━
⚙️ Configurações Gerais

→ `PORT`: Define a porta do servidor backend.
  → 📍 **Local**: Ponto de entrada do servidor (ex: `server.js`).
→ `CLIENT_URL`: URL do frontend para configuração de CORS.
  → 📍 **Local**: `backend/middleware.js`.

━━━━━━━━━━━━━━━━━━━━━━
🗄️ Banco de Dados

→ `DATABASE_URL`: URL de conexão com o banco de dados.
  → 📍 **Local**: `backend/database/pool.js`.

━━━━━━━━━━━━━━━━━━━━━━
🛡️ Segurança e Autenticação

→ `JWT_SECRET`: Chave para assinar Tokens de Autenticação.
  → 📍 **Local**: `backend/routes/auth.js`.
→ `GOOGLE_CLIENT_ID`: ID do cliente para login com Google (OAuth).
  → 📍 **Local**: `backend/routes/auth.js`.
→ `GOOGLE_CLIENT_SECRET`: Segredo do cliente para login com Google (OAuth).
  → 📍 **Local**: `backend/routes/auth.js`.

━━━━━━━━━━━━━━━━━━━━━━
💳 Provedores de Pagamentos

→ **Stripe**
  → `STRIPE_SECRET_KEY`: Chave secreta da API.
    → 📍 **Local**: `backend/services/stripeService.js`

→ **PayPal**
  → `PAYPAL_CLIENT_ID`: ID do cliente da API.
    → 📍 **Local**: `backend/services/paypalService.js`
  → `PAYPAL_CLIENT_SECRET`: Segredo do cliente da API.
    → 📍 **Local**: `backend/services/paypalService.js`

→ **SyncPay**
  → `SYNC_PAY_CLIENT_ID`: ID do cliente da API.
    → 📍 **Local**: `backend/services/syncpayService.js`
  → `SYNC_PAY_CLIENT_SECRET`: Segredo do cliente da API.
    → 📍 **Local**: `backend/services/syncpayService.js`

━━━━━━━━━━━━━━━━━━━━━━
📤 Upload de Arquivos (Cloudflare R2)

→ `R2_ACCOUNT_ID`: ID da conta Cloudflare R2.
  → 📍 **Local**: `backend/services/storageService.js`.
→ `R2_ACCESS_KEY_ID`: Chave de acesso da API do R2.
  → 📍 **Local**: `backend/services/storageService.js`.
→ `R2_SECRET_ACCESS_KEY`: Segredo da chave de acesso do R2.
  → 📍 **Local**: `backend/services/storageService.js`.
→ `R2_BUCKET_NAME`: Nome do bucket no R2.
  → 📍 **Local**: `backend/services/storageService.js`.

━━━━━━━━━━━━━━━━━━━━━━
✉️ Envio de E-mail (SMTP)

→ `SMTP_HOST`: Endereço do servidor SMTP.
  → 📍 **Local**: `backend/services/emailService.js` (a criar).
→ `SMTP_PORT`: Porta do servidor SMTP.
  → 📍 **Local**: `backend/services/emailService.js` (a criar).
→ `SMTP_USER`: Usuário de autenticação do SMTP.
  → 📍 **Local**: `backend/services/emailService.js` (a criar).
→ `SMTP_PASS`: Senha de autenticação do SMTP.
  → 📍 **Local**: `backend/services/emailService.js` (a criar).

━━━━━━━━━━━━━━━━━━━━━━
🌐 Frontend (Vite)

→ `VITE_API_URL`: URL base da API do backend.
  → 📍 **Local**: Código do frontend (ex: `src/lib/axios.js`).

━━━━━━━━━━━━━━━━━━━━━━
