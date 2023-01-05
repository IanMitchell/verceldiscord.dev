import { EmbedBuilder } from "discord.js";
import {
	isVercelDeploymentCreatedWebhookPayload,
	isVercelDeploymentSucceededWebhookPayload,
	isVercelDeploymentReadyWebhookPayload,
	isVercelDeploymentCanceledWebhookPayload,
	isVercelDeploymentErrorWebhookPayload,
	isVercelProjectCreatedWebhookPayload,
	isVercelProjectRemovedWebhookPayload,
} from "vercel-webhooks";
import type {
	VercelWebhookPayload,
	VercelDeploymentCreatedWebhookPayload,
	VercelDeploymentSucceededWebhookPayload,
	VercelDeploymentReadyWebhookPayload,
	VercelDeploymentCanceledWebhookPayload,
	VercelDeploymentErrorWebhookPayload,
	VercelProjectCreatedWebhookPayload,
	VercelProjectRemovedWebhookPayload,
} from "vercel-webhooks";

export function getMessageEmbed(webhook: VercelWebhookPayload) {
	if (
		isVercelDeploymentCreatedWebhookPayload(webhook) ||
		isVercelDeploymentSucceededWebhookPayload(webhook) ||
		isVercelDeploymentReadyWebhookPayload(webhook) ||
		isVercelDeploymentCanceledWebhookPayload(webhook) ||
		isVercelDeploymentErrorWebhookPayload(webhook)
	) {
		return getDeploymentEmbed(webhook);
	}

	if (
		isVercelProjectCreatedWebhookPayload(webhook) ||
		isVercelProjectRemovedWebhookPayload(webhook)
	) {
		return getProjectEmbed(webhook);
	}

	return null;
}

export function getDeploymentEmbed(
	webhook:
		| VercelDeploymentCreatedWebhookPayload
		| VercelDeploymentSucceededWebhookPayload
		| VercelDeploymentReadyWebhookPayload
		| VercelDeploymentCanceledWebhookPayload
		| VercelDeploymentErrorWebhookPayload
) {
	const embed = new EmbedBuilder();

	return embed.toJSON();
}

export function getProjectEmbed(
	webhook:
		| VercelProjectCreatedWebhookPayload
		| VercelProjectRemovedWebhookPayload
) {
	const embed = new EmbedBuilder();

	return embed.toJSON();
}
