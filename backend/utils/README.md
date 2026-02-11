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
→ **Fluxo de Dados**: Ponto de Entrada do Servidor (ex: `server.js`) → **Módulos Utilitários**
→ **Responsabilidade**: Fornecer ferramentas de suporte transversais para o backend.

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Utils.
→ Armazenar módulos de propósito geral que não fazem parte da lógica de negócio principal.
→ Abstrair tarefas comuns e reutilizáveis, como validações, formatações e outras ferramentas de suporte.
→ Manter os serviços de negócio (`/services`) focados em suas respectivas responsabilidades.

📋 Papel dos arquivos de Utilitário.
→ **Exportar Funções Puras**: Fornecer funções que, idealmente, recebem uma entrada e produzem uma saída sem efeitos colaterais.
→ **Validação de Configuração**: Garantir que o ambiente da aplicação está configurado corretamente antes de iniciar.
→ **Ferramentas Reutilizáveis**: Criar lógica que pode ser importada e usada em múltiplos locais do backend.

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `utils`:
→ **Importados por `server.js` ou outros serviços**: Os utilitários são chamados no ponto de entrada do servidor (para validação) ou por outros serviços que precisam de sua funcionalidade.
→ **Não possuem dependências de negócio**: Idealmente, um utilitário não deve importar de um serviço da pasta `/services` para evitar acoplamento.
→ **Podem ser usados em qualquer camada**: A natureza transversal dos utilitários permite que sejam usados em diferentes partes do backend.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.

→ envValidator.js

━━━━━━━━━━━━━━━━━━━━━━
