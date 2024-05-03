<script lang="ts">
	import Theme from './Theme.svelte';
	import { themes, type ColorScheme } from '../../stores/theme_config_store';
	import { handleThemeChange } from './ThemeSelector';
	export let scheme: ColorScheme['scheme'] | undefined;
	const themeCollection: ColorScheme[] = scheme
		? themes[scheme]
		: [...themes.light, ...themes.dark];
</script>

{#each themeCollection as theme}
	<Theme
		{theme}
		on:click={() => {
			handleThemeChange(theme);
		}}
	/>
{/each}
