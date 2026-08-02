import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  await page.goto("/");
  await expect(page).toHaveTitle("JavaScript / TypeScript Visual Language");
  expect(consoleErrors).toEqual([]);
});

test("browses and filters the complete vocabulary", async ({ page }) => {
  await expect(page.getByText("74 of 74 concepts")).toBeVisible();
  await expect(page.locator(".concept-card")).toHaveCount(74);

  const architecture = page.getByRole("button", { name: "Architecture", exact: true });
  await architecture.click();
  await expect(architecture).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".concept-card")).toHaveCount(12);
  await expect(page.getByText("12 of 74 concepts")).toBeVisible();

  await page.getByLabel("Search concepts").fill("business behavior");
  await expect(page.getByRole("heading", { name: "Domain service" })).toBeVisible();
});

test("searches all teaching metadata and exposes an empty state", async ({ page }) => {
  const search = page.getByLabel("Search concepts");
  await search.fill("repeated requests converge");
  await expect(page.locator(".concept-card")).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "Idempotency" })).toBeVisible();

  await search.fill("a concept that does not exist");
  await expect(page.getByText("No concepts match that search.")).toBeVisible();
});

test("keeps the catalog usable at a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const columns = await page.locator(".matrix").evaluate((element) =>
    getComputedStyle(element).gridTemplateColumns.split(" "),
  );
  expect(columns).toHaveLength(1);
  await expect(page.getByRole("heading", { name: "A visual language for how code behaves." })).toBeVisible();
});
