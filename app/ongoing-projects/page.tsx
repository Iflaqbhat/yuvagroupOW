import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { getProjectsByStatus } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Ongoing Projects — Yuva Group',
  description:
    'Ongoing Yuva Group residential developments under construction across south Bengaluru. Book early and follow the build from foundation to handover.',
};

export default function OngoingProjectsPage() {
  const ongoing = getProjectsByStatus('ongoing');
  return (
    <>
      <PageHero
        eyebrow="Under construction"
        title="Ongoing projects."
        description="Yuva Group developments currently taking shape. Book early to follow the build from foundation to handover."
      />
      <section className="section-shell py-16 md:py-24">
        <ProjectsExplorer projects={ongoing} />
      </section>
    </>
  );
}
