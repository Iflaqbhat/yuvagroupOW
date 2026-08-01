import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Completed Projects — Yuva Group',
  description:
    'Completed and ready-to-move Yuva Group residential projects across south Bengaluru. Walk into homes available for immediate possession.',
};

export default function CompletedProjectsPage() {
  const completed = projects.filter((p) => p.status !== 'ongoing');
  return (
    <>
      <PageHero
        eyebrow="Ready & delivered"
        title="Completed projects."
        description="Completed and ready-to-move Yuva Group developments — occupied, settled, and available for immediate possession or resale enquiry."
      />
      <section className="section-shell py-16 md:py-24">
        <ProjectsExplorer projects={completed} />
      </section>
    </>
  );
}
