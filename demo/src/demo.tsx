import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo.module.css";

import { Sidebar } from "./sidebar/sidebar";
import { Surface, SurfaceNoteEvent } from "./surface/surface";

import { Synth } from "mosfez-synth/v0";
import { appConsole } from "./data/console";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

const MIDI_ROOT_OFFSET = 69;

const synth = new Synth();
synth.console = appConsole;

const handleSurfaceEvent = (e: SurfaceNoteEvent) => {
  const { note, type, id } = e;

  const decimalMidi = note + MIDI_ROOT_OFFSET;
  if (type === "start" || e.type === "move") {
    synth.setNote(decimalMidi, { id });
  } else if (type === "end") {
    synth.stopNote(id);
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
