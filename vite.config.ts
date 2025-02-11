import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "src/calendar/ReactNepaliCalendar.tsx", // Make sure this points to your component's entry
      name: "ReactNepaliCalendar",
      fileName: (format) => `react-nepali-calendar.${format}.js`,
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Do not bundle React
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
