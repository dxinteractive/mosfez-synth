import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo.module.css";

import { Sidebar } from "./sidebar/sidebar";
import { Surface, SurfaceNoteEvent } from "./surface/surface";

import MosfezXenSynth from "mosfez-xen-synth/v0";
import { appConsole } from "./data/console";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

const MIDI_ROOT_OFFSET = 69;

const synth = new MosfezXenSynth();
synth.console = appConsole;
synth.init();

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
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    synth.ready.then(() => setReady(true));
  }, []);

  const handleStart = useCallback(async () => {
    await synth.start();
    setStarted(true);
  }, []);

  if (!ready) {
    return (
      <div className={classes.demo}>
        <div className={classes.text}>Loading...</div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className={classes.demo} onClick={handleStart}>
        <div className={classes.text}>Click to start</div>
      </div>
    );
  }

  return (
    <div className={classes.demo}>
      <Surface onSurfaceNoteEvent={handleSurfaceEvent} />
      <Sidebar />
    </div>
  );
}
