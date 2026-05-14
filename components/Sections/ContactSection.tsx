import { SectionHead } from "./SectionHead";
import { Reveal } from "../Reveal/Reveal";
import section from "./Section.module.css";
import styles from "./ContactSection.module.css";

type Card = {
  k: string;
  v: string;
  href: string;
  arrow: "→" | "↗";
  external?: boolean;
};

const CARDS: Card[] = [
  {
    k: "Email",
    v: "sssjunn00@gmail.com",
    href: "mailto:sssjunn00@gmail.com",
    arrow: "→",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className={section.section}>
      <SectionHead
        anchor="06"
        kr="연락"
        en="Contact"
        desc="새로운 팀, 자문, 협업 — 어떤 이야기든 환영합니다."
      />
      <div className={styles.grid}>
        {CARDS.map((c, i) => (
          <Reveal key={c.k} delay={i * 60}>
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className={styles.card}
            >
              <span className={styles.k}>{c.k}</span>
              <span className={styles.v}>{c.v}</span>
              <span className={styles.arrow}>{c.arrow}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
