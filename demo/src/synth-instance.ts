import { faust } from "mosfez-synth/faust";
import { poly } from "mosfez-synth/poly";
import { Synth } from "mosfez-synth/synth";
import { touchStart } from "mosfez-synth/touch-start";

// synth-instance.ts
// sets up an instance of mosfez-synth,
// and allow its to be controlled via some callbacks

//
// at initialise
//

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

// create custom oscillator dsp
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

// WARNING: poly API will change
const polyphonic = poly<Params>(panned, 8);

// build node graph into the synth
synth.build(polyphonic);

// connect the synth to the audio out on the users machine
synth.connect(audioContext.destination);

//
// at runtime
//

// randomly set the tremolo speed on everything every 2 seconds
// setInterval(() => {
//   synth.set({
//     speed: Math.random() * 10 + 1,
//   });
// }, 2000);

// expose some example functions for voice control in a keyboard-like context

export type StartVoiceParams = {
  voice: string;
  pitch: number;
  force?: number;
};

export const startVoice = (params: StartVoiceParams) => {
  const { voice, pitch } = params;
  synth.set({
    voice, // make this a voice-specific set()
    gate: 1, // start the voice
    force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
    pitch, // set the pitch in decimalMidi
    pan: Math.random() * 0.5 + 0.25, // set an amount of pan
    speed: Math.random() * 10 + 1, // set a tremolo speed
  });
};

export type ChangeVoiceParams = {
  voice: string;
  pitch: number;
  force?: number;
};

export const changeVoice = (params: ChangeVoiceParams) => {
  const { voice, pitch } = params;
  synth.set({
    voice, // make this a voice-specific set()
    force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
    pitch, // set the pitch in decimalMidi
  });
};

export type StopVoiceParams = {
  voice: string;
};

export const stopVoice = (params: StopVoiceParams) => {
  const { voice } = params;
  synth.set({
    voice, // make this a voice-specific set()
    gate: 0, // turn the note off
    force: 0, // set the amount of force (for force enabled devices)
  });
};

export const stopAllVoices = () => {
  // ommitting the voice parameter will affect all voices
  synth.set({
    gate: 0, // turn the note off
    force: 0, // set the amount of force (for force enabled devices)
  });
};
