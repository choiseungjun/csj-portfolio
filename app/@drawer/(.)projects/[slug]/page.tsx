import { notFound } from "next/navigation";
import { ProjectDrawer } from "@/components/Drawer/ProjectDrawer";
import { getProject, PROJECTS } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export default function InterceptedProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <ProjectDrawer data={project} />;
}
