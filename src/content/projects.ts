export type ProjectTag = "work" | "hobby" | "school" | "volunteer";

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  url?: string;
  tags?: ProjectTag[];
};

export const projects: Project[] = [
  {
    name: "Order Pacing",
    blurb:
      "Published npm package for pickup and delivery order throttling and pacing at scale.",
    stack: ["Node.js"],
    url: "https://github.com/PerDiemInc/order-pacing",
    tags: ["work"],
  },
  {
    name: "Per Diem Models",
    blurb:
      "Shared database model and caching layer on Knex.js and Redis (published npm package).",
    stack: ["Node.js", "Redis", "Knex.js"],
    tags: ["work"],
  },
  {
    name: "Recommendation Engine",
    blurb:
      "AWS-backed product recommendation engine for white-label restaurant apps.",
    stack: ["Python", "AWS"],
    url: "https://github.com/theahmadzai/recommendation-engine",
    tags: ["hobby"],
  },
  {
    name: "Image Panda",
    blurb:
      "Cross-platform desktop app for batch image compression - offline + TinyPNG.",
    stack: ["Electron", "React"],
    url: "https://github.com/theahmadzai/image-panda",
    tags: ["hobby"],
  },
  {
    name: "Immortal OS",
    blurb: "Hobby boot loader written from scratch - exploring low-level systems.",
    stack: ["Assembly", "C"],
    url: "https://github.com/theahmadzai/immortal-os",
    tags: ["hobby"],
  },
  {
    name: "Quran",
    blurb: "Quran.com API helper module for PHP developers.",
    stack: ["PHP"],
    url: "https://github.com/theahmadzai/quran",
    tags: ["hobby"],
  },
  {
    name: "Blood Cell Image Classifier",
    blurb:
      "Trained ML models on a blood-cell dataset using Canada's HPC supercomputer for a graduate course.",
    stack: ["Python", "PyTorch", "HPC"],
    url: "https://github.com/theahmadzai/mld-advanced-project",
    tags: ["school"],
  },
  {
    name: "ANSS Foundation",
    blurb: "Community support platform with Stripe donation integration.",
    stack: ["Gatsby", "Contentful", "Stripe"],
    url: "https://github.com/theahmadzai/anss",
    tags: ["volunteer"],
  },
];
