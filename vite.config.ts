import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';

import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    viteSingleFile({ removeViteModuleLoader: false }),
  ],
  server: {
    port: 3002,
  },
  build: {
    target: "esnext",
  },
});
