import { describe, expect, it } from "vitest";
import {
  families,
  getIcon,
  iconIds,
  icons,
  iconsInFamily,
  requireIcon,
  type IconFamilyId,
} from "../src/index.js";

const expectedFamilyCounts: Readonly<Record<IconFamilyId, number>> = {
  "js-basics": 11,
  "data-collections": 11,
  "type-system": 13,
  "control-flow": 12,
  architecture: 12,
  "systems-agents": 15,
};

describe("icon registry", () => {
  it("preserves the complete draft-03 vocabulary", () => {
    expect(icons).toHaveLength(74);
    for (const family of families) {
      expect(iconsInFamily(family.id)).toHaveLength(expectedFamilyCounts[family.id]);
    }
  });

  it("uses unique stable identifiers and names", () => {
    expect(new Set(icons.map((icon) => icon.id)).size).toBe(icons.length);
    expect(new Set(icons.map((icon) => icon.name)).size).toBe(icons.length);
    for (const icon of icons) {
      expect(icon.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
    expect(iconIds).toEqual(icons.map((icon) => icon.id));
  });

  it("keeps complete teaching metadata and trusted SVG geometry", () => {
    for (const icon of icons) {
      expect(icon.definition.length).toBeGreaterThan(20);
      expect(icon.visualCue.length).toBeGreaterThan(2);
      expect(icon.avoid.length).toBeGreaterThan(1);
      expect(icon.body.length).toBeGreaterThan(10);
      expect(icon.body).not.toContain("<svg");
      expect(icon.body).not.toContain("<script");
      expect(icon.body).not.toContain("var(--card)");
    }
  });

  it("supports optional lookup and explicit required lookup", () => {
    expect(getIcon("contract")?.name).toBe("Contract");
    expect(getIcon("does-not-exist")).toBeUndefined();
    expect(() => requireIcon("does-not-exist")).toThrow("Unknown visual-language icon");
  });
});
