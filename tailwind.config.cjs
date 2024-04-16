module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	theme: {
		container: {
			padding: '2rem'
		}
	},
	daisyui: {
		themes: [
			'light',
			'pastel',
			'lofi',
			'nord',
			'cyberpunk',
			'retro',
			'aqua',
			'forest',
			'coffee',
			'dracula',
			'dark',
			'black'
		], // false: only light + dark | true: all themes | array: specific themes
		darkTheme: 'dracula', // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ':root' // The element that receives theme color CSS variables
	}
};
