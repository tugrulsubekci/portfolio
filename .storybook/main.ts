import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/nextjs-vite",
  "staticDirs": [
    "../public"
  ],
  // The deployed Storybook (storybook.tugrulsubekci.com) is a dev showcase; keep it out of search results.
  managerHead: (head) => `${head}<meta name="robots" content="noindex, nofollow" />`,
};
export default config;