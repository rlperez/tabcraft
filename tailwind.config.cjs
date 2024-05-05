module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	theme: {
		container: {
			padding: '2rem'
		}
	},
	daisyui: {
		themes: true, // false: only light + dark | true: all themes | array: specific themes
		theme: 'auto', // 'auto' | 'light' | 'dark'
		darkTheme: 'dracula', // name of one of the included themes for dark mode
		lightTheme: 'pastel', // name of one of the included themes for light mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ':root' // The element that receives theme color CSS variables
	}
};
