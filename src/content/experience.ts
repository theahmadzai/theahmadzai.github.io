export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  lead?: string;
  bullets: string[];
  stack: string[];
  logoLight?: string;
  logoDark?: string;
  url?: string;
};

export const experience: Experience[] = [
  {
    company: "Per Diem",
    role: "Senior Software Developer",
    start: "Jun 2021",
    end: "Present",
    location: "New York, USA (Remote)",
    url: "https://tryperdiem.com",
    logoLight: "/logos/perdiem-light.svg",
    logoDark: "/logos/perdiem-dark.svg",
    lead: "Led development of white-label multi-tenant restaurant apps (React Native) including custom theming and automated Fastlane publishing pipelines. Managed complex app state using Redux and Redux Sagas.",
    bullets: [
      "Built automated Fastlane publishing pipeline that generated and deployed 800+ white-label iOS and Android apps to the App Store and Google Play, eliminating manual release intervention.",
      "Architected payment infrastructure integrating Stripe and Square POS, handling transaction processing, recurring subscription billing, processing refunds and automated fee calculations via webhooks for 2,000+ locations.",
      "Built delivery integrations with Uber Direct and DoorDash Drive APIs, enabling last-mile delivery with real-time order tracking and status webhooks at scale.",
      "Built pickup and delivery scheduling including time-slot generation, restricted dates, and per-merchant availability rules - handling timezone edge cases and real-time slot updates.",
      "Designed and published open-source npm packages including an ORM with built-in Redis-based caching, order-pacing, and order-scheduling libraries optimized for high-throughput order processing across 800+ merchants and 1M+ users.",
      "Engineered a shared caching layer on Redis with 95% hit rate on frequently accessed objects, reducing database read load under peak traffic.",
      "Built an async image processing pipeline using AWS SQS and BullMQ to sync inventory and transform images at scale.",
      "Maintained production RESTful APIs (Node.js, TypeScript) serving core API, scheduling system, and referrals to web and mobile clients.",
      "Implemented i18n across backend emails and push notifications for white-label multi-tenant apps.",
    ],
    stack: [
      "React Native",
      "Node.js",
      "TypeScript",
      "Redux",
      "Redux Sagas",
      "Stripe",
      "Square POS",
      "Uber Direct",
      "DoorDash Drive",
      "Redis",
      "AWS SQS",
      "BullMQ",
      "Fastlane",
      "npm",
    ],
  },
];
