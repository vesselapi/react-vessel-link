import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    external: ["react", "react-dom"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: [".js", ".jsx"],
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
      terser(),
    ],
  },
];
