<script lang="ts">
	import Theme from '../lib/themes/Theme.svelte';
	import { themes } from '../stores/theme_config_store';
</script>

<header class="h-12">
	<div class="w-full navbar">
		<div class="flex-1"></div>
		<div class="flex-none space-x-1 my-8">
			<details>
				<summary>
					<span class="ghost btn btn-sm btn-circle"><i class="fa-solid fa-palette"></i></span>
				</summary>
				<div class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
					<div
						class="flex-auto rounded-3xl bg-base-300 text-sm leading-6 shadow-lg ring-1 ring-base-100 w-2/3"
					>
						<div class="px-4 pt-4">
							<div class="flex flex-col w-full">
								<div class="divider divider-start text-lg font-bold">Themes</div>
							</div>
						</div>
						<div class="px-4">
							<div class="flex flex-col w-full">
								<div class="divider divider-end text-sm font-bold uppercase">Light</div>
							</div>
						</div>
						<div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
							{#each themes.light as theme}
								<Theme {theme} />
							{/each}
						</div>
						<div class="px-4">
							<div class="flex flex-col w-full">
								<div class="divider divider-end text-sm font-bold uppercase">Dark</div>
							</div>
						</div>
						<div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
							{#each themes.dark as theme}
								<Theme {theme} />
							{/each}
						</div>
					</div>
				</div>
			</details>
			<button class="ghost btn btn-sm btn-circle">
				<i class="fa-solid fa-cog"></i>
			</button>
		</div>
	</div>
</header>
