export type IconFamilyId =
  | "js-basics"
  | "data-collections"
  | "type-system"
  | "control-flow"
  | "architecture"
  | "systems-agents";

export interface IconFamily {
  readonly id: IconFamilyId;
  readonly name: string;
  readonly description: string;
  readonly accent: string;
  readonly soft: string;
}

export interface IconDefinition {
  readonly id: string;
  readonly name: string;
  readonly family: IconFamilyId;
  readonly definition: string;
  readonly visualCue: string;
  readonly avoid: string;
  /** Trusted SVG child markup on the shared 24 by 24 coordinate system. */
  readonly body: string;
}

export interface RenderIconOptions {
  /** Accessible name. Omit only when the icon is decorative beside visible text. */
  readonly label?: string;
  readonly className?: string;
  readonly size?: number;
  readonly color?: string;
  /** Background used by punch-out modifier badges. */
  readonly surface?: string;
}
