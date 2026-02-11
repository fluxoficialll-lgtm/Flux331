━━━━━━━━━━━━━━━━━━━━━
📜 Guia do Backend

→ Este `README` documenta a arquitetura, configuração e execução do servidor.

━━━━━━━━━━━━━━━━━━━━━━
🗿 Arquitetura

→ **Fluxo de Requisição**: Cliente → `Routes` → `Services` → `Database` (via Repositories)
→ **Princípio**: Alta coesão e baixo acoplamento entre os módulos.

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Estrutura de Pastas

→ `routes/`: Define os endpoints da API, valida entradas e chama os serviços.
→ `services/`: Executa a lógica de negócio e integra com serviços externos (ex: Stripe, PayPal, R2).
→ `database/`: Gerencia toda a interação com o banco de dados.
  → `repositories/`: Abstrai as queries do banco de dados (Repository Pattern).
  → `schemas/`: Define os esquemas das tabelas.
→ `middleware/`: Funções intermediárias (autenticação, CORS, logs).
→ `utils/`: Funções utilitárias e validadores.

━━━━━━━━━━━━━━━━━━━━━━
🚀 Execução

→ **1. Instalar Dependências**: `npm install`
→ **2. Configurar Variáveis de Ambiente**:
  → Crie um arquivo `.env` na pasta `backend/`.
  → Consulte o 🗺️ [Mapa de Variáveis de Ambiente](../docs/env-service-mapping.md) para as chaves.
→ **3. Iniciar em Modo de Desenvolvimento**: `npm run dev`

━━━━━━━━━━━━━━━━━━━━━━
🔗 API

→ **Prefixo Base**: `/api`
→ **Exemplos**:
  → `GET /api/ping` → Saúde do servidor.
  → `POST /api/auth/login` → Login de usuário.
  → `GET /api/marketplace/products` → Listagem de produtos.

━━━━━━━━━━━━━━━━━━━━━━
