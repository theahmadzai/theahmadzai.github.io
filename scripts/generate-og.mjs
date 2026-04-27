// Generates public/og.png — the social preview card.
// Run with: npm run gen:og

import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const AVATAR = resolve(ROOT, "public/avatar.png");
const OUTPUT = resolve(ROOT, "public/og.png");

const W = 1200;
const H = 630;
const AVATAR_SIZE = 320;
const AVATAR_X = 80;
const AVATAR_Y = (H - AVATAR_SIZE) / 2; // 155
const TEXT_X = AVATAR_X + AVATAR_SIZE + 60; // 460

const COLOR_BG = "#FAF7F2";
const COLOR_FG = "#0A1628";
const COLOR_FG_MUTED = "#475569";
const COLOR_ACCENT = "#2563EB";

const NAME = "MUHAMMAD JAVED";
const TITLE_LINE_1 = "Senior Software Developer";
const TITLE_LINE_2 = "@ Per Diem (YCW21)";
const LOCATION = "Toronto, Canada";
const URL = "javedahmadzai.com";

// Build the background SVG. Avatar is composited separately as a rounded rect.
const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${COLOR_BG}"/>

  <!-- left accent stripe -->
  <rect x="0" y="0" width="16" height="${H}" fill="${COLOR_ACCENT}"/>

  <!-- top-right </> mark -->
  <text x="${W - 60}" y="100" text-anchor="end"
        font-family="ui-monospace, Menlo, Consolas, monospace"
        font-size="64" font-weight="700" fill="${COLOR_ACCENT}">&lt;/&gt;</text>

  <!-- name -->
  <text x="${TEXT_X}" y="260"
        font-family="ui-monospace, Menlo, Consolas, monospace"
        font-size="68" font-weight="700" fill="${COLOR_FG}"
        letter-spacing="2">${NAME}</text>

  <!-- title line 1 -->
  <text x="${TEXT_X}" y="325"
        font-family="-apple-system, system-ui, sans-serif"
        font-size="34" font-weight="500" fill="${COLOR_FG}">${TITLE_LINE_1}</text>

  <!-- title line 2 (company + YC) -->
  <text x="${TEXT_X}" y="370"
        font-family="ui-monospace, Menlo, Consolas, monospace"
        font-size="30" font-weight="500" fill="${COLOR_ACCENT}">${TITLE_LINE_2}</text>

  <!-- location -->
  <text x="${TEXT_X}" y="420"
        font-family="ui-monospace, Menlo, Consolas, monospace"
        font-size="26" fill="${COLOR_FG_MUTED}">${LOCATION}</text>

  <!-- URL pinned bottom-right -->
  <text x="${W - 60}" y="${H - 60}" text-anchor="end"
        font-family="ui-monospace, Menlo, Consolas, monospace"
        font-size="26" fill="${COLOR_ACCENT}">${URL}</text>

  <!-- bottom border line -->
  <line x1="${TEXT_X}" y1="460" x2="${TEXT_X + 200}" y2="460"
        stroke="${COLOR_ACCENT}" stroke-width="3"/>
</svg>`;

// Round the avatar corners by masking with an SVG rect.
const avatarMask = `<svg xmlns="http://www.w3.org/2000/svg" width="${AVATAR_SIZE}" height="${AVATAR_SIZE}">
  <rect width="${AVATAR_SIZE}" height="${AVATAR_SIZE}" rx="20" ry="20" fill="white"/>
</svg>`;

const avatarRounded = await sharp(AVATAR)
  .resize(AVATAR_SIZE, AVATAR_SIZE)
  .composite([{ input: Buffer.from(avatarMask), blend: "dest-in" }])
  .png()
  .toBuffer();

// Drop shadow for the avatar (offset duplicate in accent color, behind).
const shadowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${AVATAR_SIZE}" height="${AVATAR_SIZE}">
  <rect width="${AVATAR_SIZE}" height="${AVATAR_SIZE}" rx="20" ry="20" fill="${COLOR_ACCENT}"/>
</svg>`;

await sharp(Buffer.from(bgSvg))
  .composite([
    { input: Buffer.from(shadowSvg), left: AVATAR_X + 8, top: AVATAR_Y + 8 },
    { input: avatarRounded, left: AVATAR_X, top: AVATAR_Y },
  ])
  .png({ compressionLevel: 9 })
  .toFile(OUTPUT);

const stat = readFileSync(OUTPUT);
console.log(`✓ Wrote ${OUTPUT} (${(stat.length / 1024).toFixed(1)} KB, ${W}x${H})`);
