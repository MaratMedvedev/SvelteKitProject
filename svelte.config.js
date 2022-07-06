

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: null
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/SvelteKitProject",
        },
        prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			default: true
		},
        // hydrate the <div id="svelte"> element in src/app.html
	}
};

export default config;