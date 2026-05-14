"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroMeta.module.css";

type CounterDef = {
  k: string;
  target: number;
  prefix?: string;
  suffix?: string;
};

type StaticDef = {
  k: string;
  value: string;
};

const COUNTERS: CounterDef[] = [
  { k: "경력", target: 9, suffix: " years" },
  { k: "현재", target: 8, prefix: "Vinyl C · ", suffix: "y (Current)" },
];

const STATICS: StaticDef[] = [
  { k: "전문 영역", value: "Frontend Architecture\n& Performance" },
  { k: "위치", value: "Seoul, KR" },
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function HeroMeta() {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const setFinal = (idx: number, c: CounterDef) => {
      const el = valueRefs.current[idx];
      if (el) el.textContent = (c.prefix || "") + c.target + (c.suffix || "");
    };
    if (reduce) {
      COUNTERS.forEach((c, i) => setFinal(i, c));
      return;
    }
    const row = rowRef.current;
    if (!row) return;

    const animate = (idx: number, c: CounterDef) => {
      const el = valueRefs.current[idx];
      if (!el) return;
      const duration = 900;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const v = Math.round(easeOutCubic(t) * c.target);
        el.textContent = (c.prefix || "") + v + (c.suffix || "");
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            COUNTERS.forEach((c, i) => animate(i, c));
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(row);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rowRef} className={styles.row}>
      {COUNTERS.map((c, i) => (
        <div key={c.k} className={styles.item}>
          <span className={styles.k}>{c.k}</span>
          <span
            ref={(el) => {
              valueRefs.current[i] = el;
            }}
            className={`${styles.v} ${styles.counter}`}
            data-count
          >
            {(c.prefix || "") + "0" + (c.suffix || "")}
          </span>
        </div>
      ))}
      {STATICS.map((s) => (
        <div key={s.k} className={styles.item}>
          <span className={styles.k}>{s.k}</span>
          <span className={`${styles.v} ${styles.counter}`}>
            {s.value.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
