import { useRef, useEffect } from "react";

function touchToId(touch: Touch): string {
  return `touch-${touch.identifier}`;
}

export type SurfaceEventType = "start" | "move" | "end";

export type SurfaceEvent = {
  type: SurfaceEventType;
  x: number;
  y: number;
  pointerId: string;
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
          pointerId: touchToId(touch),
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
          pointerId: touchToId(touch),
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
          pointerId: touchToId(touch),
          force: touch.force,
        });
      }
    };

    let mouseDown = false;
    let lastPos: [number, number] | undefined;

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
        pointerId: "mouse",
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
        pointerId: "mouse",
        force: 1,
      });
    };

    const mouseEnd = () => {
      mouseDown = false;
      if (lastPos) {
        const [x, y] = lastPos;
        lastPos = undefined;

        onSurfaceEvent({
          type: "end",
          x,
          y,
          pointerId: "mouse",
          force: 1,
        });
      }
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
