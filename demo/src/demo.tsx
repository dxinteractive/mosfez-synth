import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo.module.css";

import { Sidebar } from "./sidebar/sidebar";
import { Surface, SurfaceNoteEvent } from "./surface/surface";

import { synth } from "./synth-instance";
import { appConsole } from "./data/console";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

const handleSurfaceEvent = (e: SurfaceNoteEvent) => {
  const { decimalMidi, type, force } = e;

  // one voice per finger
  // const voice = e.id;

  // one voice per pitch
  const voice = `${decimalMidi}`;
  console.log("voice", voice);

  // one voice per cell
  // const voice = `${e.cell[0]},${e.cell[1]}`;

  if (type === "start") {
    synth.set({
      voice, // make this a voice-specific set()
      gate: 1, // start the voice
      pitch: decimalMidi, // set the pitch
      force, // set the amount of force (for force enabled devices)
      pan: Math.random() * 0.5 + 0.25, // set an amount of pan
    });

    appConsole.log("pitch", decimalMidi);
    appConsole.log("force", force);
  } else if (e.type === "move") {
    // TODO rename to change and include force changes
    synth.set({
      voice, // make this a voice-specific set()
      gate: 1, // start the voice (in case this is a new voice)
      pitch: decimalMidi, // set the pitch
      force, // set the amount of force (for force enabled devices)
    });

    appConsole.log("pitch", decimalMidi);
    appConsole.log("force", force);
  } else if (type === "end") {
    synth.set({
      voice, // make this a voice-specific set()
      gate: 0, // turn the note off
      force: 0, // set the amount of force (for force enabled devices)
    });

    appConsole.log("force", 0);
  }
};

// randomly set the tremolo speed on everything every 2 seconds
setInterval(() => {
  synth.set({
    speed: Math.random() * 10 + 1,
  });
}, 2000);

function Demo() {
  return (
    <div className={classes.demo}>
      <Surface onSurfaceNoteEvent={handleSurfaceEvent} />
      <Sidebar />
    </div>
  );
}
