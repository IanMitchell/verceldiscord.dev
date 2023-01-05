import prisma from "../../lib/database";
import { getMessageEmbed } from "../../lib/message";
import type { NextApiResponse } from "next";
import {
	isVercelDeploymentCheckRerequestedWebhookPayload,
	isVercelDomainCreatedWebhookPayload,
	isVercelIntegrationConfigurationPermissionUpgradedWebhookPayload,
	isVercelIntegrationConfigurationRemovedWebhookPayload,
	isVercelIntegrationConfigurationScopeChangeConfirmedWebhookPayload,
} from "vercel-webhooks";
import { AxiomAPIRequest, withAxiom } from "next-axiom";

export const config = {
	runtime: "edge",
};

async function handler(request: AxiomAPIRequest, response: NextApiResponse) {
	if (request.method !== "POST") {
		return response.status(405).json({ error: "Method not allowed" });
	}

	const body = request.body;

	// Only handle project Webhooks
	if (
		isVercelDeploymentCheckRerequestedWebhookPayload(body) ||
		isVercelIntegrationConfigurationScopeChangeConfirmedWebhookPayload(body) ||
		isVercelIntegrationConfigurationRemovedWebhookPayload(body) ||
		isVercelIntegrationConfigurationPermissionUpgradedWebhookPayload(body) ||
		isVercelDomainCreatedWebhookPayload(body)
	) {
		request.log.info(`Ignoring ${body.type} event`, { type: body.type });
		return response.status(200).json({ success: true });
	}

	const embed = getMessageEmbed(body);
	const projectId = body.projectId;

	try {
		request.log.info(`Received ${body.type} event for ${projectId}`, {
			type: body.type,
			projectId,
		});

		const webhook = await prisma.webhook.findUnique({
			where: {
				projectId,
			},
		});

		if (!webhook) {
			request.log.warn(`No webhook found for ${projectId}`, { projectId });
			return response.status(404);
		}

		const result = await fetch(webhook.url, {
			method: "POST",
			body: JSON.stringify({ embeds: [embed] }),
			headers: { "Content-Type": "application/json" },
		});

		if (!result.ok) {
			switch (result.status) {
				case 429: {
					request.log.warn("Currently being rate limited", {
						status: result.status,
						projectId,
					});
					response.status(429).json({ success: false });
					return;
				}
				case 500: {
					request.log.warn("Discord API returned a 500 error", {
						status: result.status,
						projectId,
					});
					response.status(503).json({ success: false });
					return;
				}
			}

			const json = await result.json();

			switch (json.code) {
				case 10015: {
					request.log.warn("Webhook no longer exists", {
						status: result.status,
						projectId,
					});
					await prisma.webhook.delete({
						where: {
							projectId,
						},
					});

					response.status(404).json({ success: false });
					return;
				}
				case 50027: {
					request.log.error("Invalid Webhook Token", {
						status: result.status,
						projectId,
					});
					response.status(500).json({ success: false });
					return;
				}
			}

			throw new Error(
				`Invalid Discord Request (Status ${result.status}): ${JSON.stringify(
					json
				)}`
			);
		}

		await prisma.event.create({
			data: {
				webhook: {
					connect: {
						projectId,
					},
				},
			},
		});

		request.log.info(`Webhook sent to ${projectId}`, { projectId });
		response.status(200).json({ success: true });
	} catch (error) {
		request.log.error(error.message, { projectId });
		response.status(500).json({ success: false });
	}
}

export default withAxiom(handler);
