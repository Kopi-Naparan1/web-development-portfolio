"use client";

import { useState, useEffect } from "react";

const SLOW_EFFECTIVE_TYPES = ["slow-2g", "2g", "3g"];

function evaluateConnection() {
  if (typeof navigator === "undefined") return true; // SSR — default to "fast"

  const conn =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  // Browsers without the API (Safari, Firefox) → assume fast, don't punish them
  if (!conn) return true;

  const dataSaverOn = conn.saveData === true;
  const slowType = SLOW_EFFECTIVE_TYPES.includes(conn.effectiveType);
  const lowMemory =
    typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4;

  // If any of these are true, treat as "should NOT load heavy stuff"
  return !(dataSaverOn || slowType || lowMemory);
}

/**
 * Returns true if the device/connection looks fast enough to load
 * heavy assets (3D scenes, large video, etc). Defaults to true on
 * first render (SSR-safe) and re-evaluates once on mount, plus
 * whenever the browser reports a connection change.
 */
export function useAdaptiveLoading() {
  const [shouldLoadHeavy, setShouldLoadHeavy] = useState(true);

  useEffect(() => {
    setShouldLoadHeavy(evaluateConnection());

    const conn =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (!conn) return;

    const handleChange = () => setShouldLoadHeavy(evaluateConnection());
    conn.addEventListener("change", handleChange);
    return () => conn.removeEventListener("change", handleChange);
  }, []);

  return shouldLoadHeavy;
}
