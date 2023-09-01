module.exports = {
	extends: [
		// add more generic rulesets here, such as:
		// 'eslint:recommended',
		'plugin:vue/vue3-recommended',
		// 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
	],
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
