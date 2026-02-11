━━━━━━━━━━━━━━━━━━━━━
📜 Diretrizes obrigatórias.
→ Atualizar arquivos README.md com regras.
→ Regras de:
→ Sempre conter categorias.
→ Categoria de 📜 Diretrizes obrigatórias.
→ Categoria de 🗿 Padrão de Arquitetura do Projeto.
→ Categoria de 🛠️ Responsabilidades.
→ Categoria de 🔗 Relação entre os Arquivos.
→ Categoria de 📋 Arquivos Comentados.

→ Nunca pagar categorias.
→ Nunca fugir dessa padronização de lista.
→ Ao Adicionar informações não apague outras.
→ Sempre Escrever arquivos com comentários.
→ Comentários sempre em português 🇧🇷.
→ Comentários sempre com emojis.
→ Comentários sempre intuitivos.
→ Não apagar comentários.
→ Sempre Escrever linhas curtas e precisas em listas de readme.
→ Sempre Escrever linhas com ordem lógica temporal.
→ Nunca agrupar responsabilidades diferentes na mesma linha; separar cada ação em um item individual da lista.

━━━━━━━━━━━━━━━━━━━━━━
🗿 Padrão de Arquitetura do Projeto.
→ **Fluxo de Dados**: Client → **Routes** → Services → Database
→ **Responsabilidade**: Camada de Entrada (Entry Layer)

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Routes.
→ Definir endpoints da API para clientes.
→ Servir de entrada para requisições HTTP.

📋 Papel dos arquivos de Rota.
→ **Mapeamento**: Associar URL e método HTTP a uma ação.
→ **Validação**: Validar dados de entrada da requisição.
→ **Orquestração**: Chamar serviços ou managers para executar a lógica.
→ **Resposta**: Formatar e enviar a resposta HTTP ao cliente.

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `routes`:
→ Recebem requisições HTTP de clientes.
→ Definem o método HTTP (GET, POST, etc.).
→ Usam middlewares para validação.
→ Direcionam requisições para a lógica de negócio.
→ Encaminham parâmetros e corpo da requisição.
→ Não executam regras de negócio complexas.
→ Não acessam o banco de dados diretamente.
→ Fazem apenas o roteamento e fluxo inicial.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.

*A lista de arquivos nesta pasta é muito extensa e pode ser encontrada na estrutura de arquivos do projeto. Já foram comentados: `marketplace.js`, `messages.js`, `moderation.js`, `payments.js`, `posts.js`, `screens.js`, `social.js`.*

━━━━━━━━━━━━━━━━━━━━━━
