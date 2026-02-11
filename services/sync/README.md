
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
→ **Fluxo de Dados**: UI Components → **Sync Services** ↔️ Backend API / Sockets
→ **Responsabilidade**: Camada de Estado e Hidratação (State & Hydration Layer)

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Sync.
→ Gerenciar o estado de inicialização da aplicação ("hidratação").
→ Garantir que dados críticos estejam carregados antes da UI ser liberada.
→ Manter a sincronização contínua de dados com o servidor.
→ Orquestrar a ordem em que os dados são carregados e atualizados.

📋 Papel dos arquivos de Sincronização.
→ **`HydrationManager.ts`**: Controlar o fluxo de inicialização, liberando a UI apenas quando os módulos essenciais (`AUTH`, `GROUPS`, etc.) estiverem prontos.
→ **`SyncState.ts`**: Definir os estados do processo de sincronização (ex: `IDLE`, `SYNCING`, `ERROR`) para um controle previsível.
→ **`AccountSyncService.ts`**: Sincronizar dados específicos da conta do usuário.
→ **`ActionOutbox.ts`**: Gerenciar uma fila de ações do usuário a serem enviadas ao servidor, garantindo consistência mesmo com conectividade intermitente.

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `sync`:
→ **`App.tsx`** (fora da pasta) interage com o `HydrationManager` para exibir a tela de "Iniciando Protocolos...".
→ O **`HydrationManager`** determina se a aplicação está "hidratada" e pronta.
→ Para usuários não autenticados, ele libera a UI imediatamente (a correção implementada).
→ Para usuários autenticados, ele aguarda os "workers" e "services" de sincronização marcarem os módulos críticos como prontos.
→ Os **`workers`** (como `SocialSyncWorker`) realizam a sincronização de dados de uma área específica.
→ O **`SyncState`** fornece os estados que guiam as transições na UI durante a sincronização.
→ O **`ActionOutbox`** atua como uma camada de buffer, garantindo que as ações do usuário não se percam.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.

*   `HydrationManager.ts`
*   `README.md`

━━━━━━━━━━━━━━━━━━━━━━
