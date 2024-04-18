<script lang="ts">
	import { base } from '$app/paths';
	import type { ColorScheme } from '../../stores/theme_config_store';
	export let theme: ColorScheme;
</script>

<div class="theme-card card">
	<figure class="theme-card-figure">
		<div class="grid grid-cols-2 grid-rows-4">
			<div
				class="row-span-1"
				style="background-color: {theme.primary ? theme.primary : 'transparent'}"
			>
				&nbsp;
			</div>
			<div class="col-span-1" style="background-color: {theme.base ? theme.base : 'transparent'}">
				&nbsp;
			</div>
			<div
				class="row-span-1"
				style="background-color: {theme.secondary ? theme.secondary : 'transparent'}"
			>
				&nbsp;
			</div>
			<div
				class="col-span-1"
				style="background-color: {theme.base100 ? theme.base100 : 'transparent'}"
			>
				&nbsp;
			</div>
			<div
				class="row-span-1"
				style="background-color: {theme.accent ? theme.accent : 'transparent'}"
			>
				&nbsp;
			</div>

			<div
				class="col-span-1"
				style="background-color: {theme.base200 ? theme.base200 : 'transparent'}"
			>
				&nbsp;
			</div>

			<div
				class="row-span-1"
				style="background-color: {theme.neutral ? theme.neutral : 'transparent'}"
			>
				&nbsp;
			</div>

			<div
				class="col-span-1"
				style="background-color: {theme.base300 ? theme.base300 : 'transparent'}"
			>
				&nbsp;
			</div>
		</div>
	</figure>
	<div class="card-body">
		<p class="theme-card-name">{theme.name}</p>
	</div>
</div>
