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
  volume: number;
  speed: number;
  pan: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  reverbMix: number;
};

// create synth
const synth = new Synth<Params>({
  audioContext,
  params: {
    pitch: 440,
    envelopeAttack: 0.002,
    envelopeDecay: 0.1,
    envelopeSustain: 0.3,
    envelopeRelease: 1,
  },
});

// create custom oscillator dsp
const triangle = faust(
  "process = os.triangle(params.pitch : si.polySmooth(params.gate, 0.999, 1) : ba.midikey2hz) : *(params.volume);",
  {
    pitch: "pitch",
    gate: "gate",
    volume: 0.3,
  }
);

// create envelope
const enveloped = faust(
  `
a = params.envelopeAttack;
d = params.envelopeDecay;
s = params.envelopeSustain;
r = params.envelopeRelease;
process = *(en.adsr(a,d,s,r,params.gate));
`,
  {
    inputs: [triangle],
    gate: "gate",
    force: "force",
    envelopeAttack: "envelopeAttack",
    envelopeDecay: "envelopeDecay",
    envelopeSustain: "envelopeSustain",
    envelopeRelease: "envelopeRelease",
  }
);

const tremolo = faust("process = *(os.osc(params.speed) * 0.4 + 0.5);", {
  inputs: [enveloped],
  speed: "speed",
});

const panned = faust("process = sp.panner(params.pan);", {
  inputs: [tremolo],
  pan: "pan",
});

// WARNING: poly API will change
const polyphonic = poly({
  input: panned,
  polyphony: 8,
  gate: "gate",
  release: 2000, // "envelopeRelease",
});

const reverbed = faust(
  `
  reverb = re.stereo_freeverb(0.5, 0.5, 0.2, 1.0);
  stereo_mix(wet, mix, x, y) = wet(x, y) : sp.stereoize(*(mix)) : _+(x * (1.0 - mix)),_+(y * (1.0 - mix));
  process = stereo_mix(reverb, params.reverbMix);
  `,
  {
    inputs: [polyphonic],
    reverbMix: 0.1,
  }
);

// build node graph into the synth
synth.build(reverbed);

// connect the synth to the audio out on the users machine
synth.connect(audioContext.destination);

//
// at runtime
//

// randomly set the release speed on everything every 2 seconds
// setInterval(() => {
//   const envelopeRelease = Math.random();
//   console.log("envelopeRelease:", envelopeRelease);
//   synth.set({
//     envelopeRelease,
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
