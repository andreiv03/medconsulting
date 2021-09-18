import { useState, useEffect, useCallback } from "react";

interface StateObject {
  scrollX: number;
  scrollY: number;
  scrollHorizontalDirection: string;
  scrollVerticalDirection: string;
};

type CallbackFunction = (event: Event) => void;

export default function useScroll() {
  if (typeof window === "undefined")
    return {
      scrollX: 0,
      scrollY: 0,
      scrollHorizontalDirection: "",
      scrollVerticalDirection: ""
    }

  const [state, setState] = useState<StateObject>(() => {
    const bodyOffset: DOMRect = document.body.getBoundingClientRect();

    return {
      scrollX: bodyOffset.left,
      scrollY: bodyOffset.top,
      scrollHorizontalDirection: "",
      scrollVerticalDirection: ""
    }
  });

  const handleScrollEvent = useCallback<CallbackFunction>(() => {
    setState((prevState: StateObject) => {
      const bodyOffset: DOMRect = document.body.getBoundingClientRect();

      return {
        scrollX: bodyOffset.left,
        scrollY: -bodyOffset.top,
        scrollHorizontalDirection: prevState.scrollX > bodyOffset.left ? "right" : "left",
        scrollVerticalDirection: prevState.scrollY > -bodyOffset.top ? "up" : "down"
      }
    });
  }, []);

  useEffect(() => {
    const scrollListener = (event: Event) => handleScrollEvent(event);

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [handleScrollEvent]);

  return {
    scrollX: state.scrollX,
    scrollY: state.scrollY,
    scrollHorizontalDirection: state.scrollHorizontalDirection,
    scrollVerticalDirection: state.scrollVerticalDirection
  }
}