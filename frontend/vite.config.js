import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
  },

  // 👇 CONFIG DE TESTING (lo que faltaba)
  test: {
    environment: "jsdom",        // Simula navegador
    globals: true,               // Para usar test(), expect(), etc.
    setupFiles: "./src/test/setup.js",
  },
});
