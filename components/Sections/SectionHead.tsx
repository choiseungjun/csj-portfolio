import styles from "./SectionHead.module.css";

type Props = {
  anchor: string;
  kr: string;
  en: string;
  desc: string;
};

export function SectionHead({ anchor, kr, en, desc }: Props) {
  return (
    <div className={styles.head}>
      <div className={styles.anchor}># {anchor}</div>
      <h2 className={styles.h2}>
        {kr}
        <span className={styles.en}>{en}</span>
      </h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}
