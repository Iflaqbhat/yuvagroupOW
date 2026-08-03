// File purpose: Completed projects page: lists delivered communities.
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { getProjectsByStatus } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Completed Projects — Yuva Group',
  description:
    'Completed Yuva Group residential communities across south Bengaluru — delivered projects that show the company’s track record.',
};

export default function CompletedProjectsPage() {
  const completed = getProjectsByStatus('completed');
  return (
    <>
      <PageHero
        eyebrow="Delivered communities"
        title="Completed projects."
        description="Delivered Yuva Group communities — occupied, settled, and useful as proof of the build quality behind every new launch."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#project-list"
            className="smart-gradient inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-[0_12px_30px_hsl(var(--accent)/0.2)] transition-transform hover:-translate-y-0.5"
          >
            View completed projects
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
        <ProjectsExplorer projects={completed} activeStatus="completed" statusNavigation />
      </section>
    </>
  );
}
