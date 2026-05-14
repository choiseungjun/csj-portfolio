import { SectionHead } from "./SectionHead";
import section from "./Section.module.css";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section id="about" className={section.section}>
      <SectionHead
        anchor="01"
        kr="소개"
        en="About"
        desc="팀이 같은 언어로 일하게 만드는 사람."
      />
      <div className={styles.about}>
        <p>
          웹에이전시에서 퍼블리셔로 시작해 9년간 프론트엔드를 만들어 왔습니다.
          디자이너·기획자와 가장 가까운 자리에서 다양한 구축·운영 프로젝트를 경험하며,
          <br />
          단순히 동작하는 화면이 아니라 디자인 의도와 사용자 흐름을 코드로 정확히 구현하는 감각을 쌓아왔습니다.
        </p>
        <p>
          지금은 그 경험을 바탕으로 React·Next.js 환경에서 <strong>컴포넌트 아키텍처, 디자인 시스템,
          코딩 컨벤션을 설계</strong>하며 팀 전체의 개발 생산성과 유지보수 효율을 높이는 일에 집중하고 있습니다.
          <br />
          제가 직접 짠 코드보다, 제가 만든 환경 안에서 <strong>팀이 더 빠르고 일관되게 코드를 만들어낼 수 있는
          구조를 만드는 것</strong> – 그것이 9년차 프론트엔드 엔지니어의 역할이라고 생각합니다.
        </p>
        <p>
          최근에는 <strong>AI 시대에 맞춰 팀의 생산성을 높이는 방법</strong>을 고민하고, 이를 실제 개발 프로세스와
          협업 문화에 자연스럽게 녹여내는 데에도 관심을 두고 있습니다.
          <br />
          동시에 모던 웹 생태계를 기반으로
          접근성·성능·일관성까지 균형 있게 고려한 프론트엔드를 만들어가고 있습니다.
        </p>
        <p>
          AI가 코드를 쓰는 시대일수록, &ldquo;어떻게 일관성 있게 받아들이고 검증할 것인가&rdquo;가 더 중요해진다고 생각합니다.
          <br />
          9년간 쌓아온 디자인 시스템·코딩 컨벤션·코드 리뷰 문화가 변화의 가드레일이 되도록 — 저는 이렇게 준비하고 있습니다.
        </p>
      </div>
    </section>
  );
}
