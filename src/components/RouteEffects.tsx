import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

/** Scroll to top + refresh AOS on every route change */
export default function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo(0, 0);

    // Safely refresh AOS (if already initialized)
    try {
      if (AOS?.refreshHard) AOS.refreshHard();
      else AOS.refresh();
    } catch {
      /* ignore if AOS not ready yet */
    }
  }, [location.pathname]);

  return null;
}
