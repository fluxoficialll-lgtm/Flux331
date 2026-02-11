
// 🌩️ Importações de Bibliotecas e Ferramentas
import React, { Suspense } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

// 📚 Importação dos Módulos de Rotas
// Cada módulo representa um domínio funcional da aplicação, agrupando rotas relacionadas.
import { AuthRoutes } from './modules/AuthRoutes';
import { FeedRoutes } from './modules/FeedRoutes';
import { GroupRoutes } from './modules/GroupRoutes';
import { MarketplaceRoutes } from './modules/MarketplaceRoutes';
import { ProfileRoutes } from './modules/ProfileRoutes';
import { SettingsRoutes } from './modules/SettingsRoutes';

/**
 * 🎨 Componente de Carregamento (Spinner)
 *
 * Exibido enquanto os componentes de rota (páginas) são carregados de forma assíncrona (lazy loading).
 * Isso melhora a experiência do usuário, fornecendo um feedback visual durante o carregamento.
 */
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0c0f14] text-white">
    <i className="fa-solid fa-circle-notch fa-spin text-3xl text-[#00c2ff]"></i>
  </div>
);

/**
 * 🧭 Componente Principal de Roteamento (AppRoutes)
 *
 * Este componente orquestra todas as rotas da aplicação, atuando como o ponto central
 * de navegação. Ele utiliza `Suspense` para lidar com o carregamento assíncrono de
 * módulos de rotas, garantindo uma transição suave entre as páginas.
 */
export const AppRoutes = () => {
  return (
    // ⏳ O `Suspense` envolve as rotas para exibir o `LoadingSpinner` enquanto as páginas são carregadas.
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* 🧩 Injeção dos Módulos de Rotas */}
        {/* Cada variável injetada contém um conjunto de rotas (`<Route>`) de um domínio específico. */}
        {AuthRoutes}
        {FeedRoutes}
        {GroupRoutes}
        {MarketplaceRoutes}
        {ProfileRoutes}
        {SettingsRoutes}

        {/* 🔄 Rota de Fallback Global */}
        {/* Se nenhuma rota corresponder à URL atual, o usuário é redirecionado para a página inicial (`/`). */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

// ✈️ Exportação do Componente
export default AppRoutes;
