import classes from "./sidebar.module.css";
import clsx from "clsx";

import { appState } from "../data/app-state";
import { SidebarSurfaceSettings } from "./sidebar-surface-settings";
import { SidebarTuningSettings } from "./sidebar-tuning-settings";
import { SidebarSynthSettings } from "./sidebar-synth-settings";
import { Console } from "./sidebar-console";
import { Link } from "./link";
import { Drawer } from "./drawer";

type SidebarProps = {
  handleDestroy: () => void;
  handleRecord: () => void;
  handleRecordStop: () => void;
  handlePlay: () => void;
};

export function Sidebar(props: SidebarProps) {
  const { handleDestroy, handleRecord, handleRecordStop, handlePlay } = props;
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
      <Drawer label="Tuning settings" state={sidebar.branch("tuningOpen")}>
        <SidebarTuningSettings />
      </Drawer>
      <Drawer label="Surface settings" state={sidebar.branch("surfaceOpen")}>
        <SidebarSurfaceSettings />
      </Drawer>
      <Drawer label="Synth settings" state={sidebar.branch("synthOpen")}>
        <SidebarSynthSettings />
      </Drawer>
      <Drawer label="Debug console" state={sidebar.branch("consoleOpen")}>
        <Console />
      </Drawer>
      <div className={classes.repo}>
        <div>
          <Link href="https://github.com/dxinteractive/mosfez-synth">
            github repo
          </Link>
        </div>
        <div>
          <Link onClick={handleDestroy}>destroy</Link>
        </div>
        <div>
          <Link onClick={handleRecord}>record</Link>
        </div>
        <div>
          <Link onClick={handleRecordStop}>stop</Link>
        </div>
        <div>
          <Link onClick={handlePlay}>play</Link>
        </div>
      </div>
    </div>
  );
}
