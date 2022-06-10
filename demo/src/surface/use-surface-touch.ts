import { useRef, useEffect } from "react";
import { appConsole } from "../data/console";

export function useSurfaceTouch() {
  const surfaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = surfaceRef.current;
    if (!el) return;

    const touchStart = (e: TouchEvent) => {
      e.preventDefault();
      const { changedTouches } = e;

      for (let i = 0; i < changedTouches.length; i++) {
        const touch = changedTouches[i];
        const x = Math.round(touch.pageX);
        const y = Math.round(touch.pageY);
        appConsole.warn(
          `touch ${touch.identifier} started at [${x}, ${y}]\n force is ${touch.force}`
        );
      }
    };

    const touchMove = (e: TouchEvent) => {
      e.preventDefault();
      const { changedTouches } = e;
      for (let i = 0; i < changedTouches.length; i++) {
        const touch = changedTouches[i];
        const x = Math.round(touch.pageX);
        const y = Math.round(touch.pageY);
        appConsole.log(
          `touch ${touch.identifier} moved at [${x}, ${y}]\n force is ${touch.force}`
        );
      }
    };

    const touchEnd = (e: TouchEvent) => {
      e.preventDefault();
      const { changedTouches } = e;
      for (let i = 0; i < changedTouches.length; i++) {
        const touch = changedTouches[i];
        const x = Math.round(touch.pageX);
        const y = Math.round(touch.pageY);
        appConsole.error(
          `touch ${touch.identifier} ended at [${x}, ${y}]\n force is ${touch.force}`
        );
      }
    };

    let mouseDown = false;
    let lastPos = [0, 0];

    const mouseStart = (e: MouseEvent) => {
      e.preventDefault();
      mouseDown = true;
      const x = Math.round(e.pageX);
      const y = Math.round(e.pageY);
      lastPos = [x, y];
      appConsole.warn(`mouse down at [${x}, ${y}]`);
    };

    const mouseMove = (e: MouseEvent) => {
      e.preventDefault();
      if (!mouseDown) return;
      const x = Math.round(e.pageX);
      const y = Math.round(e.pageY);
      lastPos = [x, y];
      appConsole.log(`mouse move at [${x}, ${y}]`);
    };

    const mouseEnd = (e: MouseEvent) => {
      mouseDown = false;
      e.preventDefault();
      const [x, y] = lastPos;
      appConsole.error(`mouse up at [${x}, ${y}]`);
    };

    el.addEventListener("touchstart", touchStart);
    el.addEventListener("touchmove", touchMove);
    el.addEventListener("touchend", touchEnd);
    el.addEventListener("touchcancel", touchEnd);
    el.addEventListener("mousedown", mouseStart);
    el.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseEnd);

    return () => {
      el.removeEventListener("touchstart", touchStart);
      el.removeEventListener("touchmove", touchMove);
      el.removeEventListener("touchend", touchEnd);
      el.removeEventListener("touchcancel", touchEnd);
      el.removeEventListener("mousedown", mouseStart);
      el.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseEnd);
    };
  }, []);

  return surfaceRef;
}
