"use client";

import { useEffect } from "react";

export function ScrollRestorationGuard() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}
