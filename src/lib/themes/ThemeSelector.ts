import type { ColorScheme } from '../../stores/theme_config_store';

export const handleThemeChange = (theme: ColorScheme) => {
	console.log('Theme changed:', theme);
	const rootElement = document.documentElement;
	rootElement.setAttribute('data-theme', theme.name);
};
