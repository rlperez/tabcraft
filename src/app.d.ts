// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			msg: string;
			isError: boolean;
			data: Record<string, unknown>;
		}
		// interface PageState {}
		// interface Platform {}

		interface TailwindConfig {
			content: string[];
			theme: {
				container: {
					padding: string;
				};
			};
			daisyui: {
				themes: string[] | boolean;
				theme: string;
				darkTheme: string;
				lightTheme: string;
				base: boolean;
				styled: boolean;
				utils: boolean;
				prefix: string;
				logs: boolean;
				themeRoot: string;
			};
		}
	}
}

export {};
