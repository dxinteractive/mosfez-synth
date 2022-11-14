import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { string } from "rollup-plugin-string";

const entrypoints = [
  "touch-start",
  "synth",
  "dsp-node",
  "faust",
  "params",
  "poly",
  "offline-render-synth-inner.stringify",
  "offline-render",
];

export default entrypoints.flatMap((name) => {
  const common = {
    input: `./src/${name}.ts`,
    external: (id) => !/^[./]/.test(id),
  };

  const plugins = [
    esbuild(),
    string({
      include: `**/*.stringify.js`,
    }),
  ];

  return [
    {
      plugins,
      output: [
        {
          file: `./dist/${name}.js`,
          format: "cjs",
          sourcemap: true,
        },
        {
          file: `./dist/${name}.mjs`,
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
