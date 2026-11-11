import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet: the site is served at norin-web.github.io/LovartAIv1rf/.
  // When a domain is attached in Pages settings, switch to "/" AND add public/CNAME
  // in the same commit, or every asset 404s (white screen).
  base: "/LovartAIv1rf/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
