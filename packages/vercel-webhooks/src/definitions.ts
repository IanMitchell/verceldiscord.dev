export enum VercelEventType {
	DeploymentCreated = "deployment.created",
	DeploymentSucceeded = "deployment.succeeded",
	DeploymentReady = "deployment.ready",
	DeploymentCanceled = "deployment.canceled",
	DeploymentError = "deployment.error",
	DeploymentCheckRerequested = "deployment.check-rerequested",
	ProjectCreated = "project.created",
	ProjectRemoved = "project.removed",
	IntegrationConfigurationScopeChangeConfirmed = "integration-configuration.scope-change-confirmed",
	IntegrationConfigurationRemoved = "integration-configuration.removed",
	IntegrationConfigurationPermissionUpgraded = "integration-configuration.permission-upgraded",
	DomainCreated = "domain.created",
}

export type VercelID = string;

export interface VercelWebhookPayload {
	type: VercelEventType;
	id: VercelID;
	createdAt: number;
	region: string | null;
}

export interface VercelDeploymentCreatedWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		alias: string[];
		deployment: {
			id: VercelID;
			meta: Record<string, string | number>;
			url: string;
			name: string;
		};
		links: {
			deployment: string;
			project: string;
			target: "production" | "staging" | null;
		};
		project: {
			id: string;
		};
		plan: string;
		regions: string[];
	};
}

export interface VercelDeploymentSucceededWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		deployment: {
			id: VercelID;
			meta: Record<string, string | number>;
			url: string;
			name: string;
		};
		links: {
			deployment: string;
			project: string;
		};
		target: "production" | "staging" | null;
		project: {
			id: string;
		};
		plan: string;
		regions: string[];
	};
}

export interface VercelDeploymentReadyWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		deployment: {
			id: VercelID;
			meta: Record<string, string | number>;
			url: string;
			name: string;
		};
		links: {
			deployment: string;
			project: string;
		};
		target: "production" | "staging" | null;
		project: {
			id: string;
		};
		plan: string;
		regions: string[];
	};
}

export interface VercelDeploymentCanceledWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		deployment: {
			id: VercelID;
			meta: Record<string, string | number>;
			url: string;
			name: string;
		};
		links: {
			deployment: string;
			project: string;
		};
		target: "production" | "staging" | null;
		project: {
			id: string;
		};
		plan: string;
		regions: string[];
	};
}

export interface VercelDeploymentErrorWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		deployment: {
			id: VercelID;
			meta: Record<string, string | number>;
			url: string;
			name: string;
		};
		links: {
			deployment: string;
			project: string;
		};
		target: "production" | "staging" | null;
		project: {
			id: string;
		};
		plan: string;
		regions: string[];
	};
}

export interface VercelDeploymentCheckRerequestedWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		deployment: {
			id: VercelID;
		};
		check: {
			id: VercelID;
		};
	};
}

export interface VercelProjectCreatedWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		project: {
			id: VercelID;
			name: string;
		};
	};
}

export interface VercelProjectRemovedWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		project: {
			id: VercelID;
			name: string;
		};
	};
}

export interface VercelIntegrationConfigurationScopeChangeConfirmedWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		configuration: {
			id: VercelID;
			scopes: string[];
		};
	};
}

export interface VercelIntegrationConfigurationRemovedWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		configuration: {
			id: VercelID;
			projectSelection: "all" | "selected";
			projects: string[];
		};
	};
}

export interface VercelIntegrationConfigurationPermissionUpgradedWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		configuration: {
			id: VercelID;
			projectSelection: "all" | "selected";
			projects: string[];
		};
		projects: {
			added: string[];
			removed: string[];
		};
	};
}

export interface VercelDomainCreatedWebhookPayload
	extends VercelWebhookPayload {
	payload: {
		team: {
			id: VercelID[] | null;
		};
		user: {
			id: VercelID[];
		};
		domain: {
			name: string;
			delegated: string;
		};
	};
}

export function isVercelDeploymentCreatedWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelDeploymentCreatedWebhookPayload {
	return payload.type === VercelEventType.DeploymentCreated;
}

export function isVercelDeploymentSucceededWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelDeploymentSucceededWebhookPayload {
	return payload.type === VercelEventType.DeploymentSucceeded;
}

export function isVercelDeploymentReadyWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelDeploymentReadyWebhookPayload {
	return payload.type === VercelEventType.DeploymentReady;
}

export function isVercelDeploymentCanceledWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelDeploymentCanceledWebhookPayload {
	return payload.type === VercelEventType.DeploymentCanceled;
}

export function isVercelDeploymentErrorWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelDeploymentErrorWebhookPayload {
	return payload.type === VercelEventType.DeploymentError;
}

export function isVercelDeploymentCheckRerequestedWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelDeploymentCheckRerequestedWebhookPayload {
	return payload.type === VercelEventType.DeploymentCheckRerequested;
}

export function isVercelProjectCreatedWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelProjectCreatedWebhookPayload {
	return payload.type === VercelEventType.ProjectCreated;
}

export function isVercelProjectRemovedWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelProjectRemovedWebhookPayload {
	return payload.type === VercelEventType.ProjectRemoved;
}

export function isVercelIntegrationConfigurationScopeChangeConfirmedWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelIntegrationConfigurationScopeChangeConfirmedWebhookPayload {
	return (
		payload.type ===
		VercelEventType.IntegrationConfigurationScopeChangeConfirmed
	);
}

export function isVercelIntegrationConfigurationRemovedWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelIntegrationConfigurationRemovedWebhookPayload {
	return payload.type === VercelEventType.IntegrationConfigurationRemoved;
}

export function isVercelIntegrationConfigurationPermissionUpgradedWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelIntegrationConfigurationPermissionUpgradedWebhookPayload {
	return (
		payload.type === VercelEventType.IntegrationConfigurationPermissionUpgraded
	);
}

export function isVercelDomainCreatedWebhookPayload(
	payload: VercelWebhookPayload
): payload is VercelDomainCreatedWebhookPayload {
	return payload.type === VercelEventType.DomainCreated;
}

export function getTypedVercelWebhook(payload: Record<string, any>) {
	switch (payload?.type ?? "") {
		case VercelEventType.DeploymentCreated:
			return payload as VercelDeploymentCreatedWebhookPayload;
		case VercelEventType.DeploymentSucceeded:
			return payload as VercelDeploymentSucceededWebhookPayload;
		case VercelEventType.DeploymentReady:
			return payload as VercelDeploymentReadyWebhookPayload;
		case VercelEventType.DeploymentCanceled:
			return payload as VercelDeploymentCanceledWebhookPayload;
		case VercelEventType.DeploymentError:
			return payload as VercelDeploymentErrorWebhookPayload;
		case VercelEventType.DeploymentCheckRerequested:
			return payload as VercelDeploymentCheckRerequestedWebhookPayload;
		case VercelEventType.ProjectCreated:
			return payload as VercelProjectCreatedWebhookPayload;
		case VercelEventType.ProjectRemoved:
			return payload as VercelProjectRemovedWebhookPayload;
		case VercelEventType.IntegrationConfigurationScopeChangeConfirmed:
			return payload as VercelIntegrationConfigurationScopeChangeConfirmedWebhookPayload;
		case VercelEventType.IntegrationConfigurationRemoved:
			return payload as VercelIntegrationConfigurationRemovedWebhookPayload;
		case VercelEventType.IntegrationConfigurationPermissionUpgraded:
			return payload as VercelIntegrationConfigurationPermissionUpgradedWebhookPayload;
		case VercelEventType.DomainCreated:
			return payload as VercelDomainCreatedWebhookPayload;
		default:
			return payload as VercelWebhookPayload;
	}
}
