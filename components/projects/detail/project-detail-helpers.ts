// File purpose: Shared computed labels and display data for project detail pages.
import type { FloorPlanRow, Project } from '@/types';

export type DetailFact = { label: string; value: string };
export type DetailNavSection = { id: string; label: string };

export const projectStatusLabel = {
  ongoing: 'Under Construction',
  'ready-to-move': 'Ready to Move',
  completed: 'Completed',
} as const satisfies Record<Project['status'], string>;

export const formatProjectCategory = (value: string) => value.replace(/-/g, ' ');

export function getProjectKeyFacts(project: Project): DetailFact[] {
  return [
    { label: 'Configuration', value: project.bedrooms },
    { label: 'Official category', value: project.officialCategory },
    { label: 'Unit count', value: project.unitCount },
    { label: 'Units', value: project.units },
    { label: 'Status', value: projectStatusLabel[project.status] },
    { label: 'Possession', value: project.possession },
    { label: 'Starting price', value: project.startingPrice },
    { label: 'RERA', value: project.rera },
  ].filter((fact): fact is DetailFact => Boolean(fact.value));
}

export function getProjectHeroFacts(project: Project): DetailFact[] {
  return [
    { label: 'Homes', value: project.bedrooms },
    { label: 'Status', value: projectStatusLabel[project.status] },
    { label: 'Price', value: project.startingPrice },
  ].filter((fact): fact is DetailFact => Boolean(fact.value));
}

export function getUnitMixStats(floorPlanRows: FloorPlanRow[]): DetailFact[] {
  return [
    { label: 'Published rows', value: `${floorPlanRows.length}` },
    { label: 'Configurations', value: Array.from(new Set(floorPlanRows.map((row) => row.bhk))).join(', ') },
    { label: 'Facings', value: Array.from(new Set(floorPlanRows.map((row) => row.facing))).join(', ') },
  ].filter((fact): fact is DetailFact => Boolean(fact.value));
}

export function getProjectMapSrc(project: Project) {
  if (!project.coordinates) return undefined;

  const { lat, lng } = project.coordinates;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.02}%2C${lat - 0.02}%2C${lng + 0.02}%2C${lat + 0.02}&layer=mapnik&marker=${lat}%2C${lng}`;
}

export function getLocationCopy(project: Project, mapSrc?: string) {
  if (!mapSrc) {
    return {
      title: 'Official location reference.',
      description:
        'No public map pin is available for this project, so the redesign keeps the location limited to official portfolio and testimonial references.',
    };
  }

  if (!project.connectivity.length) {
    return {
      title: 'Location reference.',
      description: 'The official page publishes the project map pin, but not a detailed nearby-distance list.',
    };
  }

  return {
    title: 'Connected to what matters.',
    description:
      'Nearby landmarks and travel-time references match the official project page wherever those details are published.',
  };
}

export function getVisitCopy(project: Project) {
  if (project.status === 'completed') {
    return {
      title: `Ask about ${project.name}.`,
      description:
        `${project.name} is a completed project, so current resale, rental or availability options should be confirmed directly with the sales team.`,
    };
  }

  return {
    title: `Walk through ${project.name}.`,
    description:
      `Schedule a guided walkthrough of ${project.name} at ${project.location}. Our sales team will confirm your visit within one working day.`,
  };
}

export function getProjectNavSections(project: Project): DetailNavSection[] {
  const hasUnitMix = Boolean(project.floorPlanRows?.length);
  const hasLocation = Boolean(project.coordinates || project.connectivity.length);
  const hasGallery = project.gallery.length > 0;
  const hasAmenities = project.amenities.length > 0;
  const hasSpecifications = project.specifications.length > 0;
  const hasFloorPlans = project.floorPlans.length > 0;
  const hasFaqs = project.faqs.length > 0;

  return [
    { id: 'overview', label: 'Overview' },
    ...(hasUnitMix ? [{ id: 'unit-mix', label: 'Unit Mix' }] : []),
    ...(hasLocation ? [{ id: 'location', label: 'Location' }] : []),
    ...(hasGallery ? [{ id: 'gallery', label: 'Gallery' }] : []),
    ...(hasAmenities ? [{ id: 'amenities', label: 'Amenities' }] : []),
    ...(hasSpecifications ? [{ id: 'specifications', label: 'Specifications' }] : []),
    ...(hasFloorPlans ? [{ id: 'floor-plans', label: 'Floor Plans' }] : []),
    ...(hasFaqs ? [{ id: 'faqs', label: 'FAQs' }] : []),
    { id: 'visit', label: 'Visit' },
  ];
}
