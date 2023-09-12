module.exports = {
	extends: [
		// add more generic rulesets here, such as:
		// 'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		// 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
	],
	parser: 'vue-eslint-parser',
	parserOptions: { parser: '@typescript-eslint/parser' },
	plugins: ['@typescript-eslint'],
	root: true,
	rules: {
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: {
					max: 3,
				},
				multiline: {
					max: 1,
				},
			},
		],
		'vue/attribute-hyphenation': [
			'error',
			'never',
			{
				ignore: [],
			},
		],
	},
}
