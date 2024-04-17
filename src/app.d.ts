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
	}
}

export {};
