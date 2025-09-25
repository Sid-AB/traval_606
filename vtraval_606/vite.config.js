import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv } from "vite";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const base = env.VITE_APP_BASE_PATH || "/";
	const isProduction = mode === "production";

	return {
		base,
		plugins: [
			react(),
			tailwindcss(),
      vanillaExtractPlugin(),
			isProduction &&
				visualizer({
					open: true,
					gzipSize: true,
					brotliSize: true,
					template: "treemap",
				}),
		].filter(Boolean),

		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"#": path.resolve(__dirname, "src/types"), // ou "src/@types" selon ton arborescence
			},
		},

		server: {
			open: true,
			host: true,
			port: 3003,
			proxy: {
				"/api": {
					target: "http://127.0.0.1:8000/api", // <-- tu avais "²" ici, c'était une erreur
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
					secure: false,
				},
			},
		},

		build: {
  target: "esnext",
  minify: "esbuild",
  sourcemap: !isProduction,
  cssCodeSplit: true,
  chunkSizeWarningLimit: 1500,
  rollupOptions: {
    output: {
      manualChunks: {
        "vendor-core": ["react", "react-dom", "react-router", "react-router-dom"],
        "vendor-ui": ["swiper", "framer-motion"],
        "vendor-utils": ["react-icons/fa"],
      },
    },
  },
},

optimizeDeps: {
  include: ["react", "react-dom", "react-router", "react-router-dom"],
  exclude: ["react-icons/fa"],
},


		esbuild: {
			drop: isProduction ? ["console", "debugger"] : [],
			legalComments: "none",
			target: "esnext",
		},
	};
});
