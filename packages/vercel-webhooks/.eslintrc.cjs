module.exports = {
	parser: "@typescript-eslint/parser",
	env: {
		node: true,
	},
	plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
	extends: ["xo", "xo-typescript", "prettier"],
	rules: {
		"tsdoc/syntax": "error",
	},
};
