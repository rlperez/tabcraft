<script lang="ts">
	import type { ColorScheme } from '../../stores/theme_config_store';
	export let theme: ColorScheme;

	const getBgColor = (theme: ColorScheme) => {
		if (theme.scheme === 'dark') {
			return 'bg-gray-100';
		}
		return 'white';
	};
	const defaultBgColor = getBgColor(theme);
</script>

<div class="theme-card card">
	<figure class="theme-card-figure h-full">
		<div class="grid grid-cols-4 gap-0 w-full">
			<div style="background-color: {theme.primary ? theme.primary : defaultBgColor}">&nbsp;</div>
			<div class="" style="background-color: {theme.base ? theme.base : defaultBgColor}">
				&nbsp;
			</div>
			<div style="background-color: {theme.secondary ? theme.secondary : defaultBgColor}">
				&nbsp;
			</div>
			<div style="background-color: {theme.accent ? theme.accent : defaultBgColor}">&nbsp;</div>
			<div style="background-color: {theme.base100 ? theme.base100 : defaultBgColor}">&nbsp;</div>
			<div style="background-color: {theme.base200 ? theme.base200 : defaultBgColor}">&nbsp;</div>
			<div style="background-color: {theme.base300 ? theme.base300 : defaultBgColor}">&nbsp;</div>
			<div style="background-color: {theme.neutral ? theme.neutral : defaultBgColor}">&nbsp;</div>
		</div>
	</figure>
	<div class="card-body">
		<p class="theme-card-name">{theme.name}</p>
	</div>
</div>
