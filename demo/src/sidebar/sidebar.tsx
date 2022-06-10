import classes from "./sidebar.module.css";
import clsx from "clsx";

import { appState } from "../data/app-state";
import { useNumberToString } from "../form-utils/form-utils";
import { useInput } from "dendriform";
import { FieldRow } from "./field-row";
import { Link } from "./link";

const surface = appState.branch("surface");

export function Sidebar() {
  const sidebarOpen = appState.branch("sidebarOpen").useValue();

  if (!sidebarOpen) {
    return (
      <div className={clsx(classes.sidebar, classes.closed)}>
        <div className={classes.sideways}>
          <div className={classes.sidewaysInner}>
            <Link onClick={() => appState.branch("sidebarOpen").set(true)}>
              [open settings]
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(classes.sidebar, classes.open)}>
      <div className={classes.sidebarHeader}>
        <div className={classes.sidebarHeading}>
          <h1>mosfez-xen-synth demo</h1>
        </div>
        <Link onClick={() => appState.branch("sidebarOpen").set(false)}>
          [close]
        </Link>
      </div>
      <Controls />
    </div>
  );
}

function Controls() {
  return (
    <div>
      <FieldRow label="key size">
        {surface.render("keySize", (keySizeForm) => {
          const [asString] = useNumberToString(keySizeForm);
          return (
            <input type="range" min="20" max="100" {...useInput(asString)} />
          );
        })}
      </FieldRow>
      <FieldRow label="key offset x">
        {surface.render("rootPositionX", (rootPositionXForm) => {
          const [asString] = useNumberToString(rootPositionXForm);
          return (
            <input
              type="range"
              min="0"
              max="1"
              step="0.001"
              {...useInput(asString)}
            />
          );
        })}
      </FieldRow>
      <FieldRow label="key offset y">
        {surface.render("rootPositionY", (rootPositionYForm) => {
          const [asString] = useNumberToString(rootPositionYForm);
          return (
            <input
              type="range"
              min="0"
              max="1"
              step="0.001"
              {...useInput(asString)}
            />
          );
        })}
      </FieldRow>
    </div>
  );
}
