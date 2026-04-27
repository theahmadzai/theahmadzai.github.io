export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "React Native", "Next.js", "Redux", "Gatsby", "Electron"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Fastify", "Laravel", "GraphQL", "REST APIs"],
  },
  {
    label: "Databases & Caching",
    items: ["PostgreSQL", "MongoDB", "Redis", "Knex.js"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["AWS (CDK, Lambda)", "GCP", "Cloudflare", "Vercel", "Docker"],
  },
  {
    label: "Queueing & Scheduling",
    items: ["AWS SQS", "BullMQ", "Bree"],
  },
  {
    label: "DevOps & CI/CD",
    items: ["GitHub Actions", "Jenkins", "Fastlane"],
  },
  {
    label: "Payments & Integrations",
    items: ["Stripe", "Square POS", "Clover POS", "Uber Direct", "DoorDash Drive"],
  },
  {
    label: "Testing & Observability",
    items: [
      "Jest",
      "Mocha",
      "Chai",
      "Sinon",
      "Puppeteer",
      "Detox",
      "Sentry",
      "Bugsnag",
      "Mixpanel",
    ],
  },
];
