import crypto from "node:crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/database";

export const config = {
	runtime: "edge",
};

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	if (request.method !== "POST") {
		return response.status(405).json({ error: "Method not allowed" });
	}

	try {
		const { projectId, configurationId, url } = request.body;

		// Ensure it's a Discord Webhook
		if (
			!url?.startsWith("https://discord.com/api/webhooks/") &&
			!url?.startsWith("https://ptb.discord.com/api/webhooks/") &&
			!url?.startsWith("https://canary.discord.com/api/webhooks/")
		) {
			return response
				.status(400)
				.json({ error: "Please use a Discord webhook URL!" });
		}

		const record = await prisma.webhook.create({
			data: {
				projectId,
				configurationId,
				webhookUrl: request.body.url,
			},
		});

		return response.status(200).json({ key: record.key });
	} catch (error) {
		console.error(error);
		return response
			.status(500)
			.json({ error: "Sorry, something went wrong. Please try again later." });
	}
}
