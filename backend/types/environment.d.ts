/**
 * @file environment.d.ts
 * @description Define os tipos TypeScript para as variáveis de ambiente do projeto.
 * 
 *              Este arquivo de declaração global (d.ts) estende a interface ProcessEnv do NodeJS.
 *              Isso permite que o TypeScript entenda, valide e forneça autocomplete para as 
 *              variáveis de ambiente personalizadas do seu projeto (process.env).
 */

// Adiciona a exportação vazia para garantir que este arquivo seja tratado como um módulo.
export {};

declare global {
  namespace NodeJS {
    // Estende a interface global ProcessEnv com as variáveis do nosso projeto.
    interface ProcessEnv {
      // --- Conexão e Configurações do Servidor ---
      /**
       * A URL de conexão completa para o banco de dados principal.
       */
      DATABASE_URL: string;
      /**
       * A porta em que o servidor backend irá rodar.
       */
      PORT: string;
      /**
       * A URL base da aplicação cliente (front-end), usada para CORS e redirects.
       */
      CLIENT_URL: string;

      // --- Autenticação e Segurança ---
      /**
       * A chave secreta usada para assinar e verificar os JSON Web Tokens (JWT).
       */
      JWT_SECRET: string;

      // --- Serviços de Terceiros (APIs) ---
      /**
       * A chave de API secreta para autenticar com os serviços da Stripe.
       */
      STRIPE_API_KEY: string;
      /**
       * O segredo do webhook da Stripe para verificar a autenticidade dos eventos recebidos.
       */
      STRIPE_WEBHOOK_SECRET: string;
      /**
       * A URL de conexão para o serviço de armazenamento de mídia Cloudinary.
       */
      CLOUDINARY_URL: string;
      /**
       * A chave de API para o serviço de envio de e-mails SendGrid.
       */
      SENDGRID_API_KEY: string;

      // --- Autenticação Social (OAuth) ---
      /**
       * O Client ID fornecido pelo Google para o fluxo de autenticação OAuth.
       */
      GOOGLE_CLIENT_ID: string;
      /**
       * O Client Secret fornecido pelo Google para o fluxo de autenticação OAuth.
       */
      GOOGLE_CLIENT_SECRET: string;
    }
  }
}
