import classes from "./surface.module.css";
import clsx from "clsx";
import { useState } from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";

import { appState, SurfaceState } from "../data/app-state";
import {
  worldToScreen,
  screenToWorld,
  getWorldWindowBounds,
  Vec2,
} from "./surface-transform";
import { SurfaceEvent, useSurfaceTouch } from "./use-surface-touch";
import { appConsole } from "../data/console";
import { useRef } from "react";

export function Surface() {
  const windowSize = useWindowSize() as Vec2;
  const surface = appState.branch("surface").useValue();

  const windowSizeRef = useRef<Vec2>(windowSize);
  const surfaceRef = useRef<SurfaceState>(surface);
  windowSizeRef.current = windowSize;
  surfaceRef.current = surface;

  const [handleSurfaceEvent] = useState(() => (e: SurfaceEvent) => {
    const { type, id, force } = e;
    const windowSize = windowSizeRef.current;
    const surface = surfaceRef.current;
    const [x, y] = screenToWorld(surface, windowSize, [e.x, e.y]);

    let text = `${type} id:${id} at [${x.toPrecision(3)}, ${y.toPrecision(3)}]`;
    text += `\n force is ${force}`;

    if (type === "start") {
      appConsole.warn(text);
    } else if (type === "move") {
      appConsole.log(text);
    } else if (type === "end") {
      appConsole.error(text);
    }
  });

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
      cells.push(
        <Cell
          key={`${x},${y}`}
          keySize={surface.keySize}
          x={transformedX}
          y={transformedY}
          isRoot={x === 0 && y === 0}
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
