"use client";

import { useEffect, useState } from "react";
import { dispatchShortcutsToggle } from "@/lib/shortcuts";
import { DISCOVERY_ATTENTION_EVENT } from "./DiscoveryBalloon";
import styles from "./ShortcutsPill.module.css";

export function ShortcutsPill() {
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    const on = () => setAttention(true);
    const off = () => setAttention(false);
    window.addEventListener(DISCOVERY_ATTENTION_EVENT, on as EventListener);
    window.addEventListener(
      `${DISCOVERY_ATTENTION_EVENT}:off`,
      off as EventListener
    );
    return () => {
      window.removeEventListener(DISCOVERY_ATTENTION_EVENT, on as EventListener);
      window.removeEventListener(
        `${DISCOVERY_ATTENTION_EVENT}:off`,
        off as EventListener
      );
    };
  }, []);

  return (
    <button
      type="button"
      className={`${styles.pill} ${attention ? styles.attention : ""}`}
      aria-label="Show keyboard shortcuts"
      onClick={() => dispatchShortcutsToggle()}
    >
      <kbd>?</kbd>
      <span>Shortcuts</span>
    </button>
  );
}
