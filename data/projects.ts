import type { Project, Testimonial, TeamMember } from '@/types';

export const projects: Project[] = [
  {
    slug: 'yuva-sunrise',
    name: 'Yuva Sunrise',
    tagline: 'Light-filled homes at the gateway to Electronic City',
    location: 'Electronic City, Bengaluru',
    area: 'Electronic City',
    status: 'ready-to-move',
    category: 'apartments',
    description:
      'Spacious 2 & 3 BHK apartments designed for natural light and cross ventilation, minutes from Bengaluru’s tech corridor.',
    longDescription:
      'Yuva Sunrise is a ready-to-move residential address at the heart of Electronic City, built for professionals who want a short commute and a calm home to return to. Each tower is oriented to capture morning light, with deep balconies, large windows, and thoughtfully planned floor plates that keep the living spaces airy through the day. Landscaped courtyards, a central clubhouse, and walking paths make the community feel complete rather than under construction.',
    heroImage:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Yuva Sunrise apartment towers with landscaped entrance at Electronic City',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/210412/pexels-photo-210412.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Sunrise tower facade at dusk',
      },
      {
        src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Sunrise living room interior with natural light',
      },
      {
        src: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Sunrise clubhouse and swimming pool',
      },
      {
        src: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Sunrise landscaped courtyard',
      },
    ],
    highlights: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Status', value: 'Ready to Move' },
      { label: 'Location', value: 'Electronic City' },
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gymnasium',
      'Landscaped gardens',
      'Children’s play area',
      'Indoor games room',
      'Multipurpose hall',
      '24/7 security',
    ],
    specifications: [
      {
        category: 'Structure',
        items: [
          { label: 'Frame', value: 'RCC framed structure' },
          { label: 'Blocks', value: 'Solid concrete block masonry' },
        ],
      },
      {
        category: 'Finishes',
        items: [
          { label: 'Living walls', value: 'Premium emulsion paint' },
          { label: 'Flooring', value: 'Vitrified tiles' },
        ],
      },
      {
        category: 'Fittings',
        items: [
          { label: 'Doors', value: 'Engineered hardwood frame' },
          { label: 'Windows', value: 'UPVC with mosquito mesh' },
        ],
      },
    ],
    floorPlans: [
      {
        name: '2 BHK — Sunrise',
        type: '2 BHK',
        area: '1,150 sq.ft.',
        image:
          'https://images.pexels.com/photos/210412/pexels-photo-210412.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 2 BHK unit at Yuva Sunrise',
      },
      {
        name: '3 BHK — Sunrise',
        type: '3 BHK',
        area: '1,580 sq.ft.',
        image:
          'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 3 BHK unit at Yuva Sunrise',
      },
    ],
    startingPrice: '[VERIFY PROJECT PRICE]',
    possession: 'Ready to Move',
    rera: '[ADD RERA NUMBER]',
    units: '2 & 3 BHK apartments',
    bedrooms: '2, 3 BHK',
    connectivity: [
      { label: 'Electronic City Phase 1', distance: '5 min' },
      { label: 'Bommasandra Metro', distance: '12 min' },
      { label: 'Hosur Road', distance: '4 min' },
    ],
    faqs: [
      {
        question: 'Is Yuva Sunrise ready to move in?',
        answer:
          'Yes. Yuva Sunrise is a completed residential project with units available for immediate occupancy.',
      },
      {
        question: 'What configurations are available?',
        answer: 'The project offers 2 and 3 BHK apartments. [CONFIRM CURRENT AVAILABILITY]',
      },
    ],
    coordinates: { lat: 12.8456, lng: 77.6603 },
    featured: true,
  },
  {
    slug: 'yuva-utsav',
    name: 'Yuva Utsav',
    tagline: 'Community living near Attibele',
    location: 'Attibele, Bengaluru',
    area: 'Attibele',
    status: 'ongoing',
    category: 'apartments',
    description:
      'A growing residential community of 2 & 3 BHK homes close to Attibele and the Hosur Road corridor.',
    longDescription:
      'Yuva Utsav is an ongoing development designed around the idea of a complete neighbourhood rather than a standalone tower. The master plan clusters homes around shared courtyards, a central green, and a clubhouse, so residents meet naturally rather than passing anonymously. Construction is progressing in phases, with the first towers approaching completion and the community spaces already taking shape.',
    heroImage:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Yuva Utsav residential community under construction at Attibele',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Utsav central courtyard',
      },
      {
        src: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Utsav apartment interior',
      },
      {
        src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Utsav tower exterior',
      },
    ],
    highlights: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Location', value: 'Attibele' },
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gymnasium',
      'Landscaped gardens',
      'Jogging track',
      'Children’s play area',
      'Amphitheatre',
      '24/7 security',
    ],
    specifications: [
      {
        category: 'Structure',
        items: [
          { label: 'Frame', value: 'RCC framed structure' },
          { label: 'Blocks', value: 'Solid concrete block masonry' },
        ],
      },
      {
        category: 'Finishes',
        items: [
          { label: 'Living walls', value: 'Premium emulsion paint' },
          { label: 'Flooring', value: 'Vitrified tiles' },
        ],
      },
    ],
    floorPlans: [
      {
        name: '2 BHK — Utsav',
        type: '2 BHK',
        area: '1,080 sq.ft.',
        image:
          'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 2 BHK unit at Yuva Utsav',
      },
    ],
    startingPrice: '[VERIFY PROJECT PRICE]',
    possession: '[CONFIRM POSSESSION DATE]',
    rera: '[ADD RERA NUMBER]',
    units: '2 & 3 BHK apartments',
    bedrooms: '2, 3 BHK',
    connectivity: [
      { label: 'Attibele Junction', distance: '6 min' },
      { label: 'Hosur Road', distance: '5 min' },
      { label: 'Electronic City', distance: '20 min' },
    ],
    faqs: [
      {
        question: 'When will Yuva Utsav be ready?',
        answer:
          'Yuva Utsav is currently under construction. [CONFIRM POSSESSION DATE] with the sales team for the latest handover timeline.',
      },
    ],
    coordinates: { lat: 12.7804, lng: 77.7151 },
    featured: true,
  },
  {
    slug: 'yuva-sunshine',
    name: 'Yuva Sunshine',
    tagline: 'Bright, affordable homes on Chandapura Road',
    location: 'Chandapura, Bengaluru',
    area: 'Chandapura',
    status: 'ready-to-move',
    category: 'apartments',
    description:
      'Well-planned 2 & 3 BHK apartments that balance affordability with the quality expected from Yuva Group.',
    longDescription:
      'Yuva Sunshine brings the build quality of Yuva Group’s premium developments to a more accessible price point on Chandapura Road. The towers are compact and efficiently planned, with units that feel larger than their square footage thanks to open kitchens, corner windows, and continuous balconies. The community shares a single, well-equipped clubhouse and a generous central green.',
    heroImage:
      'https://images.pexels.com/photos/758744/pexels-photo-758744.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Yuva Sunshine apartment building exterior at Chandapura',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/758744/pexels-photo-758744.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Sunshine entrance facade',
      },
      {
        src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Sunshine apartment interior',
      },
    ],
    highlights: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Status', value: 'Ready to Move' },
      { label: 'Location', value: 'Chandapura' },
    ],
    amenities: [
      'Clubhouse',
      'Gymnasium',
      'Landscaped gardens',
      'Children’s play area',
      'Indoor games',
      '24/7 security',
    ],
    specifications: [
      {
        category: 'Structure',
        items: [{ label: 'Frame', value: 'RCC framed structure' }],
      },
      {
        category: 'Finishes',
        items: [{ label: 'Flooring', value: 'Vitrified tiles' }],
      },
    ],
    floorPlans: [
      {
        name: '2 BHK — Sunshine',
        type: '2 BHK',
        area: '1,050 sq.ft.',
        image:
          'https://images.pexels.com/photos/758744/pexels-photo-758744.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 2 BHK unit at Yuva Sunshine',
      },
    ],
    startingPrice: '[VERIFY PROJECT PRICE]',
    possession: 'Ready to Move',
    rera: '[ADD RERA NUMBER]',
    units: '2 & 3 BHK apartments',
    bedrooms: '2, 3 BHK',
    connectivity: [
      { label: 'Chandapura Circle', distance: '4 min' },
      { label: 'Anekal Road', distance: '10 min' },
      { label: 'Electronic City', distance: '15 min' },
    ],
    faqs: [
      {
        question: 'Is Yuva Sunshine affordable housing?',
        answer:
          'Yuva Sunshine is positioned as an affordable premium project — it offers Yuva Group’s construction quality at a more accessible price point.',
      },
    ],
    coordinates: { lat: 12.8032, lng: 77.6423 },
    featured: true,
  },
  {
    slug: 'yuva-residency',
    name: 'Yuva Residency',
    tagline: 'Quiet residential living off Anekal Road',
    location: 'Anekal Road, Bengaluru',
    area: 'Anekal Road',
    status: 'completed',
    category: 'apartments',
    description:
      'A completed residential project that established Yuva Group’s reputation for dependable delivery.',
    longDescription:
      'Yuva Residency is a completed development that helped establish Yuva Group’s reputation for dependable, on-time delivery. The project is fully occupied, with mature landscaping, settled communities, and a management structure run by the residents. It remains a reference point for the build quality and planning that newer Yuva projects are measured against.',
    heroImage:
      'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Yuva Residency completed apartment building on Anekal Road',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Residency completed facade',
      },
      {
        src: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Residency mature landscaping',
      },
    ],
    highlights: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Status', value: 'Completed' },
      { label: 'Location', value: 'Anekal Road' },
    ],
    amenities: [
      'Landscaped gardens',
      'Children’s play area',
      'Indoor games',
      '24/7 security',
      'Covered parking',
    ],
    specifications: [
      {
        category: 'Structure',
        items: [{ label: 'Frame', value: 'RCC framed structure' }],
      },
    ],
    floorPlans: [
      {
        name: '2 BHK — Residency',
        type: '2 BHK',
        area: '1,020 sq.ft.',
        image:
          'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 2 BHK unit at Yuva Residency',
      },
    ],
    startingPrice: '[VERIFY PROJECT PRICE]',
    possession: 'Completed',
    rera: '[ADD RERA NUMBER]',
    units: '2 & 3 BHK apartments',
    bedrooms: '2, 3 BHK',
    connectivity: [
      { label: 'Anekal Town', distance: '8 min' },
      { label: 'Chandapura', distance: '12 min' },
    ],
    faqs: [
      {
        question: 'Are units available at Yuva Residency?',
        answer:
          'Yuva Residency is a completed and occupied project. Resale availability varies — contact the sales team for current options.',
      },
    ],
    coordinates: { lat: 12.7189, lng: 77.6967 },
    featured: false,
  },
  {
    slug: 'yuva-heritage',
    name: 'Yuva Heritage',
    tagline: 'Premium villas near Hosur Road',
    location: 'Hosur Road, Bengaluru',
    area: 'Hosur Road',
    status: 'ongoing',
    category: 'villas',
    description:
      'A villa development built for buyers who want land, privacy, and architectural character close to the city.',
    longDescription:
      'Yuva Heritage is a villa community designed for buyers who want the privacy, land ownership, and architectural character of an independent home without leaving the city’s southern corridor. The villas are arranged along a tree-lined internal street, each with a private garden, covered parking, and a roof terrace. The master plan keeps cars to the perimeter so the interior stays quiet and walkable.',
    heroImage:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Yuva Heritage premium villas near Hosur Road',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Heritage villa streetscape',
      },
      {
        src: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Heritage villa interior',
      },
    ],
    highlights: [
      { label: 'Configuration', value: '3 & 4 BHK Villas' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Location', value: 'Hosur Road' },
    ],
    amenities: [
      'Private gardens',
      'Clubhouse',
      'Swimming pool',
      'Tree-lined internal streets',
      'Jogging track',
      'Children’s play area',
      '24/7 security',
    ],
    specifications: [
      {
        category: 'Structure',
        items: [{ label: 'Frame', value: 'RCC framed structure' }],
      },
      {
        category: 'Finishes',
        items: [
          { label: 'Flooring', value: 'Marble and vitrified tiles' },
          { label: 'External', value: 'Stone and render facade' },
        ],
      },
    ],
    floorPlans: [
      {
        name: '3 BHK Villa — Heritage',
        type: '3 BHK Villa',
        area: '2,100 sq.ft.',
        image:
          'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 3 BHK villa at Yuva Heritage',
      },
    ],
    startingPrice: '[VERIFY PROJECT PRICE]',
    possession: '[CONFIRM POSSESSION DATE]',
    rera: '[ADD RERA NUMBER]',
    units: '3 & 4 BHK villas',
    bedrooms: '3, 4 BHK',
    connectivity: [
      { label: 'Hosur Road', distance: '3 min' },
      { label: 'Electronic City', distance: '18 min' },
      { label: 'Attibele', distance: '10 min' },
    ],
    faqs: [
      {
        question: 'Does Yuva Heritage include land ownership?',
        answer:
          'Yes. Yuva Heritage is a villa development where each unit includes owned land. [CONFIRM LAND AREA PER UNIT] with the sales team.',
      },
    ],
    coordinates: { lat: 12.7654, lng: 77.6985 },
    featured: false,
  },
  {
    slug: 'yuva-lake-view',
    name: 'Yuva Lake View',
    tagline: 'Apartments oriented around a water outlook',
    location: 'Anekal Road, Bengaluru',
    area: 'Anekal Road',
    status: 'ongoing',
    category: 'apartments',
    description:
      'An ongoing apartment project planned around sightlines to nearby water, with wide green buffers between towers.',
    longDescription:
      'Yuva Lake View is an ongoing apartment project planned around sightlines to nearby water. Towers are set back from each other with wide green buffers, so most units look out onto landscape rather than a neighbouring wall. The master plan prioritises pedestrian flow, with vehicles kept to the perimeter and a continuous walking loop connecting the clubhouse, gardens, and water-facing promenade.',
    heroImage:
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Yuva Lake View apartment towers with water outlook',
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Lake View tower and landscape',
      },
      {
        src: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Yuva Lake View landscaped promenade',
      },
    ],
    highlights: [
      { label: 'Configuration', value: '2 & 3 BHK' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Location', value: 'Anekal Road' },
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Water-facing promenade',
      'Gymnasium',
      'Landscaped gardens',
      'Jogging track',
      '24/7 security',
    ],
    specifications: [
      {
        category: 'Structure',
        items: [{ label: 'Frame', value: 'RCC framed structure' }],
      },
    ],
    floorPlans: [
      {
        name: '3 BHK — Lake View',
        type: '3 BHK',
        area: '1,620 sq.ft.',
        image:
          'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 3 BHK unit at Yuva Lake View',
      },
    ],
    startingPrice: '[VERIFY PROJECT PRICE]',
    possession: '[CONFIRM POSSESSION DATE]',
    rera: '[ADD RERA NUMBER]',
    units: '2 & 3 BHK apartments',
    bedrooms: '2, 3 BHK',
    connectivity: [
      { label: 'Anekal Road', distance: '5 min' },
      { label: 'Chandapura', distance: '10 min' },
      { label: 'Electronic City', distance: '22 min' },
    ],
    faqs: [
      {
        question: 'Do all units have a lake view?',
        answer:
          'The master plan is oriented around water sightlines, though not every unit faces the water directly. The sales team can confirm orientation for specific units.',
      },
    ],
    coordinates: { lat: 12.7250, lng: 77.7120 },
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Resident Family',
    location: 'Electronic City',
    project: 'Yuva Sunrise',
    quote:
      'We moved into Yuva Sunrise for the commute and stayed for how the building actually feels. The light in the living room is real, not a brochure promise.',
    rating: 5,
  },
  {
    name: 'Homeowner',
    location: 'Chandapura',
    project: 'Yuva Sunshine',
    quote:
      'We compared four builders in south Bengaluru before choosing Yuva. The finishing details and the way the site team handled handover made the difference.',
    rating: 5,
  },
  {
    name: 'Villa Owner',
    location: 'Hosur Road',
    project: 'Yuva Heritage',
    quote:
      'We wanted land and privacy without leaving the city. Yuva Heritage gave us both, and the tree-lined street makes it feel like a neighbourhood, not a compound.',
    rating: 5,
  },
];

export const team: TeamMember[] = [
  {
    name: '[CEO NAME]',
    role: 'Chief Executive Officer',
    bio: '[ADD VERIFIED LEADERSHIP BIOGRAPHY FROM YUVAGROUP.IN]',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: '[MANAGING DIRECTOR]',
    role: 'Managing Director',
    bio: '[ADD VERIFIED LEADERSHIP BIOGRAPHY FROM YUVAGROUP.IN]',
    image:
      'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const companyStats = [
  { label: 'Projects Delivered', value: '6', suffix: '' },
  // Years in Bengaluru: 15 — yuvagroup.in homepage counter ('Years of Experiences', data-endnumber="15")
  { label: 'Years in Bengaluru', value: '15', suffix: '+' },
  // Success Rate: 100% — yuvagroup.in homepage counter ('Success Rate', data-endnumber="100")
  { label: 'Success Rate', value: '100', suffix: '%' },
  { label: 'Ongoing Developments', value: '3', suffix: '' },
];

export const allAmenities = [
  { name: 'Clubhouse', icon: 'Building2' },
  { name: 'Swimming Pool', icon: 'Waves' },
  { name: 'Gymnasium', icon: 'Dumbbell' },
  { name: 'Landscaped Gardens', icon: 'Trees' },
  { name: 'Children’s Play Area', icon: 'Baby' },
  { name: 'Jogging Track', icon: 'PersonStanding' },
  { name: 'Indoor Games', icon: 'Gamepad2' },
  { name: 'Multipurpose Hall', icon: 'PartyPopper' },
  { name: 'Amphitheatre', icon: 'Music' },
  { name: '24/7 Security', icon: 'ShieldCheck' },
  { name: 'Covered Parking', icon: 'Car' },
  { name: 'Power Backup', icon: 'Zap' },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter((p) => p.status === status);
}
