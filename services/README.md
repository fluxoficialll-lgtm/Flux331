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
→ **Fluxo de Dados**: Routes → **Services** → Database / External API
→ **Responsabilidade**: Camada de Lógica de Negócio e Acesso a Dados (Business Logic & Data Access Layer)

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Services.
→ Encapsular comunicação com fontes de dados externas (APIs, DBs).
→ Abstrair detalhes da fonte de dados com métodos claros.
→ Gerenciar lógica de negócio transversal (auth, erros, logs).

Dentro desta pasta, você encontrará:
→ **Abstrações de API**: Funções como `fetchGroups()` ou `createPost()`.
→ **Serviços de Terceiros**: Conectores para Stripe, Firebase, etc.
→ **Serviços de Infraestrutura**: `apiClient.ts`, `cryptoService.ts`, etc.
→ **Mocks vs. Real**: Divisão opcional para alternar entre dados reais e falsos.

━━━━━━━━━━━━━━━━━━━━━━
💡 Princípios de Design.

→ **SRP**: Cada serviço tem uma única responsabilidade.
→ **Injeção de Dependência**: Serviços são injetados para facilitar testes.
→ **Interface Clara**: Métodos exportados devem ser bem definidos e simples.

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `services`:
→ **Consumidos por `features` e `hooks`**: Fornecem dados e lógica para a UI.
→ **Abstraem o acesso a dados**: Atuam como intermediários para APIs ou DBs.
→ **Substituíveis por `mocks`**: Permitem a troca por dados falsos em testes.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.

*A lista de arquivos nesta pasta é muito extensa e pode ser encontrada na estrutura de arquivos do projeto.*

━━━━━━━━━━━━━━━━━━━━━━
