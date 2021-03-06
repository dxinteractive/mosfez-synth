# mosfez-synth

[![npm](https://img.shields.io/npm/v/mosfez-synth.svg)](https://www.npmjs.com/package/mosfez-synth) ![Master build](https://github.com/dxinteractive/mosfez-synth/workflows/CI/badge.svg?branch=main)

A (soon to be created) microtonal-aware synth engine library for web.

[Play the demo](https://dxinteractive.github.io/mosfez-synth/), it might not work. It's early days yet.

## Installation

`npm install mosfez-synth` or `yarn add mosfez-synth`

Then you'll need to copy the files from `node_modules/mosfez-synth/public` and put it in your projects public-facing root directory that will be accessible once deployed. e.g. if you are using Vite, put them in your Vite project's `public` directory. This library will make a request for `libfaust-wasm.wasm` and `libfaust-wasm.data` when it starts up, and will not work if those files can't be found.

## Usage

```js
import { Synth } from "mosfez-synth/synth";

// the rest is TBC
```

## Development

This library is written in [typescript](https://www.typescriptlang.org/), [Faust](https://faust.grame.fr/) and the [mosfez-faust](https://github.com/dxinteractive/mosfez-faust) typescript library.

It is bundled with `rollup`, formatted with `prettier`, linted with `eslint` and tested with `jest`.

You will need `node@16` or greater and `yarn@1` installed globally. There's also:

- `/demo`: a demo site that compiles and uses the synth. This is set up as part of `yarn prep`.

Then you can run:

- `yarn build` to build the `*.ts` source files into `*.js` files and `*.d.ts` type files in `/dist`.
- `yarn test` to run tests using `jest`.
- `yarn pretty` to run the auto-formatter `prettier`.
- `yarn lint` to run the linter `eslint`.
- `cd demo && yarn dev` to run the demo.
