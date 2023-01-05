import type { NextApiResponse } from "next";
import { AxiomAPIRequest, withAxiom } from "next-axiom";
import prisma from "../../../lib/database";

export const config = {
	runtime: "edge",
};

async function handler(request: AxiomAPIRequest, response: NextApiResponse) {
	const webhookCount = await prisma.webhook.count({
		select: {
			_all: true,
		},
	});

	return response
		.status(200)
		.setHeader("Cache-Control", `s-maxage=${60 * 60 * 2}`)
		.json({
			schemaVersion: 1,
			label: "Webhooks",
			message: webhookCount?._all?.toLocaleString() ?? 0,
			color: "blue",
			style: "for-the-badge",
		});
}

export default withAxiom(handler);
