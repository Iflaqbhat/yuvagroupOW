// File purpose: Project detail route: metadata lookup plus the composed detail view.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/data/projects';
import { ProjectDetailView } from '@/components/projects/detail/ProjectDetailView';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.name} — ${project.location}`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Yuva Group`,
      description: project.description,
      images: [{ url: project.heroImage, alt: project.heroAlt }],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}
