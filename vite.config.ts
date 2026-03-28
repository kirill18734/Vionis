import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
