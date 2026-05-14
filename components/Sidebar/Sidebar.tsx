import { Logo } from "./Logo";
import { TableOfContents } from "./TableOfContents";
import { ThemeToggle } from "../ThemeToggle";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.identity}>
        <Logo />
        <div className={styles.idRole}>
          <span className={styles.dot} />
          Senior Frontend Developer
          <br />
          9년차 · Open to work
        </div>
      </div>

      <div className={styles.sideSection}>Contents</div>
      <TableOfContents />

      <div className={styles.sideFoot}>
        <span className={styles.version}>v2026.05</span>
        <div className={styles.sideLinks}>
          <a
            className={styles.iconBtn}
            href="mailto:sssjunn00@gmail.com"
            aria-label="Email"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
<ThemeToggle className={styles.iconBtn} />
        </div>
      </div>
    </aside>
  );
}
