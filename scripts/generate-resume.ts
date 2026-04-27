// Generates public/resume.pdf - ATS-friendly resume with retro accents.
// Run with: npm run gen:resume

import { createWriteStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";
import { education } from "../src/content/education";
import { experience } from "../src/content/experience";
import { profile } from "../src/content/profile";
import { type ProjectTag, projects } from "../src/content/projects";
import { skills } from "../src/content/skills";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, "../public/resume.pdf");
const PIXEL_FONT = resolve(__dirname, "assets/VT323-Regular.ttf");

const PHONE = "+1 (437) 733-0177";

const PAGE_W = 612;
const MARGIN = 40;
const CONTENT_W = PAGE_W - MARGIN * 2;

const ACCENT = "#2563EB";
const FG = "#0A1628";
const MUTED = "#475569";

const TAG_COLORS: Record<ProjectTag, string> = {
  work: "#2563EB",
  hobby: "#a855f7",
  school: "#10b981",
  volunteer: "#f59e0b",
};

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
  info: {
    Title: `${profile.name} - Resume`,
    Author: profile.name,
    Subject: "Resume",
  },
});

doc.registerFont("Pixel", PIXEL_FONT);

doc.pipe(createWriteStream(OUTPUT));

function sectionHeader(label: string) {
  doc.moveDown(0.25);
  const y = doc.y;
  doc
    .font("Pixel")
    .fontSize(20)
    .fillColor(ACCENT)
    .text(label.toLowerCase(), MARGIN, y, { lineBreak: false });
  const ruleY = y + 21;
  doc
    .moveTo(MARGIN, ruleY)
    .lineTo(MARGIN + CONTENT_W, ruleY)
    .lineWidth(1.2)
    .strokeColor(ACCENT)
    .stroke();
  doc.x = MARGIN;
  doc.y = ruleY + 6;
  doc.fillColor(FG);
}

function rowSplit(left: string, right: string, leftBold = true) {
  const bottom = doc.page.height - doc.page.margins.bottom;
  if (doc.y + 24 > bottom) {
    doc.addPage();
  }
  const startY = doc.y;
  doc
    .font(leftBold ? "Helvetica-Bold" : "Helvetica")
    .fontSize(10.5)
    .fillColor(FG)
    .text(left, MARGIN, startY, { width: CONTENT_W * 0.7, continued: false });
  const leftEndY = doc.y;
  doc
    .font("Courier")
    .fontSize(9.5)
    .fillColor(MUTED)
    .text(right, MARGIN + CONTENT_W * 0.7, startY, {
      width: CONTENT_W * 0.3,
      align: "right",
    });
  doc.x = MARGIN;
  doc.y = Math.max(leftEndY, doc.y);
  doc.fillColor(FG);
}

// === Top-right </> mark. ===
doc
  .font("Pixel")
  .fontSize(28)
  .fillColor(ACCENT)
  .text("</>", PAGE_W - MARGIN - 60, MARGIN - 6, {
    width: 60,
    align: "right",
    lineBreak: false,
  });

// === Hero: name in pixel font. ===
doc.x = MARGIN;
doc.y = MARGIN;
doc.font("Pixel").fontSize(44).fillColor(FG).text(profile.name, MARGIN, MARGIN, {
  width: CONTENT_W - 80,
  lineBreak: false,
});

// === Title + location. ===
doc.moveDown(0.1);
doc
  .font("Helvetica")
  .fontSize(11)
  .fillColor(MUTED)
  .text(`${profile.title}  ·  ${profile.location}`);

// === Contact: phone + clickable email. ===
doc.moveDown(0.4);
doc.font("Courier").fontSize(9.5).fillColor(MUTED);
doc.text(`${PHONE}  •  `, { continued: true });
doc.fillColor(ACCENT).text(profile.email, {
  link: `mailto:${profile.email}`,
  underline: false,
});

// === Links: clickable per-segment. ===
doc.font("Courier").fontSize(9.5);
doc.fillColor(ACCENT).text("linkedin.com/in/theahmadzai", {
  link: profile.socials.linkedin,
  underline: false,
  continued: true,
});
doc.fillColor(MUTED).text("  •  ", { continued: true });
doc.fillColor(ACCENT).text("github.com/theahmadzai", {
  link: profile.socials.github,
  underline: false,
  continued: true,
});
doc.fillColor(MUTED).text("  •  ", { continued: true });
doc.fillColor(ACCENT).text("javedahmadzai.com", {
  link: "https://javedahmadzai.com",
  underline: false,
});
doc.fillColor(FG);

// === Summary ===
sectionHeader("summary");
doc.font("Helvetica").fontSize(10).fillColor(FG).text(profile.about, {
  align: "justify",
  lineGap: 1,
});

// === Experience ===
sectionHeader("experience");
for (const role of experience) {
  rowSplit(role.company, `${role.start} - ${role.end}`);
  const subtitle = role.location ? `${role.role}  ·  ${role.location}` : role.role;
  doc.font("Helvetica-Oblique").fontSize(10).fillColor(MUTED).text(subtitle);
  doc.moveDown(0.2);
  if (role.lead) {
    doc.font("Helvetica").fontSize(10).fillColor(FG).text(role.lead, { lineGap: 1 });
    doc.moveDown(0.25);
  }
  for (const bullet of role.bullets) {
    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor(FG)
      .text(`•  ${bullet}`, {
        indent: 6,
        align: "left",
        lineGap: 1,
        paragraphGap: 3,
      });
  }
  doc.moveDown(0.3);
}

// === Projects ===
sectionHeader("projects");
for (const project of projects) {
  // Force page break if too close to bottom for at least name + tag + blurb.
  const bottom = doc.page.height - doc.page.margins.bottom;
  if (doc.y + 50 > bottom) {
    doc.addPage();
  }

  // Bold name (clickable if URL).
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(FG).text(project.name, {
    continued: !!project.url,
    link: project.url,
    underline: false,
  });
  if (project.url) {
    doc
      .font("Courier")
      .fontSize(8.5)
      .fillColor(ACCENT)
      .text(`  ${project.url.replace(/^https?:\/\//, "")}`, {
        link: project.url,
        underline: false,
      });
  }

  // Tag chips below name — small bordered boxes, color-coded.
  if (project.tags && project.tags.length > 0) {
    doc.moveDown(0.25);
    const chipFontSize = 7.5;
    const padX = 4;
    const padY = 2.5;
    const gap = 5;
    const chipH = chipFontSize + padY * 2;
    const startY = doc.y;
    let x = MARGIN;

    doc.font("Courier-Bold").fontSize(chipFontSize);
    for (const tag of project.tags) {
      const text = tag.toUpperCase();
      const textW = doc.widthOfString(text);
      const chipW = textW + padX * 2;
      doc
        .lineWidth(0.6)
        .strokeColor(TAG_COLORS[tag])
        .rect(x, startY, chipW, chipH)
        .stroke();
      doc
        .fillColor(TAG_COLORS[tag])
        .text(text, x + padX, startY + padY, { lineBreak: false });
      x += chipW + gap;
    }
    doc.x = MARGIN;
    doc.y = startY + chipH;
    doc.fillColor(FG);
    doc.moveDown(0.25);
  }

  doc.font("Helvetica").fontSize(10).fillColor(FG).text(project.blurb, {
    lineGap: 1,
  });
  doc
    .font("Helvetica-Oblique")
    .fontSize(9)
    .fillColor(MUTED)
    .text(project.stack.join(" · "));
  doc.moveDown(0.3);
}

// === Education ===
sectionHeader("education");
for (const edu of education) {
  rowSplit(edu.school, `${edu.start} - ${edu.end}`);
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(MUTED)
    .text(`${edu.degree} (${edu.field})`);
  doc.moveDown(0.25);
}

// === Skills ===
sectionHeader("skills");
for (const group of skills) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(FG).text(`${group.label}: `, {
    continued: true,
  });
  doc.font("Helvetica").fontSize(10).fillColor(FG).text(group.items.join(", "), {
    lineGap: 1,
    paragraphGap: 1,
  });
}

doc.end();

doc.on("end", () => {
  console.log(`✓ Wrote ${OUTPUT}`);
});
