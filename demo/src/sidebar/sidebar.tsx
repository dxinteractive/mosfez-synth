import classes from "./sidebar.module.css";
import clsx from "clsx";

import { appState } from "../app-state";
import { useNumberToString } from "../form-utils";
import { useInput } from "dendriform";
import { FieldRow } from "./field-row";
import { Link } from "./link";

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
      <FieldRow label="key width">
        {appState.render("keyWidth", (keyWidthForm) => {
          const [asString] = useNumberToString(keyWidthForm);
          return <input type="number" {...useInput(asString)} />;
        })}
      </FieldRow>
      <FieldRow label="key height">
        {appState.render("keyHeight", (keyHeightForm) => {
          const [asString] = useNumberToString(keyHeightForm);
          return <input type="number" {...useInput(asString)} />;
        })}
      </FieldRow>
      <FieldRow label="key offset x">
        {appState.render("keyOffsetX", (keyOffsetXForm) => {
          const [asString] = useNumberToString(keyOffsetXForm);
          return <input type="number" {...useInput(asString)} />;
        })}
      </FieldRow>
      <FieldRow label="key offset y">
        {appState.render("keyOffsetY", (keyOffsetYForm) => {
          const [asString] = useNumberToString(keyOffsetYForm);
          return <input type="number" {...useInput(asString)} />;
        })}
      </FieldRow>
    </div>
  );
}
