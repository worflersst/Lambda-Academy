import react from '@vitejs/plugin-react';
import path from 'path';
import sass from 'sass';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
