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
📁 Papel da pasta Repositories.
→ Abstrair e centralizar toda a lógica de acesso ao banco de dados.
→ Servir como a única camada que se comunica diretamente com o banco de dados.

📋 Papel dos arquivos de Repositório.
→ Receber requisições das `Routes` (através do `dbManager`).
→ Executar operações de CRUD (Create, Read, Update, Delete) no banco de dados.
→ Conter queries SQL puras ou chamadas de ORM (Object-Relational Mapping).
→ Retornar os dados formatados do banco de dados para a camada que o chamou.
→ Lidar com transações e conexões com o banco de dados.

━━━━━━━━━━━━━━━━━━━━━━
💾 Banco de Dados Definidos.

→  Usar banco de dados PostgreSQL.
→  Usar PostgreSQL para metadados e dados estruturados.

→  Usar banco de dados Cloudflare R2.
→  Usar Cloudflare R2 para arquivos pesados.
→ Arquivos pesados de.
→ Fotos.
→ Vídeos.
→ .ZIP
━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.
→ AdAnalyticsRepository.js
→ AdRepository.js
→ AdminStatsRepository.js
→ AggregatorRepository.js
→ AnalyticsRepository.js
→ AuditRepository.js
→ ChatRepository.js
→ FinancialAnalyticsRepository.js
→ FinancialRepository.js
→ GroupRepository.js
→ InteractionRepository.js
→ MarketplaceRepository.js
→ PostRepository.js
→ RelationshipRepository.js
→ ReportRepository.js
→ UserAnalyticsRepository.js
→ UserRepository.js


━━━━━━━━━━━━━━━━━━━━━━