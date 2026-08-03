// File purpose: Shared TypeScript types (Project, Testimonial, NavItem, and more).
export type ProjectStatus = 'ongoing' | 'ready-to-move' | 'completed';
export type ProjectCategory = 'apartments' | 'villas' | 'plotted' | 'commercial';

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface ProjectAmenity {
  name: string;
  icon?: string;
}

export interface ProjectSpecification {
  category: string;
  items: { label: string; value: string }[];
}

export interface FloorPlan {
  name: string;
  type: string;
  area: string;
  image: string;
  alt: string;
}

export interface FloorPlanRow {
  flat: string;
  area: string;
  facing: string;
  bhk: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectFaq {
  question: string;
  answer: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  area: string;
  status: ProjectStatus;
  category: ProjectCategory;
  officialCategory?: string;
  sourceUrl?: string;
  sourceNotes?: string[];
  description: string;
  longDescription: string;
  heroImage: string;
  heroAlt: string;
  gallery: GalleryImage[];
  highlights: ProjectHighlight[];
  amenities: string[];
  specifications: ProjectSpecification[];
  floorPlans: FloorPlan[];
  floorPlanRows?: FloorPlanRow[];
  startingPrice?: string;
  possession?: string;
  rera?: string;
  units?: string;
  unitCount?: string;
  bedrooms?: string;
  connectivity: { label: string; distance: string }[];
  faqs: ProjectFaq[];
  coordinates?: { lat: number; lng: number };
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  // Long-form bio is only written for leadership; the team grid shows name + role.
  bio?: string;
  image: string;
}

export interface Testimonial {
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: number;
  // Photo of the reviewer, as used on the original yuvagroup.in testimonials page.
  avatar?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
