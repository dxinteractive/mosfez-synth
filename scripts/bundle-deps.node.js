// reads dependencies from node_modules
// and writes the files into the /bundled-deps directory,
// adding ES6 exports e.g. export { compile };
// so that it can be bundled inside mosfez-synth
// without using temperamental and poorly documented rollup build modules

const fs = require("fs").promises;
const path = require("path");

const deps = [
  {
    name: "mosfez-faust",
    sourcePath: ["node_modules", "mosfez-faust"],
    files: [
      {
        filename: "faust.js",
        es6ExportsToAdd: ["compile"],
      },
      {
        filename: "faust.d.ts",
      },
    ],
  },
];

(async () => {
  console.log(`bundle-deps.node.js`);

  const topLevelPath = [__dirname, ".."];
  const bundledDepsPath = path.join(...topLevelPath, "bundled-deps");

  // clear bundled-deps dir
  console.log(`- clearing bundled-deps dir`);
  await fs.rm(bundledDepsPath, { force: true, recursive: true });

  // ready, modify and write each file
  for (let i = 0; i < deps.length; i++) {
    const dep = deps[i];

    console.log(`- processing ${dep.name}`);

    // create output directory
    const bundledDepPath = path.join(bundledDepsPath, dep.name);
    console.log(`- creating ${bundledDepPath}`);
    await fs.mkdir(bundledDepPath, { recursive: true });

    // process files
    for (let j = 0; j < dep.files.length; j++) {
      const file = dep.files[j];
      const fromPath = path.join(
        ...topLevelPath,
        ...dep.sourcePath,
        file.filename
      );
      console.log(`- reading ${fromPath}`);
      let contents = (await fs.readFile(fromPath)).toString();

      const toPath = path.join(bundledDepPath, file.filename);
      console.log(`- writing ${toPath}`);
      const namedExports = (file.es6ExportsToAdd ?? []).join(", ");
      if (namedExports) {
        contents = `${contents}\n\nexport { ${namedExports} };`;
      }
      await fs.writeFile(toPath, contents);
    }
  }
  console.log(`bundle-deps.node.js done`);
})();
