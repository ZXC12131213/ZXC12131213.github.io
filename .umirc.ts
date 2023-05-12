import { defineConfig } from '@umijs/max';
import routes from './src/routes';

export default defineConfig({
  antd: {
    theme: {
      token: {
        colorPrimary: 'pink',
      },
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '超早睡超晚起>>开战',
  },
  routes: routes,
  npmClient: 'pnpm',
  history: { type: 'hash' },
  headScripts: [
    `https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js`,
  ],
});
