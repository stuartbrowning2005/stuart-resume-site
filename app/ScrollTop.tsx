"use client";

import { useEffect } from "react";

// Always open the page at the top on load/reload, instead of the browser
// restoring the old scroll position or jumping to a #section from the URL.
export default function ScrollTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return null;
}
