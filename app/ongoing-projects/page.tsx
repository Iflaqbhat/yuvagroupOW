// File purpose: Ongoing projects page: lists communities still under construction.
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#project-list"
            className="smart-action inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.2)]"
          >
            View ongoing projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-accent/25 bg-background px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            All projects
          </Link>
        </div>
      </PageHero>
      <section id="project-list" className="section-shell py-16 md:py-24">
        <ProjectsExplorer projects={ongoing} activeStatus="ongoing" statusNavigation />
      </section>
    </>
  );
}
