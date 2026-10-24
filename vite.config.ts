import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet → served from norin-web.github.io/GTLO2/ (exact repo case).
  // When a domain is attached in Pages: switch to "/" AND add public/CNAME in the same commit.
  base: "/GTLO2/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
