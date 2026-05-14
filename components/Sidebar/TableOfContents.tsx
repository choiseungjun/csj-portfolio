"use client";

import { useEffect, useState } from "react";
import styles from "./TableOfContents.module.css";

const ITEMS = [
  { id: "about", n: "01", kr: "소개", en: "About" },
  { id: "experience", n: "02", kr: "경력", en: "Experience" },
  { id: "projects", n: "03", kr: "프로젝트", en: "Projects" },
  { id: "ai", n: "04", kr: "AI 시대", en: "AI Era" },
  { id: "skills", n: "05", kr: "기술", en: "Skills" },
  { id: "contact", n: "06", kr: "연락", en: "Contact" },
];

export function TableOfContents() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: "smooth" });
  };

  return (
    <ul className={styles.toc} id="toc">
      {ITEMS.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={active === item.id ? styles.active : undefined}
            onClick={(e) => onClick(e, item.id)}
          >
            <span className={styles.n}>{item.n}</span>
            <span>
              {item.kr} / {item.en}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
