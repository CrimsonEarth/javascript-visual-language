import { describe, expect, it } from "vitest";
import { renderIconSvg } from "../src/index.js";

describe("SVG renderer", () => {
  it("makes unlabeled icons decorative by default", () => {
    const svg = renderIconSvg("module");
    expect(svg).toContain('viewBox="0 0 24 24"');
    expect(svg).toContain('stroke-width="1.45"');
    expect(svg).toContain('aria-hidden="true"');
    expect(svg).toContain('focusable="false"');
  });

  it("makes labeled icons accessible and escapes attributes", () => {
    const svg = renderIconSvg("contract", {
      label: 'Contract <approved> & "durable"',
      className: 'icon "large"',
      color: "#315d82",
      surface: "#fffefa",
      size: 32,
    });
    expect(svg).toContain('role="img"');
    expect(svg).toContain('aria-label="Contract &lt;approved&gt; &amp; &quot;durable&quot;"');
    expect(svg).toContain('class="icon &quot;large&quot;"');
    expect(svg).toContain('width="32" height="32"');
    expect(svg).toContain("color:#315d82;");
    expect(svg).toContain("--jvl-surface:#fffefa;");
    expect(svg).not.toContain("aria-hidden");
  });

  it("rejects invalid dimensions", () => {
    expect(() => renderIconSvg("module", { size: 0 })).toThrow("positive finite number");
    expect(() => renderIconSvg("module", { size: Number.NaN })).toThrow(
      "positive finite number",
    );
  });
});
