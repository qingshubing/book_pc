import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    // dark: true,
    dark: false,
    compact: true,
    // compact: false,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  theme: {},
});
