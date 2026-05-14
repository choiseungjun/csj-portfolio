import { SectionHead } from "./SectionHead";
import { Reveal } from "../Reveal/Reveal";
import section from "./Section.module.css";
import styles from "./ExperienceSection.module.css";

type Item = {
  date: string;
  role: string;
  at: string;
  bullets: string[];
  now?: boolean;
};

const ITEMS: Item[] = [
  {
    date: "2022 · 05 — Present (3y+)",
    role: "Senior Frontend Developer",
    at: "바이널씨 / Vinyl C",
    now: true,
    bullets: [
      "프로젝트 구축·운영 업무와 병행하며, 23명 조직의 표준 코딩 컨벤션·아키텍처 가이드·PR 템플릿을 주도적으로 설계·문서화",
      "회사 전체 디자인 시스템 v1→v3 메이저 업데이트 주도 (토큰·컴포넌트·Variables·문서)",
      "AI 기반 개발 생산성 도구 도입 주도 — Claude API 활용 코드 리뷰 자동화, Figma → 코드 자동 생성, MCP 기반 개발 워크플로우 자동화 등 타 부서와 협업해 반복 작업 최적화",
    ],
  },
  {
    date: "2017 · 09 — 2022 · 05 (4y 8m)",
    role: "Frontend Developer",
    at: "바이널씨 / Vinyl C",
    bullets: [
      "React·Vue 기반 대기업 프로젝트 10+ 개발 (금융·통신·신규 서비스 구축 중심)",
      "퍼블리싱부터 프론트엔드까지 전 영역 담당 → UI 구현의 정확도와 완성도 확보",
      "기획자·디자이너·백엔드와 Figma 협업 — 요구사항 정의부터 개발까지 전 과정 참여",
    ],
  },
  {
    date: "2016 · 07 — 2017 · 09 (1y 3m)",
    role: "Junior Frontend Developer",
    at: "디나인컴즈",
    bullets: [
      "HTML5·CSS3·jQuery 기반 웹사이트 15+ 제작·유지보수·리뉴얼",
      "웹 접근성(WCAG 2.0)·시맨틱 마크업·크로스브라우징(IE8+)·반응형 구현",
      "기획자·디자이너·백엔드 개발자와의 협업 경험으로 제품 개발 전체 흐름 이해",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className={section.section}>
      <SectionHead
        anchor="02"
        kr="경력"
        en="Experience"
        desc="바이널씨에서 8년, 그 이전 1년."
      />
      <div className={styles.timeline}>
        {ITEMS.map((item, i) => (
          <Reveal
            key={i}
            delay={i * 80}
            className={`${styles.tlItem} ${item.now ? styles.now : ""}`}
          >
            <div className={styles.tlDate}>{item.date}</div>
            <div className={styles.tlRole}>
              {item.role} <span className={styles.at}>· {item.at}</span>
            </div>
            <ul className={styles.tlBullets}>
              {item.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
