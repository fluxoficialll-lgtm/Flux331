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
→ **Fluxo de Dados**: TypeScript Compiler → Definições de Tipo (`.d.ts`) → Código Fonte (`.ts`, `.tsx`)
→ **Responsabilidade**: Definir as "assinaturas" e "contratos" de dados exclusivos do ambiente backend.

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Types.
→ Centralizar todas as definições de tipo (`interfaces`, `types`, `enums`) que são específicas do backend.
→ Fornecer segurança de tipo e autocomplete para objetos globais do ambiente Node.js, como `process.env`.
→ Descrever a estrutura de objetos, parâmetros de função e retornos que são usados internamente no servidor.

📋 Papel dos arquivos de Definição de Tipo (`.d.ts`).
→ **Estender Tipos Globais**: Adicionar propriedades a interfaces globais do TypeScript ou Node.js (como em `environment.d.ts`).
→ **Declarar Módulos sem Tipos**: Fornecer tipos para bibliotecas JavaScript que não vêm com suas próprias definições.
→ **Definir Estruturas de Dados**: Criar um local canônico para interfaces e tipos que são reutilizados em vários serviços e controladores do backend.

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `types`:
→ **Não são importados diretamente**: Arquivos de declaração global (`.d.ts`) são automaticamente reconhecidos pelo compilador TypeScript com base na configuração do `tsconfig.json` do backend.
→ **Fornecem contexto ao compilador**: O TypeScript usa esses arquivos para validar o resto do código do backend.
→ **Mantêm a separação de contextos**: Garante que tipos sensíveis ou específicos do servidor (como as variáveis de ambiente) não "vazem" para o contexto do frontend.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.

→ environment.d.ts

━━━━━━━━━━━━━━━━━━━━━━
