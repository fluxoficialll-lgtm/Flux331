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
→ **Fluxo de Dados**: **Flows** → Screens / Features
→ **Responsabilidade**: Camada de Orquestração de UI (UI Orchestration Layer)

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Flows.
→ Orquestrar navegação e lógica de processos com múltiplos passos.
→ Guiar o usuário através de uma jornada (onboarding, checkout).

📋 Papel dos arquivos de Flow.
→ **Gerenciar Estado**: Manter o estado global do processo.
→ **Navegação Condicional**: Decidir a próxima tela a ser exibida.
→ **Composição de Telas**: Montar telas em uma sequência lógica.
→ **Não contém UI**: Renderiza componentes, mas não possui UI própria.

━━━━━━━━━━━━━━━━━━━━━━
💡 Exemplo de Uso.

Um `CheckoutFlow.tsx` poderia:
1.  Controlar o passo atual com um estado (ex: `address`).
2.  Renderizar a tela correspondente ao passo (ex: `<AddressScreen />`).
3.  Atualizar o passo ao concluir uma etapa (ex: para `payment`).
4.  Renderizar a próxima tela do fluxo (ex: `<PaymentScreen />`).

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `flows`:
→ **Orquestram `screens` e `features`**: Importam e exibem telas em ordem.
→ **Consomem `hooks` e `services`**: Usam estado e serviços para dados.
→ **Não possuem lógica de UI isolada**: Focam no estado e navegação do processo.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.
→ auth/OnboardingFlow.tsx
→ groups/AccessValidationFlow.tsx
→ marketplace/CheckoutFlow.tsx
→ content/CreationFlow.tsx
→ user/ProfileFlow.tsx

━━━━━━━━━━━━━━━━━━━━━━
