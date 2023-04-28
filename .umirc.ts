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
    title: '超早睡超晚起',
  },
  routes: routes,
  npmClient: 'pnpm',
});
