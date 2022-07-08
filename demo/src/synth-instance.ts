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

// create custom oscillator dsps
const triangle = faust(
  "process = os.triangle(params.pitch : si.smooth(0.9) : ba.midikey2hz);",
  [],
  {
    pitch: ":pitch",
  }
);

// create custom gate
const gated = faust("process = *(params.force : si.smooth(0.9));", [triangle], {
  force: ":force",
});

// create custom tremolo dsp
const completeDsp = faust(
  "process = *(os.osc(params.speed) * 0.1 + 0.8) : *(0.2);",
  [gated],
  {
    speed: 8,
    force: ":force",
  }
);

synth.build(completeDsp);
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
