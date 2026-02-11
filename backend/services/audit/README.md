
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
→ **Fluxo de Dados**: Services (Negócio) → **Services (Audit)** → Banco de Dados / Arquivos de Log
→ **Responsabilidade**: Camada de Registro e Auditoria (Logging & Auditing Layer)

━━━━━━━━━━━━━━━━━━━━━━
🛠️ Responsabilidades.

📁 Papel da pasta Audit.
→ Registrar todos os eventos críticos e informativos do sistema.
→ Fornecer uma trilha de auditoria para fins de segurança e depuração.
→ Monitorar a saúde e o tráfego da aplicação em tempo real.
→ Centralizar a lógica de como e onde os logs são armazenados.

📋 Papel dos arquivos de Auditoria.
→ **`TraceMiddleware.js`**: Middleware que intercepta requisições para rastreamento.
→ **`FinancialAuditLogger.js`**: Especializado em registrar eventos financeiros (taxas, transações).
→ **`trafficLogger.js`**: Registra informações sobre o tráfego HTTP (quem acessou o quê).
→ **`heartbeatLogger.js`**: Monitora a "saúde" do sistema, verificando se ele está operacional.
→ **`bridgeLogger.js`**: Registra eventos que ocorrem na ponte entre o cliente e o servidor.

━━━━━━━━━━━━━━━━━━━━━━
🔗 Relação entre os Arquivos

📄 Os arquivos na pasta `audit`:
→ São chamados por outros serviços (`payments`, `users`, etc.) quando uma ação importante ocorre.
→ Atuam como "observadores" passivos que não interferem na lógica de negócio.
→ Formatam os dados do evento em um registro de log padronizado.
→ Enviam esses registros para o local de armazenamento (console, arquivo ou banco de dados).
→ As rotas do painel de administração (`/admin`) consomem esses logs para exibir os painéis e gráficos.
→ Não possuem lógica de negócio; sua única função é registrar o que aconteceu.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.

*   `README.md` (este arquivo)

━━━━━━━━━━━━━━━━━━━━━━
