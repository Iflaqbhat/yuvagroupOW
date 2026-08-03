// File purpose: All site data: projects, amenities, company stats, and testimonials.
import type { Project, Testimonial, TeamMember } from '@/types';

const sunriseFloorPlanRows = [
  { flat: '1', area: '1,672 sft', facing: 'East', bhk: '3 BHK' },
  { flat: '2', area: '1,280 sft', facing: 'East', bhk: '2 BHK' },
  { flat: '3', area: '778 sft', facing: 'West', bhk: '1 BHK' },
  { flat: '4', area: '1,658 sft', facing: 'East', bhk: '3 BHK' },
  { flat: '5', area: '1,243 sft', facing: 'East', bhk: '2 BHK' },
  { flat: '6', area: '1,170 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '7', area: '1,196 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '8', area: '1,246 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '9', area: '1,133 sft', facing: 'West', bhk: '2 BHK' },
  { flat: '10', area: '1,091 sft', facing: 'East', bhk: '2 BHK' },
  { flat: '11', area: '1,095 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '12', area: '1,255 sft', facing: 'East', bhk: '2 BHK' },
  { flat: '13', area: '1,333 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '14', area: '1,057 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '15', area: '1,119 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '16', area: '1,158 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '17', area: '1,414 sft', facing: 'East', bhk: '3 BHK' },
];

const utsavSunshineFloorPlanRows = [
  { flat: '1', area: '1,438 sft', facing: 'East', bhk: '3 BHK' },
  { flat: '2', area: '1,449 sft', facing: 'North', bhk: '3 BHK' },
  { flat: '3', area: '1,088 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '4', area: '1,147 sft', facing: 'North', bhk: '2 BHK' },
  { flat: '5', area: '1,417 sft', facing: 'North', bhk: '3 BHK' },
  { flat: '6', area: '1,271 sft', facing: 'East', bhk: '3 BHK' },
  { flat: '7', area: '622 sft', facing: 'East', bhk: '1 BHK' },
  { flat: '8', area: '1,331 sft', facing: 'East', bhk: '3 BHK' },
  { flat: '9', area: '661 sft', facing: 'West', bhk: '1 BHK' },
  { flat: '10', area: '1,020 sft', facing: 'East', bhk: '2 BHK' },
  { flat: '11', area: '1,111 sft', facing: 'East', bhk: '2 BHK' },
];

export const projects: Project[] = [
  {
    slug: 'yuva-sunrise',
    name: 'Yuva Sunrise',
    tagline: 'Light-filled 1, 2 & 3 BHK homes off Hosur Road',
    // Location: Manchenahalli village, Attibele Industrial Area, off Hosur Road — yuvagroup.in project card ('MANCHENAHALLI VILLAGE, ATTIBELE INDUSTRIAL AREA, OFF HOSUR ROAD')
    location: 'Manchenahalli village, Attibele Industrial Area, off Hosur Road, Bengaluru',
    area: 'Attibele Industrial Area',
    status: 'ready-to-move',
    category: 'apartments',
    officialCategory: 'Affordable Flats',
    sourceUrl: 'https://yuvagroup.in/yuva-sunrise/',
    sourceNotes: [
      'Official project page describes Yuva Sunrise as 68 affordable flats with 1, 2 and 3 BHK units near Electronic City, Chandapura and Hosur National Highway.',
      'Floor-plan rows, specifications, amenities and map-connectivity items are taken from the public project page.',
    ],
    description:
      'Spacious 1, 2 & 3 BHK apartments off Hosur Road, designed for natural light and cross ventilation, close to Electronic City’s tech corridor.',
    longDescription:
      'Yuva Sunrise is listed by Yuva Group as a ready-to-move affordable apartment project with 68 flats in an open green setting near Electronic City, Chandapura and Hosur National Highway. The official page highlights 1, 2 and 3 BHK homes, everyday civic access, educational institutions, healthcare options, IT corridors and a broad amenity set for family living.',
    heroImage: '/photos/projects/yuva-sunrise-hero.jpg',
    heroAlt: 'Official Yuva Sunrise apartment exterior render with landscaped entrance off Hosur Road',
    gallery: [
      {
        src: '/photos/projects/yuva-sunrise-gallery-1.jpg',
        alt: 'Yuva Sunrise official entrance facade render',
      },
      {
        src: '/photos/projects/yuva-sunrise-gallery-2.jpg',
        alt: 'Yuva Sunrise official exterior render from the front approach',
      },
      {
        src: '/photos/projects/yuva-sunrise-gallery-3.jpg',
        alt: 'Yuva Sunrise official apartment tower render',
      },
      {
        src: '/photos/projects/yuva-sunrise-gallery-4.jpg',
        alt: 'Yuva Sunrise official community render',
      },
      {
        src: '/photos/projects/yuva-sunrise-gallery-5.jpg',
        alt: 'Yuva Sunrise official residential exterior render',
      },
    ],
    highlights: [
      { label: 'Configuration', value: '1, 2 & 3 BHK' },
      { label: 'Status', value: 'Ready to Move' },
      { label: 'Location', value: 'Attibele Industrial Area' },
    ],
    // Amenities per the amenity section on yuvagroup.in/yuva-sunrise/ (grand clubhouses, indoor &
    // outdoor fitness and sports, swimming pool, kids' play areas, rainwater harvesting, metro
    // facilities, banquet hall, green landscape, 1km walking track, 100% power backup)
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gymnasium',
      'Indoor & outdoor sports',
      'Landscaped gardens',
      'Children’s play area',
      'Multipurpose hall',
      'Banquet hall',
      'Rainwater harvesting',
      '100% power backup',
      'Metro facilities',
      'School bus waiting lounge',
      'Intercom facility',
      'Tennis court & basketball court',
      'Multipurpose court',
      '24/7 security',
    ],
    specifications: [
      {
        category: 'Structure',
        items: [
          { label: 'Frame', value: 'RCC framed structure designed for Zone II regulations' },
          { label: 'Walls', value: 'Solid block walls for internal and external masonry' },
        ],
      },
      {
        category: 'Water & plumbing',
        items: [
          { label: 'Water supply', value: 'Borewell, underground sump and overhead Sintex tank' },
          { label: 'Plumbing', value: 'Concealed Astral plumbing and CP fittings' },
        ],
      },
      {
        category: 'Interiors',
        items: [
          { label: 'Kitchen', value: '30 mm granite counter top with stainless steel sink' },
          { label: 'Plastering', value: 'Smooth lime-rendered interiors and sponge-finished exteriors' },
          { label: 'Sanitary fittings', value: 'White sanitary fittings and CP fittings from branded ranges' },
        ],
      },
    ],
    // Areas from the 'TYPICAL FLOOR PLAN' table on yuvagroup.in/yuva-sunrise/
    // (Flat 2: East 2 BHK 1,280 sft; Flat 1: East 3 BHK 1,672 sft — representative of the range)
    floorPlans: [
      {
        name: '2 BHK — Sunrise',
        type: '2 BHK',
        area: '1,280 sq.ft.',
        image: '/photos/projects/yuva-sunrise-floorplan-2.jpg',
        alt: 'Official floor plan for 2 BHK unit at Yuva Sunrise',
      },
      {
        name: '3 BHK — Sunrise',
        type: '3 BHK',
        area: '1,672 sq.ft.',
        image: '/photos/projects/yuva-sunrise-floorplan-1.jpg',
        alt: 'Official floor plan for 3 BHK unit at Yuva Sunrise',
      },
    ],
    floorPlanRows: sunriseFloorPlanRows,
    startingPrice: 'From Rs. 50 Lac*',
    possession: 'Ready to Move',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
    units: '1, 2 & 3 BHK apartments',
    unitCount: '68 affordable flats',
    bedrooms: '1, 2 & 3 BHK',
    // Nearby landmarks from the 'Map Location' block on yuvagroup.in/yuva-sunrise/
    connectivity: [
      { label: 'Hosur Main Road', distance: '500 m' },
      { label: 'Electronic City', distance: '10 km' },
      { label: 'Hosur Airport (upcoming)', distance: '18 km' },
      { label: 'Whitefield', distance: '25 km' },
      { label: 'Narayana Hrudayalaya', distance: 'Nearby' },
      { label: 'Vimalaya Hospital', distance: 'Nearby' },
      { label: 'Oxford Medical College and Hospital', distance: 'Nearby' },
      { label: 'Alliance University', distance: 'Nearby' },
    ],
    faqs: [
      {
        question: 'Is Yuva Sunrise ready to move in?',
        answer:
          'Yes. Yuva Sunrise is a completed residential project with units available for immediate occupancy.',
      },
      {
        question: 'What configurations are available?',
        answer:
          'The project offers 1, 2 and 3 BHK apartments. Contact the sales team for current availability.',
      },
    ],
    // Coordinates: map pin on yuvagroup.in/yuva-sunrise/ (YUVA SUNRISE APARTMENT)
    coordinates: { lat: 12.77697, lng: 77.74708 },
    featured: true,
  },
  {
    slug: 'yuva-utsav',
    name: 'Yuva Utsav',
    tagline: 'Community living in Electronic City Phase 2',
    // Location: Kammasandra, Electronic City Ph-2 — yuvagroup.in project card ('KAMMASANDRA, ELECTRONIC CITY PH-2, BENGALURU')
    location: 'Kammasandra, Electronic City Phase 2, Bengaluru',
    area: 'Kammasandra',
    status: 'ongoing',
    category: 'apartments',
    officialCategory: 'Affordable Flats',
    sourceUrl: 'https://yuvagroup.in/yuva-utsav/',
    sourceNotes: [
      'Official page presents Yuva Utsav as premium luxury apartments in Kammasandra, Electronic City Phase 2.',
      'The public homepage lists Yuva Utsav under both ongoing and ready-to-move groupings; this redesign keeps it under ongoing until the sales team confirms handover status.',
    ],
    description:
      'A growing residential community of 1, 2 & 3 BHK homes in Kammasandra, Electronic City Phase 2.',
    longDescription:
      'Yuva Utsav is presented by Yuva Group as a modern apartment project in Kammasandra, Electronic City Phase 2. The official project page focuses on premium apartment living, reliable water systems, granite kitchen counters, Astral plumbing, branded sanitary fittings, a grand entrance experience and daily-use amenities for residents.',
    heroImage: '/photos/projects/yuva-utsav-hero.png',
    heroAlt: 'Official Yuva Utsav mixed-use apartment exterior render in Electronic City Phase 2',
    gallery: [
      {
        src: '/photos/projects/yuva-utsav-gallery-2.jpg',
        alt: 'Yuva Utsav official residential and retail exterior render',
      },
      {
        src: '/photos/projects/yuva-utsav-hero.png',
        alt: 'Yuva Utsav official apartment elevation render',
      },
    ],
    highlights: [
      { label: 'Configuration', value: '1, 2 & 3 BHK' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Location', value: 'Electronic City Ph-2' },
    ],
    // Amenities per the amenity section on yuvagroup.in/yuva-utsav/ (grand clubhouses, indoor &
    // outdoor fitness and sports, swimming pool, kids' play areas, rainwater harvesting, 24X7
    // security, multipurpose hall, green landscape, 1km walking track, 100% power backup).
    // NOTE: 'Amphitheatre' was removed — it does not appear on the real site.
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gymnasium',
      'Indoor & outdoor sports',
      'Landscaped gardens',
      'Children’s play area',
      'Walking track',
      'Multipurpose hall',
      'Rainwater harvesting',
      '100% power backup',
      'Chess',
      'Carrom',
      'Indoor games',
      'School bus waiting lounge',
      '24/7 security',
    ],
    specifications: [
      {
        category: 'Structure & walls',
        items: [
          { label: 'Foundation & structure', value: 'RCC framed structure' },
          { label: 'Super structure', value: 'AAC concrete blocks for external and internal walls' },
        ],
      },
      {
        category: 'Finishes & services',
        items: [
          { label: 'Flooring', value: 'Vitrified tiles in hall and dining; ceramic tiles for other areas and toilets' },
          { label: 'Painting', value: 'Internal walls and ceiling with OBD; external walls with cement finish' },
          { label: 'Electrical', value: 'Standard equivalent switches' },
        ],
      },
      {
        category: 'Fittings',
        items: [
          { label: 'Lift', value: 'One 6-passenger lift serving all floors' },
          { label: 'Toilets', value: 'Ceramic glazed tile dado up to 7 ft with standard CP fittings' },
          { label: 'Kitchen', value: 'Built-in stainless steel sink and exhaust fan provision' },
        ],
      },
    ],
    // Area from the 'TYPICAL FLOOR PLAN' table on yuvagroup.in/yuva-utsav/
    // (Flat 3: North 2 BHK 1,088 sft — representative of the range)
    floorPlans: [
      {
        name: '2 BHK — Utsav',
        type: '2 BHK',
        area: '1,088 sq.ft.',
        image: '/photos/projects/yuva-utsav-gallery-1.jpg',
        alt: 'Official typical floor plan at Yuva Utsav',
      },
    ],
    floorPlanRows: utsavSunshineFloorPlanRows,
    startingPrice: 'From Rs. 50 Lac*',
    possession: 'To be confirmed with the sales team',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
    units: '1, 2 & 3 BHK apartments',
    unitCount: '11 typical unit types shown',
    bedrooms: '1, 2 & 3 BHK',
    // Nearby landmarks from the 'Map Location' block on yuvagroup.in/yuva-utsav/
    connectivity: [
      { label: 'Hebbagudi Metro Station', distance: '5 min' },
      { label: 'Bangalore–Hosur Main Road (NH-7)', distance: '4 min' },
      { label: 'D’Mart', distance: '7 min' },
      { label: 'Elevated 4-lane expressway flyover', distance: '10 min' },
      { label: 'IT Parks (Infosys, HP, TCS)', distance: '10 min' },
      { label: 'ICICI, HDFC, Axis Bank and Indian Bank', distance: '7 min' },
      { label: 'PES & Symbiosis University', distance: '10 min' },
      { label: 'Christ and Treamis World School', distance: '5 min' },
      { label: 'Narayana Hrudayalaya & Vimalaya Hospital', distance: '5 min' },
    ],
    faqs: [
      {
        question: 'When will Yuva Utsav be ready?',
        answer:
          'Yuva Utsav is currently under construction. Contact the sales team for the latest handover timeline.',
      },
    ],
    // Coordinates: map pin on yuvagroup.in/yuva-utsav/ (Yuva utsav apartment)
    coordinates: { lat: 12.82959, lng: 77.68554 },
    featured: true,
  },
  {
    slug: 'yuva-sunshine',
    name: 'Yuva Sunshine',
    tagline: 'Bright, affordable 1.5, 2 & 3 BHK homes off Chandapura–Anekal Road',
    // Location: real site places Yuva Sunshine 'near Chandapura to Anakal Main road'
    // (yuvagroup.in/yuva-sunshine/) and lists it under Ongoing Projects
    location: 'Chandapura–Anekal Road, Bengaluru',
    area: 'Chandapura',
    // Status: yuvagroup.in lists Yuva Sunshine under Ongoing Projects (not ready-to-move)
    status: 'ongoing',
    category: 'apartments',
    officialCategory: 'Affordable Flats',
    sourceUrl: 'https://yuvagroup.in/yuva-sunshine/',
    sourceNotes: [
      'Official page describes Yuva Sunshine as 65 premium yet affordable flats near Chandapura to Anekal Main Road.',
      'The public page publishes a map section but does not list individual nearby-distance bullets, so this redesign avoids estimated connectivity claims.',
    ],
    description:
      'Well-planned 1.5, 2 & 3 BHK apartments that balance affordability with the quality expected from Yuva Group.',
    longDescription:
      'Yuva Sunshine is presented by Yuva Group as a stylish and affordable residential project near Chandapura to Anekal Main Road. The official page describes spacious 1.5, 2 and 3 BHK homes set amid greenery, with 65 premium yet affordable flats planned for a peaceful daily living environment close to Bengaluru’s southern growth corridor.',
    heroImage: '/photos/projects/yuva-sunshine-hero.webp',
    heroAlt: 'Official Yuva Sunshine apartment exterior render at Chandapura',
    gallery: [
      {
        src: '/photos/projects/yuva-sunshine-gallery-2.webp',
        alt: 'Yuva Sunshine official exterior render from the entrance side',
      },
      {
        src: '/photos/projects/yuva-sunshine-hero.webp',
        alt: 'Yuva Sunshine official apartment elevation render',
      },
    ],
    highlights: [
      // Configuration per yuvagroup.in/yuva-sunshine/ ('spacious 1.5, 2, and 3 BHK homes')
      { label: 'Configuration', value: '1.5, 2 & 3 BHK' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Location', value: 'Chandapura–Anekal Road' },
    ],
    // Amenities: the real Sunshine page reuses the company-wide amenity set (grand clubhouses,
    // indoor & outdoor fitness and sports, swimming pools, kids' play areas, rainwater harvesting,
    // 24X7 security, green landscape, 100% power backup)
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gymnasium',
      'Indoor & outdoor sports',
      'Landscaped gardens',
      'Children’s play area',
      'Multipurpose hall',
      'Rainwater harvesting',
      '100% power backup',
      '24/7 security',
    ],
    specifications: [
      {
        category: 'Structure & walls',
        items: [
          { label: 'Super structure', value: 'AAC concrete blocks for external and internal walls' },
          { label: 'Walls', value: 'Solid block walls for internal and external masonry' },
        ],
      },
      {
        category: 'Water & plumbing',
        items: [
          { label: 'Water supply', value: 'Borewell, underground sump and overhead Sintex tank' },
          { label: 'Plumbing', value: 'Concealed Astral plumbing and CP fittings' },
        ],
      },
      {
        category: 'Interiors',
        items: [
          { label: 'Kitchen', value: '30 mm granite counter top with stainless steel sink' },
          { label: 'Main entrance', value: 'Entrance decoration as per architect design' },
          { label: 'Sanitary fittings', value: 'White sanitary fittings and CP fittings from branded ranges' },
        ],
      },
    ],
    // Area from the 'TYPICAL FLOOR PLAN' table on yuvagroup.in/yuva-sunshine/
    floorPlans: [
      {
        name: '2 BHK — Sunshine',
        type: '2 BHK',
        area: '1,088 sq.ft.',
        image: '/photos/projects/yuva-sunshine-gallery-1.jpg',
        alt: 'Official typical floor plan at Yuva Sunshine',
      },
    ],
    floorPlanRows: utsavSunshineFloorPlanRows,
    startingPrice: 'From Rs. 50 Lac*',
    possession: 'To be confirmed with the sales team',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
    units: '1.5, 2 & 3 BHK apartments',
    unitCount: '65 premium affordable flats',
    bedrooms: '1.5, 2 & 3 BHK',
    connectivity: [],
    faqs: [
      {
        question: 'Is Yuva Sunshine affordable housing?',
        answer:
          'Yuva Sunshine is positioned as an affordable premium project — it offers Yuva Group’s construction quality at a more accessible price point.',
      },
    ],
    // Coordinates: map pin on yuvagroup.in/yuva-sunshine/ (YUVA SUNSHINE APARTMENT)
    coordinates: { lat: 12.74769, lng: 77.70453 },
    featured: true,
  },
  {
    slug: 'yuva-residency',
    name: 'Yuva Residency',
    tagline: 'A completed affordable-flats project in Yuva Group’s portfolio',
    // yuvagroup.in lists completed projects without a public location for Residency.
    location: 'Bengaluru',
    area: 'Bengaluru',
    status: 'completed',
    category: 'apartments',
    officialCategory: 'Affordable Flats',
    sourceUrl: 'https://yuvagroup.in/',
    sourceNotes: [
      'Official homepage lists Yuva Residency under completed projects as Affordable Flats.',
      'The public site does not expose a dedicated Residency detail page with amenities or connectivity details, so this page keeps those claims to confirmation with the sales team.',
    ],
    description:
      'A completed affordable-flats project listed in Yuva Group’s delivered portfolio.',
    longDescription:
      'Yuva Residency appears on the official Yuva Group homepage under completed affordable-flats projects. Because the public website does not publish a full project detail page for Residency, this redesign keeps the page intentionally factual and directs availability, resale and documentation questions to the sales team.',
    heroImage: '/photos/projects/yuva-residency-hero.jpg',
    heroAlt: 'Official Yuva Residency building render from the Yuva Group homepage media',
    gallery: [
      {
        src: '/photos/projects/yuva-residency-hero.jpg',
        alt: 'Yuva Residency official building render',
      },
      {
        src: '/photos/projects/yuva-residency-floorplan-1.jpg',
        alt: 'Yuva Residency official floor-plan media',
      },
    ],
    highlights: [
      { label: 'Configuration', value: 'Affordable Flats' },
      { label: 'Status', value: 'Completed' },
      { label: 'Source', value: 'Official homepage' },
    ],
    amenities: [],
    specifications: [],
    floorPlans: [],
    possession: 'Completed',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
    units: 'Affordable flats',
    bedrooms: 'To be confirmed',
    connectivity: [],
    faqs: [
      {
        question: 'Are units available at Yuva Residency?',
        answer:
          'Yuva Residency is a completed and occupied project. Resale availability varies — contact the sales team for current options.',
      },
    ],
    featured: true,
  },
  {
    slug: 'yuva-heritage',
    name: 'Yuva Heritage',
    tagline: 'A completed affordable-flats community',
    // UNVERIFIED: exact location not confirmed against public site content — client to double-check
    // (yuvagroup.in lists Yuva Heritage among completed projects, without a location)
    location: 'Bengaluru',
    area: 'Bengaluru',
    // Status: yuvagroup.in lists Yuva Heritage under Completed Projects
    status: 'completed',
    category: 'apartments',
    officialCategory: 'Affordable Flats',
    sourceUrl: 'https://yuvagroup.in/',
    sourceNotes: [
      'Official homepage lists Yuva Heritage under completed projects as Affordable Flats.',
      'The public site exposes official Heritage render media, but no full detail page with amenities, exact location or floor-plan table was found.',
    ],
    description:
      'A completed apartment development from Yuva Group’s delivered portfolio.',
    longDescription:
      'Yuva Heritage is listed by Yuva Group among its completed affordable-flats projects. The public site does not publish a detailed unit mix or exact location, so this page presents it as a delivered apartment community and keeps booking, resale, and RERA specifics to confirmation with the sales team.',
    heroImage: '/photos/projects/yuva-heritage-hero.jpg',
    heroAlt: 'Official Yuva Heritage apartment exterior render',
    gallery: [
      {
        src: '/photos/projects/yuva-heritage-hero.jpg',
        alt: 'Yuva Heritage official exterior render',
      },
      {
        src: '/photos/projects/yuva-heritage-gallery-1.jpg',
        alt: 'Yuva Heritage official alternate exterior render',
      },
    ],
    highlights: [
      { label: 'Configuration', value: 'Affordable Flats' },
      { label: 'Status', value: 'Completed' },
      { label: 'Source', value: 'Official homepage' },
    ],
    amenities: [],
    specifications: [],
    floorPlans: [],
    possession: 'Completed',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
    units: 'Affordable flats',
    bedrooms: 'To be confirmed',
    connectivity: [],
    faqs: [
      {
        question: 'Is Yuva Heritage completed?',
        answer:
          'Yes. Yuva Heritage is listed under completed projects on the official Yuva Group homepage. Current resale or availability details should be confirmed with the sales team.',
      },
    ],
    featured: false,
  },
  {
    slug: 'yuva-lake-view',
    name: 'Yuva Lake View',
    tagline: 'A completed affordable-flats project in Yuva Group’s portfolio',
    // Location: yuvagroup.in lists Yuva Lake View among completed projects; a client testimonial
    // on the real homepage names the build-out of 'Yuva Lakeview, AECS Layout "B" Block, Singasandra'.
    // Client still to double-check the exact plot before marketing use.
    location: 'AECS Layout "B" Block, Singasandra, Bengaluru',
    area: 'Singasandra',
    // Status: yuvagroup.in lists Yuva Lake View under Completed Projects
    status: 'completed',
    category: 'apartments',
    officialCategory: 'Affordable Flats',
    sourceUrl: 'https://yuvagroup.in/',
    sourceNotes: [
      'Official homepage lists Yuva Lake View under completed projects as Affordable Flats.',
      'A homepage testimonial names Yuva Lakeview at AECS Layout “B” Block, Singasandra; no full project detail page with floor-plan or specification table was found.',
    ],
    description:
      'A completed affordable-flats project referenced in Yuva Group’s delivered portfolio.',
    longDescription:
      'Yuva Lake View is listed by Yuva Group under completed affordable-flats projects. The official homepage also carries a client testimonial referring to the Yuva Lakeview build-out at AECS Layout “B” Block, Singasandra. Since the public site does not publish a full detail page, this page avoids extra claims about unit orientation, floor plans or amenities.',
    heroImage: '/photos/projects/yuva-lake-view-hero.jpg',
    heroAlt: 'Official Yuva Lake View apartment exterior render',
    gallery: [
      {
        src: '/photos/projects/yuva-lake-view-hero.jpg',
        alt: 'Yuva Lake View official exterior render',
      },
      {
        src: '/photos/projects/yuva-lake-view-gallery-1.jpg',
        alt: 'Yuva Lake View official alternate exterior render',
      },
    ],
    highlights: [
      { label: 'Configuration', value: 'Affordable Flats' },
      { label: 'Status', value: 'Completed' },
      { label: 'Location', value: 'Singasandra' },
    ],
    amenities: [],
    specifications: [],
    floorPlans: [],
    possession: 'Completed',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
    units: 'Affordable flats',
    bedrooms: 'To be confirmed',
    connectivity: [
      { label: 'AECS Layout “B” Block, Singasandra', distance: 'Referenced in testimonial' },
    ],
    faqs: [
      {
        question: 'Where is Yuva Lake View referenced on the official site?',
        answer:
          'The official homepage lists Yuva Lake View as a completed project, and a client testimonial refers to the build-out at AECS Layout “B” Block, Singasandra.',
      },
    ],
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    // Real testimonial from the yuvagroup.in homepage slider (paraphrased)
    name: 'Pradeep Jana',
    location: 'Small Finance Bank',
    project: 'Yuva Group',
    quote:
      'Very satisfied with the construction work by Yuva builders — cooperative and dedicated throughout, and everything we asked for was delivered on time. Thanks to Mahendra for the great work.',
    // The real site publishes no star rating for testimonials; stars are stylistic
    rating: 5,
    // Avatar photo — saved locally (was hosted on yuvagroup.in)
    avatar: '/photos/testimonials/pradeep.webp',
  },
  {
    // Real testimonial from the yuvagroup.in homepage slider (paraphrased)
    name: 'Shaik Mehbubbasha',
    location: 'Power Smart Pvt Ltd',
    project: 'Yuva Group',
    quote:
      'The builder was very professional and communicative throughout the entire process. The quality of work was exceptional and exceeded our expectations, and the project was completed within the agreed-upon timeline and budget.',
    rating: 5,
    // Avatar photo — saved locally (was hosted on yuvagroup.in)
    avatar: '/photos/testimonials/shaik-mehbubbasha.webp',
  },
  {
    // Real testimonial from the yuvagroup.in homepage slider (paraphrased) — also the source
    // of the Yuva Lake View location ('AECS Layout "B" Block, Singasandra')
    name: 'Adari Arun Kumar',
    location: 'AECS Layout, Singasandra',
    project: 'Yuva Lake View',
    quote:
      'Thank you to the project team for the build-out of Yuva Lakeview at AECS Layout, Singasandra. The team was reliable and talented, and communicated with the whole project team throughout the course of construction.',
    rating: 5,
    // Avatar photo — saved locally (was hosted on yuvagroup.in)
    avatar: '/photos/testimonials/adari-arun-kumar.webp',
  },
];

export const team: TeamMember[] = [
  // Full roster from the yuvagroup.in/about-us/ page: Mr. Mahendra Reddy (CEO) leads, with
  // Mrs. Anitha Reddy as Managing Director, followed by the operations and sales team.
  // Portraits are local copies of the original site's photos (public/photos/about/).
  {
    name: 'Mr. Mahendra Reddy',
    role: 'Chief Executive Officer',
    // Bio verbatim from the original About page (15 Years in real estate is their figure;
    // the homepage counters still show 10+ — kept as the client-confirmed counter data)
    bio: 'Mr. Mahendra Reddy is the Managing Director and Chief Executive Officer of Yuva Group, with an extensive experience of 15 years in real estate. Over the last two decades as an entrepreneur, he has firmly established himself as one of the dominant and most successful developers of real estate in Bangalore. Mr. Reddy has completed around ten successful projects, with more currently under development across Bengaluru. As Managing Director, he has maintained superior quality and a customer-friendly atmosphere in every project he has been involved with, and he remains committed to construction quality and customer satisfaction.',
    image: '/photos/about/ceo-mahendra-reddy.jpg',
  },
  {
    name: 'Mrs. Anitha Reddy',
    role: 'Managing Director',
    image: '/photos/about/anitha-reddy.png',
  },
  {
    name: 'J Vijay Kumar',
    role: 'Manager',
    image: '/photos/about/j-vijay-kumar.jpeg',
  },
  {
    name: 'Prema Bai R',
    role: 'Telesales Executive',
    image: '/photos/about/prema-bai-r.jpeg',
  },
  {
    name: 'Sakshi Singh A',
    role: 'HR (Human Resources)',
    image: '/photos/about/sakshi-singh-a.jpeg',
  },
  {
    name: 'Yashas A',
    role: 'Account Executive',
    image: '/photos/about/yashas-a.jpeg',
  },
  {
    name: 'V Penchalaiah',
    role: 'Project Operations Supervisor',
    image: '/photos/about/v-penchalaiah.jpeg',
  },
  {
    name: 'Naveen',
    role: 'Sales Executive',
    image: '/photos/about/naveen.jpeg',
  },
];

export const companyStats = [
  // Actual data from the yuvagroup.in homepage counters, confirmed by the client:
  // Completed Projects 10+ · Awards Winner 15+ · Years of Experiences 10+ ·
  // Ongoing Projects 3 · Success Rate 100%
  { label: 'Completed Projects', value: '10', suffix: '+' },
  { label: 'Awards Winner', value: '15', suffix: '+' },
  { label: 'Years of Experiences', value: '10', suffix: '+' },
  { label: 'Ongoing Projects', value: '3', suffix: '' },
  { label: 'Success Rate', value: '100', suffix: '%' },
];

export const youtubeVideos = [
  // Six embeds from the "Watch our latest video on YouTube" section of the current yuvagroup.in homepage.
  {
    id: 'DDELXwzjvXU',
    title: 'Yuva Group | 2 & 3 BHK Apartments for Modern Living',
  },
  {
    id: 'wO3QOPQiTV0',
    title: 'Yuva Group Apartments in Bangalore | Affordable 2 & 3 BHK Homes Near Electronic City',
  },
  {
    id: 'b0cPufoMY8g',
    title: 'Yuva Sunrise Apartments | 2 & 3 BHK Flats in Bangalore Near Electronic City | Yuva Group',
  },
  {
    id: '4HIxa4SxFOo',
    title: '1, 2 & 3 BHK Flats for Sale | Call 8282823396',
  },
  {
    id: '-ZVBOXMIMnw',
    title: 'Yuva Group | 1, 2 & 3 BHK Apartments for Sale | Call 8282823396',
  },
  {
    id: '1V8Uw95bJa0',
    title: 'RERA-Approved 1, 2 & 3 BHK Flats | Manchanahahalli, Attibele Hobli',
  },
];

export const allAmenities = [
  { name: 'Clubhouse', icon: 'Building2', photo: '/photos/amenities/clubhouse.jpg' },
  { name: 'Swimming Pool', icon: 'Waves', photo: '/photos/amenities/swimming-pool.jpg' },
  { name: 'Gymnasium', icon: 'Dumbbell', photo: '/photos/amenities/gymnasium.jpg' },
  { name: 'Landscaped Gardens', icon: 'Trees', photo: '/photos/amenities/landscaped-gardens.jpg' },
  { name: 'Children’s Play Area', icon: 'Baby', photo: '/photos/amenities/childrens-play-area.jpg' },
  { name: 'Walking Track', icon: 'PersonStanding', photo: '/photos/amenities/jogging-track.jpg' },
  {
    name: 'Indoor Games',
    icon: 'Gamepad2',
    photo: '/photos/amenities/indoor-games.avif',
  },
  { name: 'Multipurpose Hall', icon: 'Presentation', photo: '/photos/amenities/multipurpose-hall.jpg' },
  // Real company-wide amenities from yuvagroup.in (rainwater harvesting, metro facilities,
  // 1km walking track, banquet hall, 100% power backup). 'Amphitheatre' removed — not on the
  // real site.
  { name: 'Rainwater Harvesting', icon: 'Droplets', photo: '/photos/amenities/rainwater-harvesting.jpg' },
  { name: 'Metro Facility', icon: 'TrainFront' },
  { name: 'Banquet Hall', icon: 'PartyPopper', photo: '/photos/amenities/banquet-hall.jpg' },
  { name: '24/7 Security', icon: 'ShieldCheck' },
  { name: 'Covered Parking', icon: 'Car' },
  { name: 'Power Backup', icon: 'Zap' },
  { name: 'School Bus Waiting Lounge', icon: 'BusFront' },
];

export type Amenity = (typeof allAmenities)[number];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter((p) => p.status === status);
}
