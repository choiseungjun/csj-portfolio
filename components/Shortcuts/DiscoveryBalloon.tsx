"use client";

import { useEffect, useState } from "react";
import { SHORTCUTS_EVENT } from "@/lib/shortcuts";
import styles from "./DiscoveryBalloon.module.css";

export const DISCOVERY_ATTENTION_EVENT = "discovery-attention";
const KEY = "kbd-discovery-seen";

export function DiscoveryBalloon() {
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 880px)").matches) return;
    let seen = 0;
    try {
      seen = parseInt(localStorage.getItem(KEY) || "0", 10);
    } catch {}
    if (seen >= 2) return;

    const timer = setTimeout(() => {
      setShown(true);
      window.dispatchEvent(new Event(DISCOVERY_ATTENTION_EVENT));
      try {
        localStorage.setItem(KEY, String(seen + 1));
      } catch {}
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shown) return;

    const dismiss = () => {
      setDismissed(true);
      window.dispatchEvent(new Event(`${DISCOVERY_ATTENTION_EVENT}:off`));
    };

    const autoTimer = setTimeout(dismiss, 8000);

    const onShortcutsToggle = () => dismiss();
    window.addEventListener(SHORTCUTS_EVENT, onShortcutsToggle);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "?" || (e.shiftKey && e.key === "/")) dismiss();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(autoTimer);
      window.removeEventListener(SHORTCUTS_EVENT, onShortcutsToggle);
      document.removeEventListener("keydown", onKey);
    };
  }, [shown]);

  if (!shown || dismissed) return null;

  return (
    <div className={`${styles.balloon} ${styles.show}`}>
      <span className={styles.msg}>
        <span className={styles.strong}>단축키가 있어요</span> · <kbd>?</kbd>{" "}
        도움말 · <kbd>J</kbd> <kbd>K</kbd> 섹션 이동
      </span>
      <button
        type="button"
        className={styles.close}
        aria-label="Dismiss"
        onClick={() => {
          setDismissed(true);
          window.dispatchEvent(new Event(`${DISCOVERY_ATTENTION_EVENT}:off`));
        }}
      >
        ✕
      </button>
    </div>
  );
}
