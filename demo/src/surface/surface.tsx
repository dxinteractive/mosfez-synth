import classes from "./surface.module.css";
import clsx from "clsx";

import { useWindowSize } from "@react-hook/window-size/throttled";
import { appState } from "../data/app-state";
import { worldToScreen, getWorldWindowBounds, Vec2 } from "./surface-transform";
import { useSurfaceTouch } from "./use-surface-touch";

export function Surface() {
  const windowSize = useWindowSize() as Vec2;
  const surface = appState.branch("surface").useValue();

  const surfaceRef = useSurfaceTouch();

  const [[xmin, xmax], [ymin, ymax]] = getWorldWindowBounds(
    surface,
    windowSize
  );

  const cells: React.ReactElement[] = [];
  for (let x = xmin; x < xmax; x++) {
    for (let y = ymin; y < ymax; y++) {
      const coord = [x, y] as Vec2;
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
    <div className={classes.surface} ref={surfaceRef}>
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
