import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::", // Allows access from other devices on your network
    port: 8080,
    fs: {
      // Allow project root + client and shared folders
      // Using searchForWorkspaceRoot is the safest and recommended way
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        "./client",
        "./shared",
      ],
      // Optional: keep some basic security denies
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [
    react(), // Only React plugin needed
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});