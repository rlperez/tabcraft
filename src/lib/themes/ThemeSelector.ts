import type { ColorScheme } from '../../stores/theme_config_store';

export const handleThemeChange = (theme: ColorScheme) => {
	console.log('Theme changed:', theme);
};
