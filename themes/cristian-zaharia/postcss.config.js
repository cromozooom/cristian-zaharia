const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

module.exports = {
	plugins: [
		purgecss({
			content: ['themes/cristian-zaharia/layouts/**/*.html', 'themes/cristian-zaharia/layouts/**/*.svg', 'themes/cristian-zaharia/layouts/**/*.js'],
			//whitelist: ['ul li ul', 'ul li ol']
		}),
		autoprefixer({
			Browserslist: [
				"last 2 versions",
				"Explorer >= 8",
			]
		})
	]
}