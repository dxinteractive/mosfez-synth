import classes from "./sidebar.module.css";
import clsx from "clsx";

import { appState } from "../data/app-state";
import { Controls } from "./sidebar-controls";
import { Console } from "./sidebar-console";
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
      <Console />
    </div>
  );
}
