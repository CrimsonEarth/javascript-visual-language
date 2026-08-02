import { architectureIcons } from "./families/architecture.js";
import { controlFlowIcons } from "./families/control-flow.js";
import { dataCollectionIcons } from "./families/data-collections.js";
import { jsBasicsIcons } from "./families/js-basics.js";
import { systemsAgentIcons } from "./families/systems-agents.js";
import { typeSystemIcons } from "./families/type-system.js";
import { iconIds, type IconId } from "./ids.js";
import type { IconDefinition, IconFamilyId } from "./types.js";

export { iconIds };
export type { IconId };

export const icons = [
  ...jsBasicsIcons,
  ...dataCollectionIcons,
  ...typeSystemIcons,
  ...controlFlowIcons,
  ...architectureIcons,
  ...systemsAgentIcons,
] as readonly (IconDefinition & { readonly id: IconId })[];

const iconById = new Map<string, IconDefinition>(icons.map((icon) => [icon.id, icon]));

export function getIcon(id: string): IconDefinition | undefined {
  return iconById.get(id);
}

export function requireIcon(id: string): IconDefinition {
  const icon = getIcon(id);
  if (!icon) throw new Error(`Unknown visual-language icon: ${id}`);
  return icon;
}

export function iconsInFamily(family: IconFamilyId): readonly IconDefinition[] {
  return icons.filter((icon) => icon.family === family);
}
