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
📁 Papel da pasta Hooks.
→ Abstrair e reutilizar lógica de estado e efeitos colaterais em componentes React.
→ Manter a lógica de UI separada da lógica de negócios, promovendo um código mais limpo e organizado.

📋 Papel dos arquivos de Hook.
→ Encapsular lógica complexa que pode ser compartilhada entre múltiplos componentes (ex: `useAuthSync`).
→ Gerenciar o ciclo de vida de um estado, incluindo inicialização, atualização e limpeza.
→ Interagir com a camada de serviços (`services/`) para buscar ou enviar dados, desacoplando os componentes da fonte de dados direta.
→ Conter a lógica de manipulação de estado, como filtros, ordenação e transformações de dados.
→ Fornecer uma API simples e reativa para os componentes consumirem.

━━━━━━━━━━━━━━━━━━━━━━
💡 Boas Práticas.

→ **Foco Único**: Cada hook deve ter uma responsabilidade clara e única.
→ **Nomenclatura**: Começar sempre com `use` (ex: `useUserData`).
→ **Reutilização**: Criar hooks para qualquer lógica que se repita em mais de um componente.
→ **Abstração**: Esconder detalhes de implementação complexos dos componentes que o utilizam.
→ **Independência**: Um hook não deve depender diretamente de outro componente, apenas de outros hooks ou serviços.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.
→ useAuthSync.ts
→ useAutoLanguage.ts
→ useGroupRanking.ts
→ useGroupSettings.ts
→ usePreciseLocation.ts
→ useVipGroupSales.ts
→ useVipPricing.ts

━━━━━━━━━━━━━━━━━━━━━━
