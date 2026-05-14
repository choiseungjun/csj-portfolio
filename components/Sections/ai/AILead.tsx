import styles from "./AILead.module.css";

export function AILead() {
  return (
    <div className={styles.lead}>
      <div className={styles.tag}>Why this matters · 2026</div>
      <p>
        AI가 코드를 쓰는 시대일수록,{" "}
        <em>&ldquo;어떻게 일관성 있게 받아들이고 검증할 것인가&rdquo;</em>가 더
        중요해진다고 생각합니다.
        <br />
        9년간 쌓아온{" "}
        <strong>디자인 시스템·코딩 컨벤션·코드 리뷰 문화</strong>가 변화의
        가드레일이 되도록 — 저는 이렇게 준비하고 있습니다.
      </p>
    </div>
  );
}
