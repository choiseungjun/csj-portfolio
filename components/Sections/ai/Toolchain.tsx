import styles from "./Toolchain.module.css";

export function Toolchain() {
  return (
    <div className={styles.playbook}>
      <div className={styles.meta}>
        <div className={styles.kicker}>Personal Playbook · 개인 셋업</div>
        <h4>AI 개발 환경을 하나의 체계로 구성해가고 있습니다.</h4>
        <p>
          팀 컨벤션·도메인 컨텍스트·재사용 가능한 스킬을 하나의 구조로 묶어,{" "}
          <strong>Cursor · Claude Code · Codex</strong>가 어디서든 같은
          컨텍스트로 동작하도록 설계하고 있습니다.
        </p>
        <div className={styles.tools}>
          <span>Cursor</span>
          <span>Claude Code</span>
          <span>Codex</span>
          <span>Skills</span>
          <span>dotfiles</span>
        </div>
      </div>

      <div className={styles.term}>
        <div className={styles.termHead}>
          <span className={`${styles.dot} ${styles.r}`} />
          <span className={`${styles.dot} ${styles.y}`} />
          <span className={`${styles.dot} ${styles.g}`} />
          <span className={styles.title}>~ / ai-playbook · seungjun</span>
        </div>
        <pre className={styles.termBody}>
<span className={styles.cmt}># 1 · CLAUDE.md — 프로젝트 컨텍스트 & 역할 정의</span>
{`\n`}<span className={styles.file}>CLAUDE.md</span>               <span className={styles.cmt}>// stack · 폴더구조 · 에이전트 역할</span>
{`\n\n`}<span className={styles.cmt}># 2 · ~/.claude/skills/ — 재사용 작업 규칙</span>
{`\n`}<span className={styles.prompt}>$</span> <span className={styles.cmd}>ls</span> <span className={styles.str}>~/.claude/skills/</span>
{`\n`}  pm.md    design.md    dev.md    code-review.md
{`\n\n`}<span className={styles.cmt}># 3 · 바이브코딩 — 역할별 슬래시 커맨드 실행</span>
{`\n`}<span className={styles.prompt}>/</span><span className={styles.cmd}>pm</span>                      <span className={styles.cmt}>// 요구사항 · 우선순위 정리</span>
{`\n`}<span className={styles.prompt}>/</span><span className={styles.cmd}>design</span>                  <span className={styles.cmt}>// Figma 플러그인 → 컴포넌트 스펙</span>
{`\n`}<span className={styles.prompt}>/</span><span className={styles.cmd}>dev</span>                     <span className={styles.cmt}>// 컴포넌트 생성 · 구현</span>
{`\n`}<span className={styles.prompt}>/</span><span className={styles.cmd}>code-review</span>             <span className={styles.cmt}>// 컨벤션 · 접근성 체크</span>
{`\n\n`}<span className={styles.cmt}># 결과물 — 프로젝트마다 skills 규칙을 조합해 적용</span>
{`\n`}<span className={styles.file}>~/.claude/skills/</span>
{`\n`}  <span className={styles.tree}>├─</span> <span className={styles.file}>pm.md</span>           <span className={styles.cmt}>// 요구사항 · 기능 우선순위</span>
{`\n`}  <span className={styles.tree}>├─</span> <span className={styles.file}>design.md</span>       <span className={styles.cmt}>// Figma 스펙 추출 · 컴포넌트 정의</span>
{`\n`}  <span className={styles.tree}>├─</span> <span className={styles.file}>dev.md</span>          <span className={styles.cmt}>// 컴포넌트 생성 · 네이밍 규칙</span>
{`\n`}  <span className={styles.tree}>└─</span> <span className={styles.file}>code-review.md</span>  <span className={styles.cmt}>// 컨벤션 · 접근성 기준</span>
        </pre>
      </div>
    </div>
  );
}
