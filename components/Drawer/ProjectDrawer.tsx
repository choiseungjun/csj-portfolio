"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ProjectDetail } from "./ProjectDetail";
import type { Project } from "@/lib/projects";
import styles from "./ProjectDrawer.module.css";

export function ProjectDrawer({ data }: { data: Project }) {
  const router = useRouter();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  const close = () => router.back();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      closeBtnRef.current?.focus({ preventScroll: true });
    }, 320);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.drawer} aria-hidden="false">
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Close project detail"
        onClick={close}
      />
      <aside
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
      >
        <header className={styles.head}>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            onClick={close}
            aria-label="Close project detail"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>Back to projects</span>
          </button>
          <span className={styles.pnTag}>PRJ / {data.id}</span>
        </header>
        <div className={styles.body}>
          <ProjectDetail data={data} />
        </div>
      </aside>
    </div>
  );
}
