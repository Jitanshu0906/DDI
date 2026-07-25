import { useEffect } from "react";
import { useLocation } from "wouter";

// Scrolls the window to the top every time the route changes.
// Wouter (like most client-side routers) does not reset scroll
// position automatically, so without this the new page keeps
// whatever scroll position the previous page was left at.
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
