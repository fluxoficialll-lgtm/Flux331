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
→ **Fluxo de Dados**: AppRoutes → **Módulos de Rota** → Pages
→ **Responsabilidade**: Agrupamento de Rotas por Domínio

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Modules.
→ Agrupar rotas que pertencem a um mesmo domínio funcional da aplicação (ex: autenticação, feed, grupos).
→ Manter o arquivo principal de rotas (`AppRoutes.tsx`) limpo e organizado.

📋 Papel dos arquivos de Módulo de Rota.
→ **Definir um conjunto de rotas**: Cada arquivo exporta uma ou mais tags `<Route>` do `react-router-dom`.
→ **Lazy Loading de Páginas**: Utilizar `React.lazy` para importar os componentes de página, permitindo o code-splitting e carregamento sob demanda.
→ **Aplicar Layouts Específicos**: Envolver grupos de rotas com componentes de layout, se necessário.
→ **Implementar Rotas Protegidas**: Integrar componentes de proteção de rota (ex: `ProtectedRoute`) para controlar o acesso.

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `routes/modules`:
→ **Importados por `AppRoutes.tsx`**: O arquivo principal de rotas injeta os módulos para compor a árvore de roteamento completa.
→ **Renderizam `Pages`**: Mapeiam as URLs para os componentes de página correspondentes, geralmente carregados com `React.lazy`.
→ **Podem usar `Layouts`**: Alguns módulos podem usar componentes de `Layout` para fornecer uma estrutura visual consistente a um conjunto de páginas.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.

→ AuthRoutes.tsx
→ FeedRoutes.tsx
→ GroupRoutes.tsx
→ MarketplaceRoutes.tsx
→ ProfileRoutes.tsx
→ SettingsRoutes.tsx

━━━━━━━━━━━━━━━━━━━━━━
