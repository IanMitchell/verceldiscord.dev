import { Fragment } from "react";

async function getAccessToken(code: string) {
	const formData = new FormData();
	formData.append("client_id", process.env.VERCEL_CLIENT_ID);
	formData.append("client_secret", process.env.VERCEL_CLIENT_SECRET);
	formData.append("code", code);
	formData.append("redirect_uri", process.env.VERCEL_REDIRECT_URI);

	const request = await fetch(`https://api.vercel.com/v2/oauth/access_token`, {
		method: "POST",
		body: formData,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	});

	return request;
}

export default async function Install({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	if (searchParams?.code == null || Array.isArray(searchParams.code)) {
		throw new Error("Invalid code");
	}

	const onSubmit = () => {
		// TODO: fetch /api/create
		// on success, redirect to searchParams.next
	};

	const accessToken = await getAccessToken(searchParams.code);
	/**
	 * code
	 * teamId
	 * configurationId
	 * next
	 */
	// post to {`POST https://api.vercel.com/v2/oauth/access_token`}
	return (
		<Fragment>
			<label>Webhook ID</label>
			<input type="text" />
			<button>Save</button>
		</Fragment>
	);
}
