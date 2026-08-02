import { requireIcon } from "./registry.js";
import type { IconId } from "./ids.js";
import {
  ICON_STROKE_LINECAP,
  ICON_STROKE_LINEJOIN,
  ICON_STROKE_WIDTH,
  ICON_VIEW_BOX,
} from "./tokens.js";
import type { RenderIconOptions } from "./types.js";

function escapeAttribute(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function validatedSize(size: number | undefined): number {
  if (size === undefined) return 24;
  if (!Number.isFinite(size) || size <= 0) {
    throw new Error("Icon size must be a positive finite number.");
  }
  return size;
}

export function renderIconSvg(id: IconId, options: RenderIconOptions = {}): string {
  const icon = requireIcon(id);
  const size = validatedSize(options.size);
  const classAttribute = options.className
    ? ` class="${escapeAttribute(options.className)}"`
    : "";
  const color = options.color ? `color:${escapeAttribute(options.color)};` : "";
  const surface = options.surface
    ? `--jvl-surface:${escapeAttribute(options.surface)};`
    : "";
  const styleAttribute = color || surface ? ` style="${color}${surface}"` : "";
  const accessibility = options.label
    ? ` role="img" aria-label="${escapeAttribute(options.label)}"`
    : ' aria-hidden="true" focusable="false"';

  return `<svg${classAttribute} viewBox="${ICON_VIEW_BOX}" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${ICON_STROKE_WIDTH}" stroke-linecap="${ICON_STROKE_LINECAP}" stroke-linejoin="${ICON_STROKE_LINEJOIN}"${styleAttribute}${accessibility}>${icon.body}</svg>`;
}
