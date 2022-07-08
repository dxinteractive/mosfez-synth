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
  const { note, type } = e;
  // e.id is voice id, ignored for now

  const MIDI_ROOT_OFFSET = 69;
  const decimalMidi = note + MIDI_ROOT_OFFSET;
  if (type === "start" || e.type === "move") {
    synth.set({
      pitch: decimalMidi,
      force: 1,
    });

    appConsole.log("pitch", decimalMidi);
    appConsole.log("force", 1);
  } else if (type === "end") {
    synth.set({
      force: 0,
    });

    appConsole.log("force", 0);
  }
};

function Demo() {
  return (
    <div className={classes.demo}>
      <Surface onSurfaceNoteEvent={handleSurfaceEvent} />
      <Sidebar />
    </div>
  );
}
