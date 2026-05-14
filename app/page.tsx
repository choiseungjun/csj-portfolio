import { HeroMeta } from "@/components/Sections/HeroMeta";
import { AboutSection } from "@/components/Sections/AboutSection";
import { ExperienceSection } from "@/components/Sections/ExperienceSection";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { AISection } from "@/components/Sections/AISection";
import { SkillsSection } from "@/components/Sections/SkillsSection";
import { ContactSection } from "@/components/Sections/ContactSection";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <nav className={styles.breadcrumb}>
        <span>portfolio</span>
        <span className={styles.sep}>/</span>
        <span>2026</span>
        <span className={styles.sep}>/</span>
        <span className={styles.cur}>choi-seungjun.mdx</span>
      </nav>

      <h1 className={styles.docTitle}>
        화면을 이해하는 프론트엔드,
        <br />
        시스템을 설계하는 엔지니어
        <span className={styles.docTitleEn}>
          Frontend Developer focused on UI/UX depth and scalable codebases.
        </span>
      </h1>
      <p className={styles.docLede}>
        사용자와 맞닿은 UI의 본질부터, 동료들이 편하게 일하는 환경까지
        <br />
        팀의 생산성을 높이는 9년 차 프론트엔드 개발자입니다.
      </p>

      <HeroMeta />

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AISection />
      <SkillsSection />
      <ContactSection />

      <footer className={styles.docFooter}>
        <span>LAST UPDATED · 2026.05</span>
        <span className={styles.hint}>
          Press <kbd>?</kbd> for shortcuts
        </span>
        <span>© SEUNGJUN CHOI</span>
      </footer>
    </>
  );
}
