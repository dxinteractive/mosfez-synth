import { SurfaceState } from "../data/app-state";

export type Vec2 = [number, number];

export function worldToScreen(
  surface: SurfaceState,
  windowSize: Vec2,
  [x, y]: Vec2
): Vec2 {
  const { keySize, rootPositionX, rootPositionY } = surface;
  const [windowWidth, windowHeight] = windowSize;

  return [
    x * keySize + rootPositionX * windowWidth,
    y * keySize + rootPositionY * windowHeight,
  ];
}

export function screenToScreen(
  surface: SurfaceState,
  windowSize: Vec2,
  [x, y]: Vec2
): Vec2 {
  return [x, y];
}

export function getWorldWindowBounds(
  surface: SurfaceState,
  windowSize: Vec2
): [Vec2, Vec2] {
  // only a loose bounds to know how many cells to render
  const { keySize, rootPositionX, rootPositionY } = surface;
  const [windowWidth, windowHeight] = windowSize;
  const xAmount = Math.ceil(windowWidth / keySize);
  const yAmount = Math.ceil(windowHeight / keySize);
  const xFirst = Math.floor((-rootPositionX * windowWidth) / keySize);
  const yFirst = Math.floor((-rootPositionY * windowHeight) / keySize);
  const xBounds = [xFirst, xFirst + xAmount + 1] as Vec2;
  const yBounds = [yFirst, yFirst + yAmount + 1] as Vec2;
  return [xBounds, yBounds];
}
