import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Custom domain lovarti.lat (public/CNAME) → served from the root.
  // If the domain is ever removed, switch back to "/LovartAIv1rf/" and delete
  // public/CNAME in the same commit, or every asset 404s (white screen).
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
