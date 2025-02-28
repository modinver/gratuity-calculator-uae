
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Configurar fallback para SPA routing
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/sitemap.xml',
          dest: ''
        },
        {
          src: 'public/*',
          dest: ''
        }
      ]
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    copyPublicDir: true, // Ensure public files like sitemap.xml are copied
    // Configuración para SSG
    ssrManifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        // Add additional pages to prerender here
        gCalculationGuide: path.resolve(__dirname, 'gratuity-calculation-uae-guide.html'),
        gLawGuide: path.resolve(__dirname, 'gratuity-law-uae-guide.html'),
        gEligibility: path.resolve(__dirname, 'who-is-eligible-for-gratuity-uae.html'),
        gClaim: path.resolve(__dirname, 'how-to-claim-gratuity-uae.html'),
        gInvest: path.resolve(__dirname, 'best-way-invest-gratuity-uae.html'),
        gTax: path.resolve(__dirname, 'is-gratuity-taxable-in-uae.html'),
        gResignation: path.resolve(__dirname, 'does-resignation-affect-gratuity-uae.html'),
        gTimeReceive: path.resolve(__dirname, 'how-long-to-receive-gratuity-uae.html'),
        gLimitedContract: path.resolve(__dirname, 'gratuity-limited-contract-uae.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      }
    }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      preload: 'js-lazy',
      preloadFonts: true,
    },
  }
}));
