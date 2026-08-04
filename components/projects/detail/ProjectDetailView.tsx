// File purpose: Assembles the project detail page from small focused sections.
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import { ProjectEnquiryStrip } from '@/components/projects/ProjectEnquiryStrip';
import { ProjectAmenitiesSection } from '@/components/projects/detail/ProjectAmenitiesSection';
import { ProjectDetailHero } from '@/components/projects/detail/ProjectDetailHero';
import { ProjectDetailNav } from '@/components/projects/detail/ProjectDetailNav';
import { ProjectFaqSection } from '@/components/projects/detail/ProjectFaqSection';
import { ProjectFloorPlansSection } from '@/components/projects/detail/ProjectFloorPlansSection';
import { ProjectGallerySection } from '@/components/projects/detail/ProjectGallerySection';
import { ProjectLocationSection } from '@/components/projects/detail/ProjectLocationSection';
import { ProjectOverviewSection } from '@/components/projects/detail/ProjectOverviewSection';
import { ProjectSpecificationsSection } from '@/components/projects/detail/ProjectSpecificationsSection';
import { ProjectUnitMixSection } from '@/components/projects/detail/ProjectUnitMixSection';
import { ProjectVisitSection } from '@/components/projects/detail/ProjectVisitSection';
import { RelatedProjectsSection } from '@/components/projects/detail/RelatedProjectsSection';
import {
  formatProjectCategory,
  getLocationCopy,
  getProjectHeroFacts,
  getProjectKeyFacts,
  getProjectMapSrc,
  getProjectNavSections,
  getUnitMixStats,
  getVisitCopy,
  projectStatusLabel,
} from '@/components/projects/detail/project-detail-helpers';

export function ProjectDetailView({ project }: { project: Project }) {
  const floorPlanRows = project.floorPlanRows ?? [];
  const hasUnitMix = floorPlanRows.length > 0;
  const hasLocation = Boolean(project.coordinates || project.connectivity.length);
  const hasGallery = project.gallery.length > 0;
  const hasAmenities = project.amenities.length > 0;
  const hasSpecifications = project.specifications.length > 0;
  const hasFloorPlans = project.floorPlans.length > 0;
  const hasFaqs = project.faqs.length > 0;

  const heroFacts = getProjectHeroFacts(project);
  const keyFacts = getProjectKeyFacts(project);
  const unitMixStats = getUnitMixStats(floorPlanRows);
  const mapSrc = getProjectMapSrc(project);
  const locationCopy = getLocationCopy(project, mapSrc);
  const visitCopy = getVisitCopy(project);
  const navSections = getProjectNavSections(project);
  const related = projects.filter((candidate) => candidate.slug !== project.slug).slice(0, 3);

  return (
    <>
      <ProjectDetailHero
        project={project}
        status={projectStatusLabel[project.status]}
        category={project.officialCategory ?? formatProjectCategory(project.category)}
        heroFacts={heroFacts}
        hasGallery={hasGallery}
      />
      <ProjectDetailNav sections={navSections} />
      <ProjectOverviewSection project={project} keyFacts={keyFacts} />
      {hasUnitMix && <ProjectUnitMixSection floorPlanRows={floorPlanRows} stats={unitMixStats} />}
      {hasLocation && (
        <ProjectLocationSection
          project={project}
          mapSrc={mapSrc}
          title={locationCopy.title}
          description={locationCopy.description}
        />
      )}
      {hasGallery && <ProjectGallerySection project={project} />}
      {hasAmenities && <ProjectAmenitiesSection project={project} />}
      {hasSpecifications && <ProjectSpecificationsSection project={project} />}
      <ProjectEnquiryStrip project={project} />
      {hasFloorPlans && <ProjectFloorPlansSection project={project} />}
      {hasFaqs && <ProjectFaqSection project={project} />}
      <ProjectVisitSection project={project} title={visitCopy.title} description={visitCopy.description} />
      <RelatedProjectsSection projects={related} />
    </>
  );
}
