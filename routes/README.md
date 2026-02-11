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
→ **Fluxo de Dados**: Ponto de Entrada da Aplicação → **AppRoutes** → Pages
→ **Responsabilidade**: Camada de Roteamento (Routing Layer)

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Routes.
→ Definir todas as rotas da aplicação.
→ Agrupar rotas relacionadas em módulos para melhor organização.

📋 Papel dos arquivos de Rota.
→ **Mapeamento de URL**: Associar URLs a componentes de página (`Pages`).
→ **Proteção de Rotas**: Aplicar lógica de autenticação e autorização para proteger rotas.
→ **Carregamento de Componentes**: Gerenciar o carregamento de páginas, incluindo lazy loading para otimização.

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `routes`:
→ **Ponto de Entrada**: Servem como o ponto de entrada para a renderização de conteúdo da aplicação.
→ **Renderizam `Pages`**: São responsáveis por renderizar os componentes de página correspondentes a cada URL.
→ **Contêm Lógica de Proteção**: Podem encapsular a lógica que determina se um usuário tem permissão para acessar uma determinada rota.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.

*A lista de arquivos nesta pasta pode ser encontrada na estrutura de arquivos do projeto.*

━━━━━━━━━━━━━━━━━━━━━━
