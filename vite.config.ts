import checker from 'vite-plugin-checker';
import { svgSpritemap } from 'vite-plugin-svg-spritemap';

export default {
	base: '/linea-build/',
	resolve: {
		alias: {
			'@assets': '/src/assets',
			'@scripts': '/src/scripts',
			'@styles': '/src/styles',
			'@': '/src',
		},
	},
	plugins: [
		checker({
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
				useFlatConfig: true,
			},
			stylelint: {
				lintCommand: 'stylelint ./src/**/*.{css,scss}',
			},
			typescript: true,
		}),
		svgSpritemap({
			pattern: 'src/assets/icons/*.svg',
			filename: 'sprite.svg',
			currentColor: true,
		}),
	],
};
