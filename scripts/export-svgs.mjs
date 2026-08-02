import { mkdir, writeFile } from "node:fs/promises";
import { icons, renderIconSvg } from "../dist/index.js";

await mkdir("dist/svg", { recursive: true });
await Promise.all(
  icons.map((icon) =>
    writeFile(
      `dist/svg/${icon.id}.svg`,
      `${renderIconSvg(icon.id, { label: icon.name })}\n`,
      "utf8",
    ),
  ),
);

console.log(`Exported ${icons.length} SVG files.`);
