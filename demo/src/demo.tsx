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
  // e.id is voice id, ignored for now

  if (type === "start" || e.type === "move") {
    synth.set({
      voice: e.id,
      pitch: decimalMidi,
      force,
    });

    appConsole.log("pitch", decimalMidi);
    appConsole.log("force", force);
  } else if (type === "end") {
    synth.set({
      voice: e.id,
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
