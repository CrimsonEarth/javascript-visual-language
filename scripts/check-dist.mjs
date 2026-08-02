import { access, readFile, readdir } from "node:fs/promises";

const library = await import("../dist/index.js");
if (library.icons.length !== 74) {
  throw new Error(`Expected 74 compiled icons, received ${library.icons.length}.`);
}

const svgFiles = (await readdir("dist/svg")).filter((file) => file.endsWith(".svg"));
if (svgFiles.length !== library.icons.length) {
  throw new Error(`Expected ${library.icons.length} SVG exports, received ${svgFiles.length}.`);
}

await access("dist/index.d.ts");
await access("docs/index.html");
const catalog = await readFile("docs/index.html", "utf8");
if (!catalog.includes("JavaScript / TypeScript Visual Language")) {
  throw new Error("Built catalog is missing its title.");
}
if (/\b(?:src|href)="\/assets\//.test(catalog)) {
  throw new Error("Built catalog contains root-absolute assets and is not portable.");
}

console.log(`Distribution check passed: ${library.icons.length} icons and ${svgFiles.length} SVG exports.`);
