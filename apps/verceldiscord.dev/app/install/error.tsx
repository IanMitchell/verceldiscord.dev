"use client";

import { useEffect } from "react";
import { log } from "next-axiom";

export default function Error({ error }: { error: Error }) {
	useEffect(() => {
		log.error(error.message);
	}, [error]);

	return (
		<div>
			<p>Something went wrong!</p>
		</div>
	);
}
