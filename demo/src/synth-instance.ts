import { faust } from "mosfez-synth/faust";
import { poly } from "mosfez-synth/poly";
import { Synth } from "mosfez-synth/synth";
import { touchStart } from "mosfez-synth/touch-start";

// create audio context and start it on first user iteraction
const audioContext = new window.AudioContext();
touchStart(audioContext);

type Params = {
  gate: number;
  voice: string;
  pitch: number;
  force: number;
  speed: number;
  pan: number;
};

// create synth
const synth = new Synth<Params>({ audioContext });

// create custom oscillator dsps
const triangle = faust<Params>(
  "process = os.triangle(params.pitch : si.polySmooth(params.gate, 0.999, 1) : ba.midikey2hz);",
  {
    pitch: ":pitch",
    gate: ":gate",
  }
);

// create custom gate
const gated = faust<Params>(
  "process = *(params.force : si.polySmooth(params.gate, 0.99995, 1));",
  {
    inputs: [triangle],
    gate: ":gate",
    force: ":force",
  }
);

const tremolo = faust<Params>(
  "process = *(os.osc(params.speed) * 0.4 + 0.5) : *(0.3);",
  {
    inputs: [gated],
    speed: ":speed",
  }
);

const panned = faust<Params>("process = sp.panner(params.pan);", {
  inputs: [tremolo],
  pan: ":pan",
});

const polyphonic = poly<Params>(panned, 8);

synth.build(polyphonic);
synth.connect(audioContext.destination);

export { synth };
