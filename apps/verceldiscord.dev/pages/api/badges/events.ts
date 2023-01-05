import prisma from "../../../lib/database";
import type { NextApiResponse } from "next";
import { AxiomAPIRequest, withAxiom } from "next-axiom";

export const config = {
	runtime: "edge",
};

async function handler(request: AxiomAPIRequest, response: NextApiResponse) {
	const eventCount = await prisma.event.count({
		select: {
			_all: true,
		},
	});

	return response
		.status(200)
		.setHeader("Cache-Control", `s-maxage=${60 * 60 * 2}`)
		.json({
			schemaVersion: 1,
			label: "Events",
			message: eventCount?._all?.toLocaleString() ?? 0,
			color: "green",
			style: "for-the-badge",
		});
}

export default withAxiom(handler);
