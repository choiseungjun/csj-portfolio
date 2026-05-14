import { SectionHead } from "./SectionHead";
import { Reveal } from "../Reveal/Reveal";
import { SKILL_GROUPS } from "@/lib/skills";
import section from "./Section.module.css";
import styles from "./SkillsSection.module.css";

export function SkillsSection() {
  return (
    <section id="skills" className={section.section}>
      <SectionHead
        anchor="05"
        kr="기술"
        en="Skills & Tools"
        desc="실무에서 사용해온 기술과 도구들."
      />
      {SKILL_GROUPS.map((group, i) => {
        const cls = [
          styles.skillGroup,
          i === 0 ? styles.first : "",
          i === SKILL_GROUPS.length - 1 ? styles.last : "",
        ]
          .filter(Boolean)
          .join(" ");
        return (
          <Reveal key={group.label} delay={i * 60} className={cls}>
            <h4 className={styles.label}>{group.label}</h4>
            <div className={styles.chips}>
              {group.items.map((s) => (
                <span
                  key={s.label}
                  className={`${styles.chip} ${
                    s.level === 3 ? styles.lvl3 : styles.lvl2
                  }`}
                >
                  <span className={styles.ring} />
                  {s.label}
                </span>
              ))}
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
