import "./styles.css";
import {
  families,
  familyById,
  icons,
  renderIconSvg,
  type IconDefinition,
  type IconFamilyId,
} from "../src/index.js";

type ActiveFamily = "all" | IconFamilyId;

const requiredElement = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Missing catalog element: ${id}`);
  return element as T;
};

const search = requiredElement<HTMLInputElement>("search");
const filters = requiredElement<HTMLDivElement>("filters");
const matrix = requiredElement<HTMLDivElement>("matrix");
const count = requiredElement<HTMLOutputElement>("count");
const copyStatus = requiredElement<HTMLParagraphElement>("copy-status");

let activeFamily: ActiveFamily = "all";

const normalizedSearchText = (icon: IconDefinition): string =>
  `${icon.name} ${icon.definition} ${icon.visualCue} ${icon.avoid}`.toLowerCase();

const matchesCurrentView = (icon: IconDefinition): boolean => {
  const query = search.value.trim().toLowerCase();
  return (
    (activeFamily === "all" || icon.family === activeFamily) &&
    (!query || normalizedSearchText(icon).includes(query))
  );
};

function renderFilters(): void {
  const options: ReadonlyArray<{ id: ActiveFamily; name: string }> = [
    { id: "all", name: "All" },
    ...families,
  ];

  filters.replaceChildren(
    ...options.map((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter";
      button.textContent = option.name;
      button.dataset.family = option.id;
      button.setAttribute("aria-pressed", String(option.id === activeFamily));
      button.addEventListener("click", () => {
        activeFamily = option.id;
        renderFilters();
        renderCatalog();
      });
      return button;
    }),
  );
}

function iconCard(icon: (typeof icons)[number]): HTMLElement {
  const family = familyById.get(icon.family);
  if (!family) throw new Error(`Unknown family for icon ${icon.id}: ${icon.family}`);

  const card = document.createElement("article");
  card.className = "concept-card";
  card.id = `icon-${icon.id}`;
  card.style.setProperty("--accent", family.accent);
  card.style.setProperty("--accent-soft", family.soft);
  card.innerHTML = `
    <div class="card-top">
      <div class="icon-well">${renderIconSvg(icon.id, { size: 40, surface: family.soft })}</div>
      <span class="family">${family.name}</span>
    </div>
    <h3>${icon.name}</h3>
    <p class="definition">${icon.definition}</p>
    <dl class="icon-language">
      <div><dt>Visual cue</dt><dd>${icon.visualCue}</dd></div>
      <div><dt>Avoid</dt><dd>${icon.avoid}</dd></div>
    </dl>
    <button class="copy-button" type="button" data-icon-id="${icon.id}">Copy SVG</button>
  `;

  const copyButton = card.querySelector<HTMLButtonElement>(".copy-button");
  copyButton?.addEventListener("click", async () => {
    const svg = renderIconSvg(icon.id, { label: icon.name });
    try {
      await navigator.clipboard.writeText(svg);
      copyStatus.textContent = `${icon.name} SVG copied.`;
    } catch {
      copyStatus.textContent = `Clipboard access is unavailable. Use the ${icon.id}.svg export from the package.`;
    }
  });
  return card;
}

function renderCatalog(): void {
  const visible = icons.filter(matchesCurrentView);
  count.value = `${visible.length} of ${icons.length} concepts`;
  count.textContent = count.value;
  copyStatus.textContent = "";

  if (visible.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No concepts match that search.";
    matrix.replaceChildren(empty);
    return;
  }

  matrix.replaceChildren(...visible.map(iconCard));
}

requiredElement("brand-mark").innerHTML = renderIconSvg("interface", { size: 23 });
requiredElement("grammar-container").innerHTML = renderIconSvg("module", { size: 28 });
requiredElement("grammar-motion").innerHTML = renderIconSvg("workflow", { size: 28 });
requiredElement("grammar-badge").innerHTML = renderIconSvg("scheduled-job", { size: 28 });

search.addEventListener("input", renderCatalog);
renderFilters();
renderCatalog();
