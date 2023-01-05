# vercel-webhooks

Contains types and type assertions for [Vercel Webhooks](https://vercel.com/docs/integrations/webhooks-overview/webhooks-api).

## Types

- `VercelID` - string alias.
- `VercelWebhookPayload` - Base Payload type information.
- `VercelDeploymentCreatedWebhookPayload`
- `VercelDeploymentSucceededWebhookPayload`
- `VercelDeploymentReadyWebhookPayload`
- `VercelDeploymentCanceledWebhookPayload`
- `VercelDeploymentErrorWebhookPayload`
- `VercelDeploymentCheckRerequestedWebhookPayload`
- `VercelProjectCreatedWebhookPayload`
- `VercelProjectRemovedWebhookPayload`
- `VercelIntegrationConfigurationScopeChangeConfirmedWebhookPayload`
- `VercelIntegrationConfigurationRemovedWebhookPayload`
- `VercelIntegrationConfigurationPermissionUpgradedWebhookPayload`
- `VercelDomainCreatedWebhookPayload`

## Assertions

Pass the request body to these functions to get type assertions.

- `isVercelDeploymentCreatedWebhookPayload`
- `isVercelDeploymentSucceededWebhookPayload`
- `isVercelDeploymentReadyWebhookPayload`
- `isVercelDeploymentCanceledWebhookPayload`
- `isVercelDeploymentErrorWebhookPayload`
- `isVercelDeploymentCheckRerequestedWebhookPayload`
- `isVercelProjectCreatedWebhookPayload`
- `isVercelProjectRemovedWebhookPayload`
- `isVercelIntegrationConfigurationScopeChangeConfirmedWebhookPayload`
- `isVercelIntegrationConfigurationRemovedWebhookPayload`
- `isVercelIntegrationConfigurationPermissionUpgradedWebhookPayload`
- `isVercelDomainCreatedWebhookPayload`

## Helpers

- `getTypedVercelWebhook` - Not actually sure if this is helpful lol
