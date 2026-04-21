import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  Newspaper,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Truck,
  Users
} from 'lucide-react';

export const aboutSectionLinks = [
  { label: 'About Us', to: '/about/about-us', slug: 'about-us' },
  { label: 'Why Choose Us', to: '/about/why-choose-us', slug: 'why-choose-us' },
  { label: 'Our Strength', to: '/about/our-strength', slug: 'our-strength' },
  { label: 'Achievements', to: '/about/achievements', slug: 'achievements' },
  { label: 'Customer Stories', to: '/about/customer-stories', slug: 'customer-stories' },
  { label: 'News & Updates', to: '/about/news-updates', slug: 'news-updates' }
];

export const aboutSections = {
  'about-us': {
    seoTitle: 'About Us',
    seoDescription: 'Learn about the moving company values, discipline, and operating approach behind Shree Shyam Cargo Packers & Movers.',
    eyebrow: 'About Us',
    title: 'A premium relocation brand built on discipline, care, and consistent execution.',
    description:
      'We combine trained crews, route planning, material quality, and responsive coordination so customers get a smoother move from the first call to final delivery.',
    spotlight: {
      label: 'Our Promise',
      title: 'Every move should feel controlled, transparent, and professionally managed.',
      text:
        'That is why our team focuses on packing standards, clear timelines, and calm customer communication at every stage of the relocation process.'
    },
    stats: [
      { value: '12K+', label: 'Moves Coordinated' },
      { value: '10+', label: 'Years of Market Learning' },
      { value: '24/7', label: 'Customer Response Window' }
    ],
    highlights: [
      { title: 'Professional move planning', text: 'We prepare each relocation around route, volume, handling needs, and delivery expectations.', icon: BriefcaseBusiness },
      { title: 'Care-first handling', text: 'Furniture, boxes, vehicles, and office assets are packed and moved with disciplined workflows.', icon: ShieldCheck },
      { title: 'Human support throughout', text: 'Customers stay connected with a responsive team instead of being left guessing during the move.', icon: HeartHandshake }
    ],
    featureCards: [
      { title: 'Structured surveys', text: 'Requirements are understood before dispatch so planning stays realistic.' },
      { title: 'Reliable communication', text: 'We keep pricing, timing, and process updates clear and practical.' },
      { title: 'End-to-end coverage', text: 'Packing, loading, transit, unloading, and placement work as one coordinated service.' }
    ]
  },
  'why-choose-us': {
    seoTitle: 'Why Choose Us',
    seoDescription: 'See why customers choose Shree Shyam Cargo Packers & Movers for safer, faster, and better-coordinated relocation support.',
    eyebrow: 'Why Choose Us',
    title: 'The difference is not just transport. It is planning, accountability, and confidence.',
    description:
      'Customers choose us because we do more than shift goods from one city to another. We help reduce stress, confusion, and avoidable risk during major relocations.',
    spotlight: {
      label: 'Client Confidence',
      title: 'A premium moving experience comes from details that most people only notice when they go wrong.',
      text:
        'Our approach keeps those details under control through material quality, team discipline, and dependable coordination.'
    },
    stats: [
      { value: '4.9/5', label: 'Customer Rating' },
      { value: 'PAN India', label: 'Route Coverage' },
      { value: 'Fast', label: 'Quote Turnaround' }
    ],
    highlights: [
      { title: 'Transparent consultations', text: 'We discuss service scope, route realities, and support options before the move begins.', icon: Users },
      { title: 'Route-ready execution', text: 'Local, intercity, and vehicle transport jobs are planned with practical delivery discipline.', icon: Rocket },
      { title: 'Premium customer care', text: 'Our team responds quickly when customers need guidance, reassurance, or urgent help.', icon: Sparkles }
    ],
    featureCards: [
      { title: 'No guesswork approach', text: 'We rely on planning and communication, not last-minute improvisation.' },
      { title: 'Operational maturity', text: 'Experience helps us spot risks early and respond before they become problems.' },
      { title: 'Trust-driven service', text: 'Our reputation depends on how secure and supported customers feel during the move.' }
    ]
  },
  'our-strength': {
    seoTitle: 'Our Strength',
    seoDescription: 'Explore the operational strengths that support Shree Shyam Cargo Packers & Movers across home, office, and intercity moves.',
    eyebrow: 'Our Strength',
    title: 'Our strongest advantage is a relocation system designed to stay dependable under pressure.',
    description:
      'From crew coordination to route execution, our strengths come from combining people, process, and service discipline into one operating model.',
    spotlight: {
      label: 'Operational Strength',
      title: 'Reliable service is built from repeatable systems, not marketing lines.',
      text:
        'We focus on trained manpower, prepared dispatch workflows, and careful handoffs so the customer experience stays steady.'
    },
    stats: [
      { value: 'Verified', label: 'Handling Teams' },
      { value: 'Multi-Service', label: 'Home to Office Support' },
      { value: 'Secure', label: 'Packing Discipline' }
    ],
    highlights: [
      { title: 'Trained manpower', text: 'Teams are guided around safe packing, disciplined lifting, and placement support.', icon: Users },
      { title: 'Flexible service mix', text: 'Residential, corporate, vehicle, and route-based moving needs are all supported.', icon: Building2 },
      { title: 'Quality-first materials', text: 'Material and handling quality help reduce damage risk and improve confidence.', icon: ShieldCheck }
    ],
    featureCards: [
      { title: 'Fast coordination', text: 'Our response style helps customers move from inquiry to planning quickly.' },
      { title: 'Scalable coverage', text: 'The service model supports both small moves and more complex route-based jobs.' },
      { title: 'Customer reassurance', text: 'Support stays available before, during, and after transport activity.' }
    ]
  },
  achievements: {
    seoTitle: 'Achievements',
    seoDescription: 'Review key milestones, service growth, and customer-focused achievements from Shree Shyam Cargo Packers & Movers.',
    eyebrow: 'Achievements',
    title: 'Our growth has come from consistent delivery, strong referrals, and operational discipline.',
    description:
      'The milestones we value most are the ones customers feel directly: safer moves, better communication, and the confidence to recommend our service to others.',
    spotlight: {
      label: 'Milestones',
      title: 'Achievements matter when they reflect trust earned in real customer situations.',
      text:
        'We measure progress by sustained service quality, repeat inquiries, and stronger route confidence across the markets we serve.'
    },
    stats: [
      { value: '12K+', label: 'Moves Completed' },
      { value: '30+', label: 'Cities Covered' },
      { value: 'Growing', label: 'Repeat Customer Base' }
    ],
    highlights: [
      { title: 'Consistent delivery record', text: 'A strong completion history has helped the brand grow through referrals and repeat trust.', icon: Trophy },
      { title: 'Expanding city network', text: 'Coverage has steadily widened across important relocation routes and customer demand centers.', icon: BadgeCheck },
      { title: 'Premium service positioning', text: 'The brand has moved from basic logistics support toward a more polished relocation experience.', icon: Star }
    ],
    featureCards: [
      { title: 'Brand credibility', text: 'Service quality has helped build confidence in competitive relocation markets.' },
      { title: 'Operational refinement', text: 'Learning from each move improves consistency across future jobs.' },
      { title: 'Customer advocacy', text: 'Strong feedback turns delivered service into long-term reputation.' }
    ]
  },
  'customer-stories': {
    seoTitle: 'Customer Stories',
    seoDescription: 'Read how families and businesses experienced organized, supportive relocation service with Shree Shyam Cargo Packers & Movers.',
    eyebrow: 'Customer Stories',
    title: 'The strongest proof of service quality is how customers describe the experience after the move.',
    description:
      'These stories reflect the outcomes customers value most: less stress, safer handling, and a team that stays responsive when timing and coordination matter.',
    spotlight: {
      label: 'Real Experiences',
      title: 'Customers remember professionalism long after the boxes are delivered.',
      text:
        'That is why our service style focuses on reassurance, respectful coordination, and predictable execution from pickup to delivery.'
    },
    stats: [
      { value: 'Families', label: 'Household Clients Served' },
      { value: 'Businesses', label: 'Office Moves Supported' },
      { value: 'Trusted', label: 'Vehicle Handling Experience' }
    ],
    highlights: [
      { title: 'Home relocation confidence', text: 'Families value careful handling, dependable timing, and a calmer moving day experience.', icon: HeartHandshake },
      { title: 'Business continuity support', text: 'Office clients appreciate organized shifting with minimal operational disruption.', icon: Building2 },
      { title: 'Intercity peace of mind', text: 'Customers moving across cities want communication and clarity as much as transport itself.', icon: Truck }
    ],
    featureCards: [
      { title: 'Reassuring coordination', text: 'Customers feel supported because updates stay practical and timely.' },
      { title: 'Safer handling outcomes', text: 'Good packing and disciplined loading show up clearly in customer feedback.' },
      { title: 'Recommendation value', text: 'Satisfied clients often become the brand’s most credible promoters.' }
    ]
  },
  'news-updates': {
    seoTitle: 'News & Updates',
    seoDescription: 'Stay informed with company news, service updates, relocation guidance, and operating improvements from Shree Shyam Cargo Packers & Movers.',
    eyebrow: 'News & Updates',
    title: 'Updates that help customers understand how our service keeps improving.',
    description:
      'This section highlights service improvements, route expansion signals, planning tips, and customer-facing changes that strengthen the overall relocation experience.',
    spotlight: {
      label: 'Latest Signals',
      title: 'Premium brands stay visible by sharing progress, guidance, and customer-focused improvements.',
      text:
        'We use updates to keep visitors informed about service developments and the standards shaping our moving experience.'
    },
    stats: [
      { value: 'Service', label: 'Updates Shared' },
      { value: 'Planning', label: 'Advice for Movers' },
      { value: 'Route', label: 'Coverage Highlights' }
    ],
    highlights: [
      { title: 'Service announcements', text: 'Customers can quickly understand what has improved or expanded across operations.', icon: Newspaper },
      { title: 'Moving guidance', text: 'Helpful updates reduce confusion around planning, preparation, and timing.', icon: Sparkles },
      { title: 'Brand transparency', text: 'Open communication builds stronger confidence before customers book a move.', icon: BadgeCheck }
    ],
    featureCards: [
      { title: 'Operational notes', text: 'Share improvements customers should know before planning their route.' },
      { title: 'Preparation tips', text: 'Simple moving guidance helps customers feel more ready and informed.' },
      { title: 'Market visibility', text: 'Consistent updates make the company feel active, modern, and engaged.' }
    ]
  }
};

export const newsUpdateItems = [
  {
    title: 'Premium packing workflow refinements',
    text: 'We continue improving packing discipline and handoff quality so household and office moves feel more secure from the start.'
  },
  {
    title: 'Faster quote coordination for key routes',
    text: 'Popular intercity corridors are being supported with quicker callback and route clarification for customer convenience.'
  },
  {
    title: 'Customer-first communication updates',
    text: 'Clearer guidance before dispatch helps customers understand pricing, timing, and support expectations more confidently.'
  }
];
