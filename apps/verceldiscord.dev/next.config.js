const { withAxiom } = require("next-axiom");

module.exports = withAxiom({
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
});
