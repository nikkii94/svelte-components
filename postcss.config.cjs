const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const nesting = require('postcss-nesting');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports =  {
	plugins: [
		nesting(),

		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default',
			}),
	],
};