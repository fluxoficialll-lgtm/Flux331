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

📁 Papel da pasta Features.
→ Orquestrar a lógica de uma funcionalidade específica, conectando a UI (componentes) com os serviços de backend (hooks e services).
→ Agrupar todos os artefatos relacionados a um domínio de negócio em um só lugar, como `auth`, `groups`, `ads`, etc.

Dentro de cada pasta de feature (ex: `features/groups/`), você encontrará:

→ `components/`: Componentes de UI que são específicos para esta feature e não são reutilizados em outros lugares.
→ `hooks/`: Hooks customizados que encapsulam a lógica de estado e os efeitos colaterais da feature.
→ `logic/`: Funções puras, validadores e lógica de negócio que não dependem do React.
→ `constants/`: Constantes, enums e configurações estáticas da feature.

━━━━━━━━━━━━━━━━━━━━━━
💡 Princípios de Design.

→ **Coesão**: Manter juntos os arquivos que mudam juntos. Se você está trabalhando na funcionalidade de grupos, a maior parte do seu trabalho será dentro de `features/groups`.
→ **Baixo Acoplamento**: Uma feature não deve depender diretamente de outra. A comunicação deve ocorrer através de serviços ou do estado global, se necessário.
→ **Contexto Claro**: Facilita a localização de código relacionado a uma funcionalidade específica, melhorando a manutenção e a entrada de novos desenvolvedores no projeto.

━━━━━━━━━━━━━━━━━━━━━━

📋 Arquivos Comentados.
→ admin/components/MasterHealthRadar.tsx
→ admin/constants/MasterHealthCopy.ts
→ auth/components/CodeVerificationCard.tsx
→ auth/components/LoginEmailCard.tsx
→ auth/components/LoginInitialCard.tsx
→ auth/components/RecoveryEmailCard.tsx
→ auth/components/RegisterCard.tsx
→ ads/constants/AdConstants.ts
→ ads/hooks/useAdCampaignFlow.ts
→ help/components/FaqItem.tsx
→ help/components/SupportContactCard.tsx
→ help/components/SupportModal.tsx
→ groups/constants/GroupConstants.ts
→ groups/constants/GroupRoles.ts
→ groups/hooks/useGroupSettings.ts
→ groups/logic/AccessValidator.ts
→ groups/logic/CapacityValidator.ts
→ groups/logic/GroupPermissions.ts
→ groups/logic/MemberMetrics.ts
→ groups/logic/RevenueCalculator.ts
→ location/components/RadiusSelector.tsx
→ location/components/RegionHierarchySelector.tsx
→ leaderboard/components/LeaderboardListItem.tsx
→ leaderboard/components/PodiumItem.tsx
→ notifications/components/ExpiringVipNotificationCard.tsx
→ profile/components/ProfileHeader.tsx
→ profile/components/ProfileInfoCard.tsx
→ profile/components/ProfileTabNav.tsx
→ ranking/components/RankingListItem.tsx
→ ranking/components/RankingPodium.tsx
→ ranking/components/RankingPodiumItem.tsx
→ ranking/components/RankingTabs.tsx
→ reels/components/ReelActions.tsx
→ reels/components/ReelCommentNode.tsx
→ reels/components/ReelCommentsSheet.tsx
→ reels/components/ReelInfo.tsx
→ reels/components/ReelItem.tsx
→ reels/components/ReelPlayer.tsx
→ user-profile/components/VisitorHeader.tsx
→ user-profile/components/VisitorInfoCard.tsx
→ user-profile/components/VisitorStates.tsx
→ ads/components/steps/AudienceStep.tsx
→ ads/components/steps/CampaignStep.tsx
→ ads/components/steps/CreativeStep.tsx
→ groups/components/channels/AdminSettingsButton.tsx
→ groups/components/channels/ChannelItem.tsx
→ groups/components/channels/ChannelListRenderer.tsx
→ groups/components/channels/ChannelSectionTitle.tsx
→ groups/components/channels/ChannelsFooter.tsx
→ groups/components/channels/ChannelsHero.tsx
→ groups/components/channels/EmptyChannelsState.tsx
→ groups/components/platform/AddFileSophisticatedButton.tsx
→ groups/components/platform/EmptyFolderState.tsx
→ groups/components/platform/FolderContentHeader.tsx
→ groups/components/platform/FolderSection.tsx
→ groups/components/platform/InfoproductCard.tsx
→ groups/components/platform/InfoproductPreviewModal.tsx
→ groups/components/platform/OwnerControls.tsx
→ groups/components/platform/PlatformGroupCard.tsx
→ groups/components/platform/PlatformHero.tsx
→ groups/components/platform/ProductRecommendations.tsx
→ groups/components/platform/UploadProgressCard.tsx
→ groups/components/revenue/PaymentMixCard.tsx
→ groups/components/revenue/RevenueHeader.tsx
→ groups/components/revenue/RevenueMetricsGrid.tsx
→ groups/components/revenue/RevenueSummaryCard.tsx
→ groups/components/settings/AccessSection.tsx
→ groups/components/settings/AuditLogsSection.tsx
→ groups/components/settings/ChannelsSection.tsx
→ groups/components/settings/DangerZoneSection.tsx
→ groups/components/settings/ForbiddenWordCloud.tsx
→ groups/components/settings/InfoSection.tsx
→ groups/components/settings/InviteLinkManager.tsx
→ groups/components/settings/MarketingHub.tsx
→ groups/components/settings/MembersSection.tsx
→ groups/components/settings/ModerationSection.tsx
→ groups/components/settings/PendingApprovalList.tsx
→ groups/components/settings/PermissionToggle.tsx
→ groups/components/settings/PixelConfigCard.tsx
→ groups/components/settings/RevenueSection.tsx
→ groups/components/settings/ScheduleSection.tsx
→ groups/components/settings/StatisticsSection.tsx
→ groups/components/settings/VipMonetizationSection.tsx
→ groups/components/settings/VipPricingCard.tsx
→ groups/hooks/settings/useCheckoutConfig.ts
→ groups/hooks/settings/useGroupAuditLogs.ts
→ groups/hooks/settings/useGroupIdentity.ts
→ groups/hooks/settings/useGroupMembers.ts
→ groups/hooks/settings/useGroupModeration.ts
→ groups/hooks/settings/useGroupStructure.ts
→ groups/hooks/settings/useGroupVIP.ts
→ groups/hooks/settings/useRoleAssignment.ts
→ marketplace/components/details/ProductBottomBar.tsx
→ marketplace/components/details/ProductDescription.tsx
→ marketplace/components/details/ProductHeader.tsx
→ marketplace/components/details/ProductInfo.tsx
→ marketplace/components/details/ProductLightbox.tsx
→ marketplace/components/details/ProductMediaGallery.tsx
→ marketplace/components/details/ProductQuestions.tsx
→ marketplace/components/details/ProductSellerCard.tsx
→ notifications/components/settings/BusinessSection.tsx
→ notifications/components/settings/CommunicationSection.tsx
→ notifications/components/settings/EmailPreferencesSection.tsx
→ notifications/components/settings/GlobalPauseCard.tsx
→ notifications/components/settings/SocialSection.tsx
→ profile/components/tabs/ProfileProductsGrid.tsx
→ profile/components/tabs/ProfileReelsGrid.tsx
→ groups/components/settings/audit/AuditLogEmptyState.tsx
→ groups/components/settings/audit/AuditLogItem.tsx
→ groups/components/settings/audit/AuditLogList.tsx
→ groups/components/settings/channels/ChannelListItem.tsx
→ groups/components/settings/channels/ChannelOptionsModal.tsx
→ groups/components/settings/channels/ChannelsHeader.tsx
→ groups/components/settings/channels/ChannelsNotice.tsx
→ groups/components/settings/checkout/CheckoutConfigHeader.tsx
→ groups/components/settings/checkout/CheckoutLivePreview.tsx
→ groups/components/settings/checkout/CheckoutMethodData.ts
→ groups/components/settings/checkout/CheckoutMethodItem.tsx
→ groups/components/settings/checkout/CheckoutStepSelector.tsx
→ groups/components/settings/members/MemberItem.tsx
→ groups/components/settings/members/MemberList.tsx
→ groups/components/settings/members/MemberSearchBar.tsx
→ groups/components/settings/members/RoleAssignmentModal.tsx
→ groups/components/settings/roles/PermissionToggle.tsx
→ groups/components/settings/roles/RoleEditor.tsx
→ groups/components/settings/roles/RoleListItem.tsx
→ groups/components/settings/sales-platform/FolderCounterCard.tsx
→ groups/components/settings/sales-platform/FolderNamesEditor.tsx
→ groups/components/settings/sales-platform/FolderOptionsModal.tsx
→ groups/components/settings/sales-platform/PlatformInfoBox.tsx
→ groups/components/settings/sales-platform/PlatformPermissionCard.tsx
→ groups/components/settings/sales-platform/PlatformStatusCard.tsx
→ groups/components/settings/sales-platform/PlatformStructureEditor.tsx
→ groups/components/settings/sales-platform/SectionTitleCard.tsx
→ groups/components/settings/channels/options/ContentOptions.tsx
→ groups/components/settings/channels/options/ModerationOptions.tsx
→ groups/components/settings/channels/options/OptionToggle.tsx

━━━━━━━━━━━━━━━━━━━━━━
