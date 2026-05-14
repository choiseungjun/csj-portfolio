"use client";

import { useEffect } from "react";
import { toggleTheme } from "@/lib/theme";
import { dispatchShortcutsToggle } from "@/lib/shortcuts";

const SECTION_IDS = ["about", "experience", "projects", "ai", "skills", "contact"];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.offsetTop - 40, behavior: "smooth" });
}

function currentSectionIdx(): number {
  let idx = 0;
  SECTION_IDS.forEach((id, i) => {
    const s = document.getElementById(id);
    if (!s) return;
    if (s.getBoundingClientRect().top < window.innerHeight * 0.35) idx = i;
  });
  return idx;
}

function showToast(msg: string) {
  const prev = document.getElementById("__toast");
  if (prev) prev.remove();
  const el = document.createElement("div");
  el.id = "__toast";
  el.textContent = msg;
  el.style.cssText = [
    "position:fixed",
    "bottom:70px",
    "right:20px",
    "z-index:600",
    "padding:10px 14px",
    "background:var(--bg-inverse)",
    "color:var(--text-inverse)",
    "border-radius:8px",
    "font-family:var(--font-mono)",
    "font-size:11px",
    "letter-spacing:0.05em",
    "text-transform:uppercase",
    "box-shadow:var(--shadow-md)",
    "opacity:0",
    "transition:opacity 180ms ease, transform 180ms ease",
    "transform:translateY(4px)",
  ].join(";");
  document.body.appendChild(el);
  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(4px)";
    setTimeout(() => el.remove(), 200);
  }, 1400);
}

export function KeyboardHandler() {
  useEffect(() => {
    let gPressed = 0;
    let gTimer: ReturnType<typeof setTimeout> | null = null;

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.matches("input, textarea") || target.isContentEditable)
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        dispatchShortcutsToggle();
        return;
      }

      // Ignore further keys while overlay is open (let overlay handle Esc)
      const overlayOpen = document.querySelector(
        '[aria-modal="true"][role="dialog"]'
      );
      if (overlayOpen && e.key !== "Escape") {
        // overlay or drawer takes priority — but only block letter shortcuts
        if (/^[a-zA-Z]$/.test(e.key)) return;
      }

      if (e.key === "j" || e.key === "J") {
        e.preventDefault();
        const next = Math.min(SECTION_IDS.length - 1, currentSectionIdx() + 1);
        scrollToSection(SECTION_IDS[next]);
      } else if (e.key === "k" || e.key === "K") {
        e.preventDefault();
        const prev = Math.max(0, currentSectionIdx() - 1);
        scrollToSection(SECTION_IDS[prev]);
      } else if (e.key === "t" || e.key === "T") {
        toggleTheme();
      } else if (e.key === "g") {
        gPressed += 1;
        if (gTimer) clearTimeout(gTimer);
        if (gPressed >= 2) {
          gPressed = 0;
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          gTimer = setTimeout(() => {
            gPressed = 0;
          }, 500);
        }
      } else if (e.key === "e" || e.key === "E") {
        navigator.clipboard?.writeText("sssjunn00@gmail.com");
        showToast("Email copied");
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return null;
}
