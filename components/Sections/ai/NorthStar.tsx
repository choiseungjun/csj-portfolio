import styles from "./NorthStar.module.css";

const NODES = [
  {
    stage: "01 · Source",
    title: "Design System MCP",
    sub: "나의 디자인 레퍼런스",
    bullets: ["Figma Dev Mode", "Code Connect", "Variants ↔ TS Props", "토큰 단일 소스"],
  },
  {
    stage: "02 · Context",
    title: "My Skills (.md)",
    sub: "나의 작업 규칙",
    bullets: ["컴포넌트 사용 규칙", "네이밍 · 폴더 구조", "금지 패턴 · 선호 패턴", "프롬프트 템플릿 정리"],
  },
  {
    stage: "03 · Output",
    title: "My Frontend",
    sub: "나의 코드",
    bullets: ["내 컨벤션을 따르는 코드", "a11y · 시맨틱 기본 탑재", "토큰 · 반응형 일관성", "리뷰 코멘트 최소화"],
  },
];

const PILLARS = [
  {
    num: "PILLAR 01",
    kr: "시스템 연결",
    en: "/ System",
    full: false,
    bullets: [
      <>Figma Dev Mode + Code Connect로 컴포넌트 스펙 · variants를 <strong>자동 추출</strong></>,
      <>디자인 토큰 ↔ Tailwind / CSS 변수를 <strong>단일 소스로 연결</strong></>,
      <>Variants → TypeScript Prop Types 자동 매핑으로 <strong>타입 안전성</strong> 확보</>,
    ],
  },
  {
    num: "PILLAR 02",
    kr: "규칙의 자산화",
    en: "/ Standards",
    full: false,
    bullets: [
      <>개인 코딩 컨벤션 · 작업 패턴 · 폴더 구조를 <strong>.md / Skills로 정리</strong></>,
      <>자주 쓰는 작업(컴포넌트 생성 · 리팩터링 · 문서화)을 재사용 프롬프트로 구성</>,
      <>컨텍스트를 압축해 전달 → <strong>토큰 사용량 최소화</strong>, 출력 일관성 유지</>,
    ],
  },
  {
    num: "PILLAR 03",
    kr: "지식의 공유",
    en: "/ Knowledge",
    full: true,
    bullets: [
      <>바이널씨 기술개발본부 <strong>Technical Wiki를 직접 설계·구축</strong> — 에이전시 특성상 축적되지 못했던 기술 자산을 한 곳에 정리</>,
      <>AI 트렌드 · 프론트엔드 가이드 · 프로젝트 이슈 · 개발 꿀팁 등 실무 중심 콘텐츠 구조화, 팀원 참여 유도</>,
      <>Core Guide(마크업) · Framework Guide · Figma Plugin · VCUI 컴포넌트 등 <strong>팀 공용 레퍼런스 문서화</strong> 주도</>,
    ],
  },
];

export function NorthStar() {
  return (
    <div className={styles.northstar}>
      <div className={styles.head}>
        <div className={styles.kicker}>North Star · 2026 →</div>
        <h4 className={styles.title}>
          내가 AI와 일하는 방식,
          <br />
          그리고 <span className={styles.accent}>그 구조를 만들어가는 과정</span>.
          <small className={styles.sub}>My Context · My Rules · My Output</small>
        </h4>
        <p className={styles.lede}>
          디자인 시스템과 코딩 컨벤션은 이제 사람만의 자산이 아니라{" "}
          <strong>AI가 함께 읽고 따라야 하는 컨텍스트</strong>입니다.
        </p>
        <p className={styles.lede}>
          저는 제가 사용하는 디자인 시스템을 <strong>MCP</strong>(Model Context Protocol)로
          연결하고, 제 작업 규칙을 <strong>.md · Skills</strong> 형태로
          정리해서 AI가 &ldquo;처음 쓰는 도구&rdquo;가 아니라{" "}
          <em>&ldquo;내 작업 방식을 아는 파트너&rdquo;</em>처럼 동작하도록
          개인적으로 구성했습니다.
        </p>
        <p className={styles.lede}>
          목표는 단순합니다 — <strong>적은 컨텍스트로, 항상 내 코드처럼.</strong>
        </p>
      </div>

      <div className={styles.pipeline}>
        {NODES.map((node) => (
          <div key={node.stage} className={styles.node}>
            <span className={styles.stage}>{node.stage}</span>
            <h5 className={styles.nodeTitle}>{node.title}</h5>
            <div className={styles.nodeSub}>{node.sub}</div>
            <ul className={styles.nodeList}>
              {node.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.pillars}>
        {PILLARS.map((p) => (
          <article key={p.num} className={`${styles.pillar} ${p.full ? styles.pillarFull : ""}`}>
            <div className={styles.ph}>
              <span className={styles.pillarNum}>{p.num}</span>
              <h5 className={styles.pillarTitle}>
                {p.kr}
                <span className={styles.pillarEn}>{p.en}</span>
              </h5>
            </div>
            <ul className={styles.pillarList}>
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
