import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo.module.css";

import { Sidebar } from "./sidebar/sidebar";
import { Surface } from "./surface/surface";
import { handleSurfaceEvent, handleDestroy } from "./synth-controller";
import { synth } from "./synth-instance";
import {
  experimentalOfflineRender,
  playLastRender,
} from "./experimental-offline-render";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

function Demo() {
  return (
    <div className={classes.demo}>
      <Surface onSurfaceNoteEvent={handleSurfaceEvent} />
      <Sidebar
        handleDestroy={handleDestroy}
        handleRecord={() => synth.inputEvents.record()}
        handleRecordStop={() => {
          const events = synth.inputEvents.stop();
          experimentalOfflineRender(events);
        }}
        handlePlay={() => playLastRender()}
      />
    </div>
  );
}
