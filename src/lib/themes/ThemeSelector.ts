import { theme, type ColorScheme } from '../../stores/theme_config_store';

export const handleThemeChange = (colorScheme: ColorScheme) => {
	console.log('Theme changed:', colorScheme);
	theme.set(colorScheme.name);
};
