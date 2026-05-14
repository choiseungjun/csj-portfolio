import Link from "next/link";
import { SectionHead } from "./SectionHead";
import { Reveal } from "../Reveal/Reveal";
import { PROJECTS } from "@/lib/projects";
import section from "./Section.module.css";
import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  return (
    <section id="projects" className={section.section}>
      <SectionHead
        anchor="03"
        kr="프로젝트"
        en="Selected Projects"
        desc="경험으로 쌓은 것들."
      />
      <div className={styles.list}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 60}>
            <Link href={`/projects/${p.id}`} className={styles.row}>
              <div className={styles.pn}>{p.id}</div>
              <div className={styles.info}>
                <div className={styles.pt}>
                  {p.title.kr} <small>{p.title.en}</small>
                </div>
                <div className={styles.pd}>{p.summary}</div>
                <div className={styles.period}>{p.meta.period}</div>
              </div>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <span className={styles.arrow}>→</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
