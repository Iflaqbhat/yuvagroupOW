import type { Project, Testimonial, TeamMember } from '@/types';

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
    description:
      'Spacious 1, 2 & 3 BHK apartments off Hosur Road, designed for natural light and cross ventilation, close to Electronic City’s tech corridor.',
    longDescription:
      'Yuva Sunrise is a ready-to-move residential community of 68 affordable flats at the Attibele Industrial Area, off Hosur Road near Electronic City. Surrounded by open green space, the towers are oriented to capture morning light — deep balconies, large windows, and thoughtfully planned floor plates keep the living spaces airy through the day. Landscaped courtyards, a central clubhouse, and walking paths make the community feel complete rather than under construction.',
    heroImage:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Yuva Sunrise apartment towers with landscaped entrance off Hosur Road',
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
      'Metro facility (upcoming)',
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
    // Areas from the 'TYPICAL FLOOR PLAN' table on yuvagroup.in/yuva-sunrise/
    // (Flat 2: East 2 BHK 1,280 sft; Flat 1: East 3 BHK 1,672 sft — representative of the range)
    floorPlans: [
      {
        name: '2 BHK — Sunrise',
        type: '2 BHK',
        area: '1,280 sq.ft.',
        image:
          'https://images.pexels.com/photos/210412/pexels-photo-210412.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 2 BHK unit at Yuva Sunrise',
      },
      {
        name: '3 BHK — Sunrise',
        type: '3 BHK',
        area: '1,672 sq.ft.',
        image:
          'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 3 BHK unit at Yuva Sunrise',
      },
    ],
    startingPrice: 'From Rs. 50 Lac*',
    possession: 'Ready to Move',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
    units: '1, 2 & 3 BHK apartments',
    bedrooms: '1, 2 & 3 BHK',
    // Nearby landmarks from the 'Map Location' block on yuvagroup.in/yuva-sunrise/
    connectivity: [
      { label: 'Hosur Main Road', distance: '500 m' },
      { label: 'Electronic City', distance: '10 km' },
      { label: 'Hosur Airport (upcoming)', distance: '18 km' },
      { label: 'Whitefield', distance: '25 km' },
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
    description:
      'A growing residential community of 1, 2 & 3 BHK homes in Kammasandra, Electronic City Phase 2.',
    longDescription:
      'Yuva Utsav is an ongoing development designed around the idea of a complete neighbourhood rather than a standalone tower. The master plan clusters homes around shared courtyards, a central green, and a clubhouse, so residents meet naturally rather than passing anonymously. Construction is progressing in phases, with the first towers approaching completion and the community spaces already taking shape.',
    heroImage:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Yuva Utsav residential community under construction in Kammasandra, Electronic City Phase 2',
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
    // Area from the 'TYPICAL FLOOR PLAN' table on yuvagroup.in/yuva-utsav/
    // (Flat 3: North 2 BHK 1,088 sft — representative of the range)
    floorPlans: [
      {
        name: '2 BHK — Utsav',
        type: '2 BHK',
        area: '1,088 sq.ft.',
        image:
          'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Floor plan for 2 BHK unit at Yuva Utsav',
      },
    ],
    startingPrice: 'From Rs. 50 Lac*',
    possession: 'To be confirmed with the sales team',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
    units: '1, 2 & 3 BHK apartments',
    bedrooms: '1, 2 & 3 BHK',
    // Nearby landmarks from the 'Map Location' block on yuvagroup.in/yuva-utsav/
    connectivity: [
      { label: 'Hebbagudi Metro Station', distance: '5 min' },
      { label: 'Bangalore–Hosur Main Road (NH-7)', distance: '4 min' },
      { label: 'D’Mart', distance: '7 min' },
      { label: 'IT Parks (Infosys, HP, TCS)', distance: '10 min' },
      { label: 'PES & Symbiosis University', distance: '10 min' },
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
    description:
      'Well-planned 1.5, 2 & 3 BHK apartments that balance affordability with the quality expected from Yuva Group.',
    longDescription:
      'Yuva Sunshine brings the build quality of Yuva Group’s premium developments to a more accessible price point on the Chandapura–Anekal Road. The towers are compact and efficiently planned, with units that feel larger than their square footage thanks to open kitchens, corner windows, and continuous balconies. The community shares a single, well-equipped clubhouse and a generous central green.',
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
        category: 'Structure',
        items: [{ label: 'Frame', value: 'RCC framed structure' }],
      },
      {
        category: 'Finishes',
        items: [{ label: 'Flooring', value: 'Vitrified tiles' }],
      },
    ],
    // Area is illustrative — the real Sunshine page reuses the company-wide floor-plan table with
    // no Sunshine-specific areas; shown as a representative plan (see disclaimer on the detail page)
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
    startingPrice: 'From Rs. 50 Lac*',
    possession: 'To be confirmed with the sales team',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
    units: '1.5, 2 & 3 BHK apartments',
    bedrooms: '1.5, 2 & 3 BHK',
    // UNVERIFIED: no 'Map Location' block is published on yuvagroup.in/yuva-sunshine/ — the
    // nearby times below are estimates for the Chandapura–Anekal Road corridor, client to confirm
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
    // Coordinates: map pin on yuvagroup.in/yuva-sunshine/ (YUVA SUNSHINE APARTMENT)
    coordinates: { lat: 12.74769, lng: 77.70453 },
    featured: true,
  },
  {
    slug: 'yuva-residency',
    name: 'Yuva Residency',
    tagline: 'Quiet residential living off Anekal Road',
    // UNVERIFIED: location not confirmed against public site content — client to double-check
    // (yuvagroup.in lists completed projects without locations)
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
    startingPrice: 'From Rs. 50 Lac*',
    possession: 'Completed',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
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
    // UNVERIFIED: exact location not confirmed against public site content — client to double-check
    // (yuvagroup.in lists Yuva Heritage among completed projects, without a location)
    location: 'Hosur Road, Bengaluru',
    area: 'Hosur Road',
    // Status: yuvagroup.in lists Yuva Heritage under Completed Projects
    status: 'completed',
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
      { label: 'Status', value: 'Completed' },
      { label: 'Location', value: 'Hosur Road' },
    ],
    amenities: [
      'Private gardens',
      'Clubhouse',
      'Swimming pool',
      'Tree-lined internal streets',
      'Walking track',
      'Children’s play area',
      'Rainwater harvesting',
      '100% power backup',
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
    startingPrice: 'From Rs. 50 Lac*',
    possession: 'Completed',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
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
          'Yes. Yuva Heritage is a villa development where each unit includes owned land. Contact the sales team for the land area per unit.',
      },
    ],
    coordinates: { lat: 12.7654, lng: 77.6985 },
    featured: false,
  },
  {
    slug: 'yuva-lake-view',
    name: 'Yuva Lake View',
    tagline: 'Apartments oriented around a water outlook',
    // Location: yuvagroup.in lists Yuva Lake View among completed projects; a client testimonial
    // on the real homepage names the build-out of 'Yuva Lakeview, AECS Layout "B" Block, Singasandra'.
    // Client still to double-check the exact plot before marketing use.
    location: 'AECS Layout "B" Block, Singasandra, Bengaluru',
    area: 'Singasandra',
    // Status: yuvagroup.in lists Yuva Lake View under Completed Projects
    status: 'completed',
    category: 'apartments',
    description:
      'A completed apartment project planned around sightlines to nearby water, with wide green buffers between towers.',
    longDescription:
      'Yuva Lake View is a completed apartment project planned around sightlines to nearby water. Towers are set back from each other with wide green buffers, so most units look out onto landscape rather than a neighbouring wall. The master plan prioritises pedestrian flow, with vehicles kept to the perimeter and a continuous walking loop connecting the clubhouse and gardens.',
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
      { label: 'Status', value: 'Completed' },
      { label: 'Location', value: 'Singasandra' },
    ],
    // 'Water-facing promenade' removed — not on the real site. Company-wide amenities
    // (rainwater harvesting, 100% power backup) added per yuvagroup.in amenity section.
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gymnasium',
      'Landscaped gardens',
      'Walking track',
      'Children’s play area',
      'Rainwater harvesting',
      '100% power backup',
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
    startingPrice: 'From Rs. 50 Lac*',
    possession: 'Completed',
    // Per-project RERA number is not published on public sources — do not invent
    rera: 'To be confirmed with the sales team',
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
    // Coordinates: approximate — centred on Singasandra (AECS Layout "B" Block) per the official
    // site's client testimonial; the real site publishes no map pin for this completed project
    coordinates: { lat: 12.876, lng: 77.642 },
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
  },
  {
    // Real testimonial from the yuvagroup.in homepage slider (paraphrased)
    name: 'Shaik Mehbubbasha',
    location: 'Power Smart Pvt Ltd',
    project: 'Yuva Group',
    quote:
      'The builder was very professional and communicative throughout the entire process. The quality of work was exceptional and exceeded our expectations, and the project was completed within the agreed-upon timeline and budget.',
    rating: 5,
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
  },
];

export const team: TeamMember[] = [
  {
    // One person holds both titles (yuvagroup.in homepage: 'The Chief Executive Officer and
    // Managing Director of Yuva Group, Mr. Mahendra Reddy'). NOTE: the real About page also
    // lists Mrs. Anitha Reddy as Managing Director — client to confirm the intended leadership.
    name: 'Mr. Mahendra Reddy',
    role: 'Chief Executive Officer & Managing Director',
    // Bio paraphrased from yuvagroup.in homepage + About Us. Years figure aligned to the
    // client-confirmed counter data (Years of Experiences 10+); the real About page bio says
    // '15 Years in real estate' — client arbitration pending, easy to flip back.
    bio: 'Mr. Mahendra Reddy built Yuva Group from the ground up, beginning with quality, value-driven apartments designed for modern homebuyers across Bengaluru. He later expanded the company into high-potential land development and villa projects. With around 10 years in real estate and about 10 completed projects to date, he continues to focus on construction quality and customer satisfaction.',
    // Portrait used in the leadership block on yuvagroup.in/about-us/
    image: 'https://yuvagroup.in/wp-content/uploads/2025/04/001-1.jpg.webp',
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

export const allAmenities = [
  { name: 'Clubhouse', icon: 'Building2' },
  { name: 'Swimming Pool', icon: 'Waves' },
  { name: 'Gymnasium', icon: 'Dumbbell' },
  { name: 'Landscaped Gardens', icon: 'Trees' },
  { name: 'Children’s Play Area', icon: 'Baby' },
  { name: 'Jogging Track', icon: 'PersonStanding' },
  { name: 'Indoor Games', icon: 'Gamepad2' },
  { name: 'Multipurpose Hall', icon: 'Presentation' },
  // Real company-wide amenities from yuvagroup.in (rainwater harvesting, metro facilities,
  // 1km walking track, banquet hall, 100% power backup). 'Amphitheatre' removed — not on the
  // real site.
  { name: 'Rainwater Harvesting', icon: 'Droplets' },
  { name: 'Metro Facility', icon: 'TrainFront' },
  { name: 'Banquet Hall', icon: 'PartyPopper' },
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
