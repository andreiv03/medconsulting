import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface Scroll {
  x: number;
  y: number;
  horizontal: Direction;
  vertical: Direction;
}

const INITIAL_STATE: Scroll = {
  x: 0,
  y: 0,
  horizontal: "none",
  vertical: "none",
};

export function useScroll(): Scroll {
  const [state, setState] = useState<Scroll>(() => {
    if (typeof window === "undefined") {
      return INITIAL_STATE;
    }

    const x = window.scrollX || window.pageXOffset || 0;
    const y = window.scrollY || window.pageYOffset || 0;
    return { ...INITIAL_STATE, x, y };
  });

  const lastX = useRef(state.x);
  const lastY = useRef(state.y);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const read = () => {
      const x = window.scrollX || window.pageXOffset || 0;
      const y = window.scrollY || window.pageYOffset || 0;

      const horizontal =
        x === lastX.current ? state.horizontal : x > lastX.current ? "right" : "left";
      const vertical = y === lastY.current ? state.vertical : y > lastY.current ? "down" : "up";

      lastX.current = x;
      lastY.current = y;

      setState({ x, y, horizontal, vertical });
      rafId.current = null;
    };

    const onScroll = () => {
      if (rafId.current !== null) {
        return;
      }

      rafId.current = window.requestAnimationFrame(read);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
