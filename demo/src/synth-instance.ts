import { faust } from "mosfez-synth/faust";
import { Synth } from "mosfez-synth/synth";
import { touchStart } from "mosfez-synth/touch-start";

// create audio context and start it on first user iteraction
const audioContext = new window.AudioContext();
touchStart(audioContext);

type Params = {
  force: number;
  pitch: number;
};

// create synth
const synth = new Synth<Params>({ audioContext });

// build dsp graph for synth
// const sine = faust(`process = os.osc(440.0);`);

const dsp = `
hz = param_pitch : si.smooth(0.9) : ba.midikey2hz;
gate = *(param_force : si.smooth(0.9));
tremolo = *(os.osc(param_speed) * 0.2 + 0.5);
process = os.triangle(hz) : gate : tremolo;
`;

const output = faust(dsp, [], {
  speed: 4,
  force: ":force",
  pitch: ":pitch",
});

synth.build(output);
synth.connect(audioContext.destination);

export { synth };
