import classes from "./sidebar.module.css";
import clsx from "clsx";

import { appState } from "../data/app-state";
import { Controls } from "./sidebar-controls";
import { Console } from "./sidebar-console";
import { Link } from "./link";
import { Drawer } from "./drawer";

export function Sidebar() {
  const sidebar = appState.branch("sidebar");
  const sidebarOpen = sidebar.branch("open").useValue();

  if (!sidebarOpen) {
    return (
      <div className={clsx(classes.sidebar, classes.closed)}>
        <div className={classes.sideways}>
          <div className={classes.sidewaysInner}>
            <Link onClick={() => sidebar.branch("open").set(true)}>
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
          <h1>mosfez-synth demo</h1>
        </div>
        <Link onClick={() => sidebar.branch("open").set(false)}>[close]</Link>
      </div>
      <Drawer label="Surface settings" state={sidebar.branch("surfaceOpen")}>
        <Controls />
      </Drawer>
      <Drawer label="Debug console" state={sidebar.branch("consoleOpen")}>
        <Console />
      </Drawer>
    </div>
  );
}
