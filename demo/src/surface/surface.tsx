import classes from "./surface.module.css";
import clsx from "clsx";
import { useCallback } from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";

import { appState, SurfaceState } from "../data/app-state";
import {
  worldToScreen,
  screenToWorld,
  getWorldWindowBounds,
  Vec2,
} from "./surface-transform";
import { useSurfaceTouch } from "./use-surface-touch";
import type { SurfaceEvent, SurfaceEventType } from "./use-surface-touch";
import { appConsole } from "../data/console";
import { useRef } from "react";

function coordToNote(x: number, y: number): number {
  const { stepSizeX, stepSizeY } = appState.value.surface;
  return -Math.round(y) * stepSizeY + Math.round(x) * stepSizeX;
}

export type SurfaceNoteEvent = {
  type: SurfaceEventType;
  id: number;
  note: number;
  force: number;
};

export type SurfaceProps = {
  onSurfaceNoteEvent?: (e: SurfaceNoteEvent) => void;
};

export function Surface(props: SurfaceProps) {
  const { onSurfaceNoteEvent } = props;

  const windowSize = useWindowSize() as Vec2;
  const surface = appState.branch("surface").useValue();
  const scaleSize = appState.branch(["tuning", "scaleSize"]).useValue();

  const windowSizeRef = useRef<Vec2>(windowSize);
  const surfaceRef = useRef<SurfaceState>(surface);
  windowSizeRef.current = windowSize;
  surfaceRef.current = surface;

  const handleSurfaceEvent = useCallback(
    (e: SurfaceEvent) => {
      if (!onSurfaceNoteEvent) return;

      // transform surface event into world space
      const { type, id, force } = e;
      const coord = [e.x, e.y] as Vec2;
      const [x, y] = screenToWorld(
        surfaceRef.current,
        windowSizeRef.current,
        coord
      );

      // turn that into a note number
      const note = coordToNote(x, y);

      // log stuff of interest
      let text = `${type} id:${id} at [${x.toPrecision(3)}, ${y.toPrecision(
        3
      )}]`;
      text += `\n note is ${note}`;
      text += `\n force is ${force}`;

      if (type === "start") {
        appConsole.warn(text);
      } else if (type === "move") {
        appConsole.log(text);
      } else if (type === "end") {
        appConsole.error(text);
      }

      // send event up
      onSurfaceNoteEvent({
        ...e,
        x,
        y,
        note,
      });
    },
    [onSurfaceNoteEvent]
  );

  const ref = useSurfaceTouch(handleSurfaceEvent);

  const [[xmin, xmax], [ymin, ymax]] = getWorldWindowBounds(
    surface,
    windowSize
  );

  const cells: React.ReactElement[] = [];
  for (let x = xmin; x < xmax; x++) {
    for (let y = ymin; y < ymax; y++) {
      const coord = [x - 0.5, y - 0.5] as Vec2;
      const [transformedX, transformedY] = worldToScreen(
        surface,
        windowSize,
        coord
      );

      // BAD HARDCODED 12!
      const isRoot = coordToNote(x, y) % scaleSize === 0;

      cells.push(
        <Cell
          key={`${x},${y}`}
          keySize={surface.keySize}
          x={transformedX}
          y={transformedY}
          isRoot={isRoot}
        />
      );
    }
  }

  return (
    <div className={classes.surface} ref={ref}>
      {cells}
    </div>
  );
}

type CellProps = {
  keySize: number;
  x: number;
  y: number;
  isRoot?: boolean;
};

function Cell(props: CellProps) {
  const { keySize, x, y, isRoot } = props;

  const style = {
    width: `${keySize}px`,
    height: `${keySize}px`,
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <div className={clsx(classes.cell, isRoot && classes.root)} style={style} />
  );
}
