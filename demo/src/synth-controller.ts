import {
  startVoice,
  changeVoice,
  stopVoice,
  stopAllVoices,
} from "./synth-instance";
import { appState, SynthPolyMode } from "./data/app-state";
import { SurfaceNoteEvent } from "./surface/surface";

// synth-controller.ts
// takes SurfaceNoteEvent from a Surface and application state
// and calls functions to control the synth instance

const synthState = appState.branch("synth");

// in some polyphony modes we need to keep track of pointer ids and their voices
// so we can turn notes off when sliding to a new cell
const activePointerIds = new Map<string, string>();

// track a pointer <-> voice relationship
// and return the old voice if this relationship ever changes for a pointerId
const setPointerVoice = (
  pointerId: string,
  voice: string
): string | undefined => {
  const existingVoice = activePointerIds.get(pointerId);
  const hasChanged = existingVoice !== undefined && existingVoice !== voice;
  activePointerIds.set(pointerId, voice);
  return hasChanged ? existingVoice : undefined;
};

// stop all voices and clear all activePointerIds whenever the polyphony mode changes
synthState.branch("polyMode").onChange(() => {
  stopAllVoices();
  activePointerIds.clear();
});

// make an event handler per type of polyphony
const handleSurfaceEventPerCell = (e: SurfaceNoteEvent) => {
  const voice = `${e.cell[0]},${e.cell[1]}`;
  const pitch = e.decimalMidi;
  const force = e.force;

  if (e.type === "start") {
    startVoice({ voice, pitch, force });
    setPointerVoice(e.pointerId, voice);
  } else if (e.type === "move") {
    const oldVoice = setPointerVoice(e.pointerId, voice);
    if (oldVoice === undefined) {
      changeVoice({ voice, pitch, force });
    } else {
      startVoice({ voice, pitch, force });
      stopVoice({ voice: oldVoice });
    }
  } else if (e.type === "end") {
    stopVoice({ voice });
  }
};

const handleSurfaceEventPerPointer = (e: SurfaceNoteEvent) => {
  const voice = `${e.pointerId}`;
  const pitch = e.decimalMidi;
  const force = e.force;

  if (e.type === "start") {
    startVoice({ voice, pitch, force });
  } else if (e.type === "move") {
    changeVoice({ voice, pitch, force });
  } else if (e.type === "end") {
    stopVoice({ voice });
  }
};

const handleSurfaceEventPerPitch = (e: SurfaceNoteEvent) => {
  const voice = `${e.decimalMidi}`;
  const pitch = e.decimalMidi;
  const force = e.force;

  if (e.type === "start") {
    startVoice({ voice, pitch, force });
    setPointerVoice(e.pointerId, voice);
  } else if (e.type === "move") {
    const oldVoice = setPointerVoice(e.pointerId, voice);
    if (oldVoice === undefined) {
      changeVoice({ voice, pitch, force });
    } else {
      startVoice({ voice, pitch, force });
      stopVoice({ voice: oldVoice });
    }
  } else if (e.type === "end") {
    stopVoice({ voice });
  }
};

const handlers: Record<SynthPolyMode, (e: SurfaceNoteEvent) => void> = {
  ["per-cell"]: handleSurfaceEventPerCell,
  ["per-pointer"]: handleSurfaceEventPerPointer,
  ["per-pitch"]: handleSurfaceEventPerPitch,
};

export const handleSurfaceEvent = (e: SurfaceNoteEvent) => {
  handlers[synthState.value.polyMode](e);
};
