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
📁 Papel da pasta Components.
→ Armazenar componentes de UI reutilizáveis, que são os blocos de construção da interface.
→ Foco em apresentação e interações de baixo nível.

📋 Papel dos arquivos de Componente.
→ **Apresentação Visual**: Renderizar um pedaço específico da UI (ex: um botão, um card, um input).
→ **Reutilização**: Ser genérico o suficiente para ser usado em diferentes partes da aplicação sem precisar de modificações.
→ **Props**: Receber dados e callbacks exclusivamente via `props` para se manter desacoplado da lógica de negócio.
→ **Estado Mínimo**: Conter apenas estado relacionado à sua própria aparência ou interações simples (ex: estado de `hover`, `focus`). Não deve buscar dados ou gerenciar estado complexo da aplicação.
→ **Estilização**: Encapsular seus próprios estilos, seja via CSS-in-JS, módulos CSS ou classes de utilitários como TailwindCSS.

━━━━━━━━━━━━━━━━━━━━━━
💡 Estrutura Recomendada.

→ **Raiz (`/components`)**: Para componentes verdadeiramente globais e atômicos (ex: `Button.tsx`, `Input.tsx`).
→ **Subpastas por Domínio (`/components/feed`, `/components/chat`)**: Para componentes que pertencem a uma feature ou contexto específico, mas ainda são reutilizáveis dentro desse domínio.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.
→ Button.tsx
→ GlobalErrorBoundary.tsx
→ GroupAttachmentCard.tsx
→ ImageCarousel.tsx
→ Input.tsx
→ Layout.tsx
→ LazyMedia.tsx
→ ModalSystem.tsx
→ PostHeader.tsx
→ PostText.tsx
→ ads/AdDurationModal.tsx
→ ads/AdFlowFooter.tsx
→ ads/AdFlowHeader.tsx
→ ads/AdPreview.tsx
→ ads/AdSelectionCards.tsx
→ ads/BudgetSection.tsx
→ ads/CampaignMacroCard.tsx
→ ads/CtaSelectorModal.tsx
→ ads/DestinationCreativeSection.tsx
→ ads/DetailedLocationSection.tsx
→ ads/LookalikeSection.tsx
→ ads/ObjectiveSection.tsx
→ ads/PlacementSection.tsx
→ ads/SelectionField.tsx
→ ads/StrategySection.tsx
→ ads/TargetingSection.tsx
→ auth/ProtectedRoute.tsx
→ chat/AudioPlayer.tsx
→ chat/ChatHeader.tsx
→ chat/ChatInput.tsx
→ chat/ChatMenuModal.tsx
→ chat/MediaPreviewOverlay.tsx
→ chat/MessageItem.tsx
→ chat/MessageListItem.tsx
→ chat/MessagesEmptyState.tsx
→ chat/MessagesFooter.tsx
→ chat/MessagesMenuModal.tsx
→ financial/AffiliateCard.tsx
→ financial/BalanceCard.tsx
→ financial/GatewayCard.tsx
→ financial/ReferredSellersModal.tsx
→ feed/FeedItem.tsx
→ feed/PollPost.tsx
→ feed/PostActions.tsx
→ layout/DeepLinkHandler.tsx
→ layout/Footer.tsx
→ layout/GlobalTracker.tsx
→ layout/MainHeader.tsx
→ groups/AccessTypeModal.tsx
→ groups/CurrencySelectorModal.tsx
→ groups/GlobalSimulatorModal.tsx
→ groups/PixelSettingsModal.tsx
→ groups/ProviderSelectorModal.tsx
→ groups/TrackingModal.tsx
→ location/AutoLocationCard.tsx
→ location/DistanceRadiusCard.tsx
→ location/GlobalFilterCard.tsx
→ marketplace/CategoryBar.tsx
→ marketplace/MarketplaceFAB.tsx
→ marketplace/MarketplaceHeader.tsx
→ marketplace/MarketplaceSearchBar.tsx
→ marketplace/ProductCard.tsx
→ marketplace/ProductsGrid.tsx
→ notifications/FilterBar.tsx
→ notifications/NotificationCard.tsx
→ payments/EmailCaptureModal.tsx
→ payments/PayPalModel.tsx
→ payments/PaymentFlowModal.tsx
→ payments/RedirectionBridgeCard.tsx
→ payments/StripeModel.tsx
→ payments/SyncPayModel.tsx
→ profile/FollowListModal.tsx
→ settings/AccountGroup.tsx
→ settings/GeneralGroup.tsx
→ settings/LanguageSelectorModal.tsx
→ settings/PrivacyGroup.tsx
→ settings/SettingItem.tsx
→ store/CampaignStoreList.tsx
→ store/ProductStoreList.tsx
→ ui/AvatarPreviewModal.tsx
→ ui/ImageCropModal.tsx
→ vip/VipCheckout.tsx
→ vip/VipCopy.tsx
→ vip/VipGallery.tsx
→ vip/VipSalesCTA.tsx
→ vip/VipSalesCarousel.tsx
→ vip/VipSalesCopyBox.tsx
→ vip/VipSalesHeader.tsx
→ vip/VipSalesMediaZoom.tsx
→ vip/VipSalesModals.tsx
→ vip/VipSalesPriceBadge.tsx
→ ads/performance/AudienceMetrics.tsx
→ ads/performance/CampaignInfoCard.tsx
→ ads/performance/ClickMetrics.tsx
→ ads/performance/ConversionMetrics.tsx
→ ads/performance/CreativeMetrics.tsx
→ ads/performance/DeliveryMetrics.tsx
→ ads/performance/FinancialMetrics.tsx
→ ads/performance/FunnelMetrics.tsx
→ ads/performance/MetricCard.tsx
→ ads/performance/SystemMetrics.tsx
→ ads/selection/AdContentTabs.tsx
→ ads/selection/AdSelectionCard.tsx
→ ads/selection/AdSelectionHeader.tsx
→ ads/selection/AdSelectionInfoBox.tsx
→ ads/selection/BaseSelectionCard.tsx
→ ads/selection/BoostContentCard.tsx
→ ads/selection/CreateFromScratchCard.tsx
→ ads/selection/PostSelectionCard.tsx
→ ads/selection/ReelSelectionCard.tsx
→ ads/selection/SalesAlgorithmCard.tsx
→ feed/search/FeedSearchFilters.tsx
→ feed/search/FeedSearchHeader.tsx
→ feed/search/FeedSearchResults.tsx
→ groups/list/CreateGroupFAB.tsx
→ groups/list/GroupListItem.tsx
→ groups/list/GroupMenuDropdown.tsx
→ groups/list/JoinViaLinkBtn.tsx
→ groups/menu/GroupChatActions.tsx
→ groups/menu/GroupMenuModal.tsx
→ groups/settings/AccessSection.tsx
→ groups/settings/InfoSection.tsx
→ groups/ui/GroupCapacityBadge.tsx
→ payments/providers/PayPalForm.tsx
→ payments/providers/StripeForm.tsx
→ payments/providers/SyncPayForm.tsx
→ payments/stripe/StripeAchForm.tsx
→ payments/stripe/StripeBacsForm.tsx
→ payments/stripe/StripeBecsForm.tsx
→ payments/stripe/StripeBoletoView.tsx
→ payments/stripe/StripeCardForm.tsx
→ payments/stripe/StripeInteracView.tsx
→ payments/stripe/StripeKonbiniView.tsx
→ payments/stripe/StripeOxxoView.tsx
→ payments/stripe/StripePadForm.tsx
→ payments/stripe/StripePayNowView.tsx
→ payments/stripe/StripePixView.tsx
→ payments/stripe/StripeSepaForm.tsx
→ payments/stripe/StripeUpiView.tsx
→ ui/comments/CommentItem.tsx
→ ui/comments/CommentSheet.tsx
→ ui/user/UserAvatar.tsx
→ ui/user/UserBadge.tsx
→ ui/user/UserName.tsx

━━━━━━━━━━━━━━━━━━━━━━
