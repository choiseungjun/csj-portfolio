import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.mark} aria-hidden="true">
        <span className={styles.slash}>/</span>csj
      </div>
      <div className={styles.logoText}>
        <div className={styles.kr}>최승준</div>
        <div className={styles.en}>CHOI SEUNGJUN</div>
      </div>
    </div>
  );
}
