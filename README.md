━━━━━━━━━━━━━━━━━━━━━
📜 Diretrizes obrigatórias.
→ Atualizar arquivos README.md com regras.
→ Regras de:
→ Sempre conter categorias.
→ Categoria de 📜 Diretrizes obrigatórias.
→ Categoria de 🛠️ Responsabilidades.
→ Categoria de 📋 Arquivos Comentados.

→ Nunca pagar categorias.
→ Nunca fugir dessa padronização de lista.
→ Ao Adicionar informações não apague outras.
→ Sempre Escrever arquivos com comentários.
→ Comentários sempre em português 🇧🇷.
→ Comentários sempre com emojis.
→ Comentários sempre intuitivos.
→ Não apagar comentários.

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.
📁 Papel do Repositório.
→ Armazenar todo o código-fonte da aplicação, incluindo frontend e backend.
→ Servir como a única fonte de verdade para a arquitetura e implementação do projeto.

🏗️ Estrutura das Pastas Principais.
→ `backend/`: Contém toda a lógica do servidor (backend), construído com Express.js. Gerencia rotas, middleware e a comunicação com o banco de dados.
→ `pages/`: Contém as páginas principais da aplicação frontend (React). Cada arquivo representa uma tela ou uma visão completa.
→ `components/`: Abriga componentes React reutilizáveis que são usados para construir as páginas.
→ `services/`: Local para a lógica de negócio do frontend, como chamadas de API, gerenciamento de estado e interação com serviços externos.
→ `features/`: Organiza o código em "fatias de funcionalidades", agrupando componentes, hooks e lógica relacionados a uma feature específica para melhor modularidade.
→ `database/`: Define a estrutura e a lógica de acesso ao banco de dados, tanto para o frontend quanto para o backend.
→ `routes/`: Configura o roteamento da aplicação frontend, mapeando URLs para as páginas correspondentes.

━━━━━━━━━━━━━━━━━━━━━━
💾 Banco de Dados Definidos.

→  Usar banco de dados PostgreSQL.
→  Usar PostgreSQL para metadados e informações estruturadas.

→  Usar banco de dados Cloudflare R2.
→  Usar Cloudflare R2 para arquivos pesados como:
→ Fotos.
→ Vídeos.
→ Arquivos .ZIP

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.
→ `server.js` (Ponto de entrada do Backend)
→ `index.tsx` (Ponto de entrada do Frontend)
→ `routes/AppRoutes.tsx` (Configuração de Rotas do Frontend)
→ `backend/routes/README.md` (Documentação das Rotas)
→ `README.md` (Este arquivo)

━━━━━━━━━━━━━━━━━━━━━━
