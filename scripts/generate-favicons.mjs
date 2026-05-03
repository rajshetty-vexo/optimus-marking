import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";
import toIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = join(root, "public", "optimus-logo.svg");
const svg = readFileSync(svgPath);

const png32 = await sharp(svg, { density: 300 }).resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();
const png48 = await sharp(svg, { density: 300 }).resize(48, 48, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();
writeFileSync(join(root, "public", "favicon.ico"), await toIco([png32, png48]));

await sharp(svg, { density: 300 })
  .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(join(root, "public", "apple-touch-icon.png"));
