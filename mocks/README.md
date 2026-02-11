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
→ **Fluxo de Dados**: **Mocks** → Features / Screens (substitui a camada de `Services`)
→ **Responsabilidade**: Camada de Dados Falsos (Mock Data Layer)

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Mocks.
→ Fornecer dados falsos para desenvolvimento e testes.
→ Permitir desenvolvimento frontend independente do backend.
→ Facilitar a criação de cenários de teste específicos.

📋 Papel dos arquivos de Mock.
→ **Estrutura Consistente**: Exportar dados com schema igual ao da API real.
→ **Dados Variados**: Oferecer dados diversos para testar múltiplos estados da UI.
→ **Nomenclatura Clara**: Nomear arquivos de forma que indiquem seu conteúdo.
→ **Fácil Importação**: Usar um `index.ts` para reexportar todos os mocks.

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `mocks`:
→ **Substituem os `services`**: Usados no lugar de serviços reais em testes.
→ **Consumidos por `features` e `screens`**: Renderizam a UI sem depender de um backend.
→ **Sem dependências complexas**: Apenas exportam dados estáticos.

━━━━━━━━━━━━━━━━━━━━━━
💡 Como Usar.

```typescript
import { mockUsers } from '@/mocks/users.mock';

function UserList() {
  const users = mockUsers; // Usa os dados falsos

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.
→ campaigns.mock.ts
→ chats.mock.ts
→ groups.mock.ts
→ index.ts
→ marketplace.mock.ts
→ notifications.mock.ts
→ posts.mock.ts
→ users.mock.ts

━━━━━━━━━━━━━━━━━━━━━━
