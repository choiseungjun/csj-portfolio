import type { Project } from "@/lib/projects";
import styles from "./ProjectDetail.module.css";

export function ProjectDetail({ data }: { data: Project }) {
  return (
    <article>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {data.title.kr}
          <span>{data.title.en}</span>
        </h1>
        <p className={styles.lede}>{data.lede}</p>
      </header>

      <dl className={styles.meta}>
        <div>
          <dt>Period</dt>
          <dd>{data.meta.period}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{data.meta.role}</dd>
        </div>
        <div>
          <dt>Team</dt>
          <dd>{data.meta.team}</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>{data.meta.stack}</dd>
        </div>
      </dl>

      <section className={styles.section}>
        <h3>Problem · 문제</h3>
        <p>{data.problem}</p>
      </section>

      <section className={styles.section}>
        <h3>Approach · 접근</h3>
        <ul>
          {data.approach.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      <section className={`${styles.section} ${styles.impact}`}>
        <h3>Impact · 결과</h3>
        <div className={styles.impactGrid}>
          {data.impact.map((it, i) => (
            <div key={i} className={styles.impactItem}>
              <div className={styles.num}>
                {it.value}
                {it.suffix ? (
                  <span
                    className={
                      it.trend === "down" ? styles.down : styles.arrow
                    }
                  >
                    {it.suffix}
                  </span>
                ) : null}
              </div>
              <div className={styles.label}>{it.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h3>Reflections · 배운 것</h3>
        <p>{data.reflections}</p>
      </section>

      <div className={styles.tags}>
        {data.detailTags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
}
