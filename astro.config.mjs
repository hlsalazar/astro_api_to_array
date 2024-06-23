import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server', // Agrega esta línea para habilitar soporte para rutas API
  integrations: [react()]
});
