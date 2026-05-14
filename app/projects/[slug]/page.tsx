import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/Drawer/ProjectDetail";
import { getProject, PROJECTS } from "@/lib/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return { title: "Project — Seungjun Choi" };
  return {
    title: `${project.title.kr} · ${project.title.en} — Seungjun Choi`,
    description: project.lede,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return (
    <div className={styles.wrap}>
      <Link href="/#projects" className={styles.back}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <span>Back to projects</span>
      </Link>
      <span className={styles.pnTag}>PRJ / {project.id}</span>
      <div className={styles.body}>
        <ProjectDetail data={project} />
      </div>
    </div>
  );
}
