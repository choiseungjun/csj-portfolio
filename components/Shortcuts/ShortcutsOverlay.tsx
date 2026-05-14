"use client";

import { useEffect, useState } from "react";
import { SHORTCUTS_EVENT } from "@/lib/shortcuts";
import styles from "./ShortcutsOverlay.module.css";

const ROWS = [
  { label: "다음 섹션으로 이동 / Next section", keys: ["J"] },
  { label: "이전 섹션으로 이동 / Previous", keys: ["K"] },
  { label: "맨 위로 / Back to top", keys: ["G", "G"] },
  { label: "테마 토글 / Toggle theme", keys: ["T"] },
  { label: "이메일 복사 / Copy email", keys: ["E"] },
  { label: "도움말 닫기 / Close", keys: ["Esc"] },
];

export function ShortcutsOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onToggle = (e: Event) => {
      const detail = (e as CustomEvent<{ open?: boolean }>).detail;
      if (detail && typeof detail.open === "boolean") setOpen(detail.open);
      else setOpen((o) => !o);
    };
    window.addEventListener(SHORTCUTS_EVENT, onToggle as EventListener);
    return () =>
      window.removeEventListener(SHORTCUTS_EVENT, onToggle as EventListener);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className={`${styles.overlay} ${open ? styles.open : ""}`}
      role="dialog"
      {...(open ? { "aria-modal": true } : { "aria-hidden": true })}
      aria-labelledby="kbdTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className={styles.inner}>
        <h3 id="kbdTitle" className={styles.h3}>
          Keyboard shortcuts
        </h3>
        <p className={styles.sub}>/ Navigate this page</p>
        <ul className={styles.list}>
          {ROWS.map((row, i) => (
            <li key={i}>
              <span>{row.label}</span>
              <span className={styles.keys}>
                {row.keys.map((k, j) => (
                  <kbd key={j}>{k}</kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
