import { useRef, useEffect } from "react";

export type SurfaceEventType = "start" | "move" | "end";

export type SurfaceEvent = {
  type: SurfaceEventType;
  x: number;
  y: number;
  id: number;
  force: number;
};

export function useSurfaceTouch(onSurfaceEvent: (e: SurfaceEvent) => void) {
  const surfaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = surfaceRef.current;
    if (!el) return;

    const touchStart = (e: TouchEvent) => {
      e.preventDefault();
      const { changedTouches } = e;

      for (let i = 0; i < changedTouches.length; i++) {
        const touch = changedTouches[i];
        const x = touch.pageX;
        const y = touch.pageY;

        onSurfaceEvent({
          type: "start",
          x,
          y,
          id: touch.identifier,
          force: touch.force,
        });
      }
    };

    const touchMove = (e: TouchEvent) => {
      e.preventDefault();
      const { changedTouches } = e;
      for (let i = 0; i < changedTouches.length; i++) {
        const touch = changedTouches[i];
        const x = touch.pageX;
        const y = touch.pageY;

        onSurfaceEvent({
          type: "move",
          x,
          y,
          id: touch.identifier,
          force: touch.force,
        });
      }
    };

    const touchEnd = (e: TouchEvent) => {
      e.preventDefault();
      const { changedTouches } = e;
      for (let i = 0; i < changedTouches.length; i++) {
        const touch = changedTouches[i];
        const x = touch.pageX;
        const y = touch.pageY;

        onSurfaceEvent({
          type: "end",
          x,
          y,
          id: touch.identifier,
          force: touch.force,
        });
      }
    };

    let mouseDown = false;
    let lastPos = [0, 0];

    const mouseStart = (e: MouseEvent) => {
      e.preventDefault();
      mouseDown = true;
      const x = e.pageX;
      const y = e.pageY;
      lastPos = [x, y];

      onSurfaceEvent({
        type: "start",
        x,
        y,
        id: 0,
        force: 1,
      });
    };

    const mouseMove = (e: MouseEvent) => {
      e.preventDefault();
      if (!mouseDown) return;
      const x = e.pageX;
      const y = e.pageY;
      lastPos = [x, y];

      onSurfaceEvent({
        type: "move",
        x,
        y,
        id: 0,
        force: 1,
      });
    };

    const mouseEnd = (e: MouseEvent) => {
      mouseDown = false;
      e.preventDefault();
      const [x, y] = lastPos;

      onSurfaceEvent({
        type: "end",
        x,
        y,
        id: 0,
        force: 1,
      });
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
  }, [onSurfaceEvent]);

  return surfaceRef;
}
