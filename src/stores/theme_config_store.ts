import * as daisyThemes from 'daisyui/src/theming/themes';

export interface Themes {
	dark: ColorScheme[];
	light: ColorScheme[];
}

export interface ColorScheme {
	name: string;
	primary: string;
	secondary: string;
	accent: string;
	neutral: string;
	base: string;
	base100: string;
	base200: string;
	base300: string;
}

export interface DaisyThemes {
	[themeName: string]: {
		'color-scheme': 'dark' | 'light';
		primary: string;
		secondary: string;
		accent: string;
		neutral: string;
		'base-content': string;
		'base-100': string;
		'base-200': string;
		'base-300': string;
	};
}
const typedThemes: DaisyThemes = daisyThemes as unknown as DaisyThemes;

const { dark, light } = Object.entries(typedThemes).reduce(
	(acc, [themeName, theme]) => {
		const colorScheme = theme['color-scheme'];
		if (!acc[colorScheme]) {
			acc[colorScheme] = [];
		}
		acc[colorScheme].push({ themeName, ...theme });
		return acc;
	},
	{} as Record<'dark' | 'light', Array<{ themeName: string } & DaisyThemes[string]>>
);

const daisyThemeToThemes = (themeName: string, theme: DaisyThemes[string]) => {
	console.log(theme);
	return {
		name: themeName,
		primary: theme.primary,
		secondary: theme.secondary,
		accent: theme.accent,
		neutral: theme.neutral,
		base: theme['base-content'],
		base100: theme['base-100'],
		base200: theme['base-200'],
		base300: theme['base-300']
	};
};

export const themes: Themes = {
	dark: dark.map(({ themeName, ...rest }) => daisyThemeToThemes(themeName, rest)),
	light: light.map(({ themeName, ...rest }) => daisyThemeToThemes(themeName, rest))
};
