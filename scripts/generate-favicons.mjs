import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";
import toIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = join(root, "public", "optimus-logo.svg");
const logoRaw = readFileSync(logoPath, "utf8");

/** Wordmark bounds match `optimus-logo.svg` root viewBox (same vectors as Hero). */
const LOGO_W = 1208;
const LOGO_H = 343;
/** Fit area inside favicon hex (user units 0–100 × ~115). */
const BOX_X = 0;
const BOX_Y = 22;
const BOX_W = 100;
const BOX_H = 72;

const innerMatch = logoRaw.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
const logoInner = (innerMatch ? innerMatch[1] : "").trim();

const s = Math.min(BOX_W / LOGO_W, BOX_H / LOGO_H);
const offsetX = BOX_X + (BOX_W - LOGO_W * s) / 2;
const offsetY = BOX_Y + (BOX_H - LOGO_H * s) / 2;
const t = (n) => Number(n.toPrecision(12));
const tx = Math.abs(offsetX) < 1e-6 ? 0 : t(offsetX);

const faviconHexSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115.47">
  <defs>
    <clipPath id="hex-clip"><polygon points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87"/></clipPath>
  </defs>
  <polygon points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87" fill="#ffffff"/>
  <g clip-path="url(#hex-clip)">
    <g transform="translate(${tx} ${t(offsetY)}) scale(${t(s)})">
${logoInner}
    </g>
  </g>
</svg>
`;

const outHexPath = join(root, "public", "favicon-hex.svg");
writeFileSync(outHexPath, faviconHexSvg, "utf8");

const svg = readFileSync(outHexPath);

/** High density — .ico / touch icons are raster only; keep them sharp. */
const rasterOpts = { density: 600 };

const png32 = await sharp(svg, rasterOpts)
  .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toBuffer();
const png48 = await sharp(svg, rasterOpts)
  .resize(48, 48, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toBuffer();
writeFileSync(join(root, "public", "favicon.ico"), await toIco([png32, png48]));

await sharp(svg, rasterOpts)
  .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile(join(root, "public", "apple-touch-icon.png"));
