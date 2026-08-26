import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

// Tell TypeScript that fbq exists on window (it's loaded via the
// Meta Pixel script tag in client/index.html)
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// Fires a Meta Pixel PageView event every time the route changes.
// The base pixel script in index.html only fires PageView once, on
// initial page load. Since this is a single-page app (wouter),
// navigating between routes doesn't trigger a full reload, so without
// this component, only the very first page view would ever be tracked.
export function PixelTracker() {
  const [location] = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the very first render — the base script in index.html
    // already fires the initial PageView, so this avoids double-counting.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
}
