"use client";

import { createContext, useEffect, useReducer, useMemo, useCallback } from "react";
import { usePathname } from "next/navigation";

import { useScroll } from "@/hooks/use-scroll";

interface LayoutState {
  isMenuOpen: boolean;
  isHeaderWhite: boolean;
  scrollY: number;
}

type LayoutAction =
  | { type: "SET_IS_MENU_OPEN"; payload: boolean }
  | { type: "SET_IS_HEADER_WHITE"; payload: boolean }
  | { type: "UPDATE_SCROLL_Y"; payload: number };

interface LayoutContext {
  state: LayoutState;
  setIsMenuOpen: (payload: boolean) => void;
  setIsHeaderWhite: (payload: boolean) => void;
}

export const LayoutContext = createContext<LayoutContext | null>(null);

const reducer = (state: LayoutState, action: LayoutAction): LayoutState => {
  switch (action.type) {
    case "SET_IS_MENU_OPEN":
      return { ...state, isMenuOpen: action.payload };

    case "SET_IS_HEADER_WHITE":
      return { ...state, isHeaderWhite: action.payload };

    case "UPDATE_SCROLL_Y":
      return { ...state, scrollY: action.payload };

    default:
      return state;
  }
};

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    isMenuOpen: false,
    isHeaderWhite: false,
    scrollY: 0,
  });

  const pathname = usePathname();
  const { y } = useScroll();

  const setIsMenuOpen = useCallback((payload: boolean) => {
    dispatch({ type: "SET_IS_MENU_OPEN", payload });
  }, []);

  const setIsHeaderWhite = useCallback((payload: boolean) => {
    dispatch({ type: "SET_IS_HEADER_WHITE", payload });
  }, []);

  useEffect(() => {
    const whiteRoutes = new Set(["/about-us", "/services", "/hospitals", "/contact"]);
    setIsHeaderWhite(!!pathname && whiteRoutes.has(pathname));
  }, [pathname, setIsHeaderWhite]);

  useEffect(() => {
    dispatch({ type: "UPDATE_SCROLL_Y", payload: y });
  }, [y]);

  const contextValue = useMemo(
    () => ({ state, setIsMenuOpen, setIsHeaderWhite }),
    [state, setIsMenuOpen, setIsHeaderWhite],
  );

  return <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>;
}
