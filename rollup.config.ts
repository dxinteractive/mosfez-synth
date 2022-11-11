import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { string } from "rollup-plugin-string";
import copy from "rollup-plugin-copy";

const entrypoints = [
  "touch-start",
  "synth",
  "faust",
  "types",
  "poly",
  "offline-render-inner.stringify",
  "offline-render",
];

export default entrypoints.flatMap((name, index) => {
  const common = {
    input: `src/${name}.ts`,
    external: (id) => !/^[./]/.test(id),
  };

  const plugins = [
    esbuild(),
    string({
      include: `**/*.stringify.js`,
    }),
  ];

  if (index === 0) {
    plugins.push(
      copy({
        targets: [{ src: "node_modules/mosfez-faust", dest: "dist" }],
      })
    );
  }

  return [
    {
      plugins,
      output: [
        {
          file: `dist/${name}.js`,
          format: "cjs",
          sourcemap: true,
        },
        {
          file: `dist/${name}.mjs`,
          format: "es",
          sourcemap: true,
        },
      ],
      ...common,
    },
    {
      plugins: [dts()],
      output: {
        file: `dist/${name}.d.ts`,
        format: "es",
      },
      ...common,
    },
  ];
});
