import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo.module.css";

import { Sidebar } from "./sidebar/sidebar";
import { Surface, SurfaceNoteEvent } from "./surface/surface";

// import MosfezXenSynth from "mosfez-xen-synth/v1";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

// const synth = new MosfezXenSynth();

const handleSurfaceEvent = (e: SurfaceNoteEvent) => {
  console.log("surface event", e);
  // convert to decimal midi
  // synth.noteOn(); / synth.noteOff();
};

function Demo() {
  return (
    <div className={classes.demo}>
      <Surface onSurfaceNoteEvent={handleSurfaceEvent} />
      <Sidebar />
    </div>
  );
}
