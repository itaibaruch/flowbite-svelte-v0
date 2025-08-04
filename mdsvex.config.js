import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import examples from 'mdsvexamples';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = defineConfig({
  layout: {
    componentLayout: resolve(__dirname, 'src/routes/layouts/component/+page.svelte')
    // blockComponentLayout: './src/routes/blocks/layouts/Blocklayout.svelte'
  },
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [[examples, { defaults: { Wrapper: '/src/routes/utils/ExampleWrapper.svelte' } }]],
  rehypePlugins: []
});

export default config;
