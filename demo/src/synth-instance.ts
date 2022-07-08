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

// create custom dsp
const dsp = `
hz = params.pitch : si.smooth(0.9) : ba.midikey2hz;
gate = *(params.force : si.smooth(0.9));
tremolo = *(os.osc(params.speed) * 0.1 + 0.8);
process = os.triangle(hz) : gate : tremolo : *(0.2);
`;

const output = faust(dsp, [], {
  speed: 4,
  force: ":force",
  pitch: ":pitch",
});

synth.build(output);
synth.connect(audioContext.destination);

//
// usage is like:
//
// function noteOn(pitch: number) {
//   synth.set({
//     pitch,
//     force: 1
//   });
// }
//
// function noteOff() {
//   synth.set({
//     force: 0
//   });
// }
//

export { synth };
