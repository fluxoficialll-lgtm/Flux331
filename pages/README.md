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
→ **Fluxo de Dados**: AppRoutes → **Pages** → Features / Hooks → Services
→ **Responsabilidade**: Camada de Apresentação (Presentation Layer)

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Pages.
→ Agir como a porta de entrada para as telas da aplicação.
→ Orquestrar a interface do usuário, combinando múltiplos `features` e `components`.
→ Gerenciar o estado e o fluxo de dados específico de cada tela.

📋 Papel dos arquivos de Página.
→ **Orquestração da UI**: Reúne componentes para construir uma interface coesa.
→ **Comunicação com o Backend**: Inicia a busca de dados através de `hooks` e `services`.
→ **Gerenciamento de Estado**: Controla o estado exclusivo da página (formulários, modais, etc.).

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `pages`:
→ **Renderizados por `AppRoutes`**: Cada página é associada a uma rota específica.
→ **Consomem `features` e `hooks`**: Utilizam a lógica de negócio e de estado para funcionar.
→ **Orquestram `components`**: Montam a UI final a partir de componentes reutilizáveis.
→ **Disparam `services`**: Indiretamente, ao usar hooks, iniciam a comunicação com o backend.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.

*A lista de arquivos nesta pasta pode ser encontrada na estrutura de arquivos do projeto.*

━━━━━━━━━━━━━━━━━━━━━━
