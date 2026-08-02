import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry",
  },
  ...(process.env.JVL_EXTERNAL_TEST_SERVER
    ? {}
    : {
        webServer: {
          command: "npx vite --host 127.0.0.1 --port 4173",
          cwd: ".",
          url: "http://127.0.0.1:4173",
          reuseExistingServer: !process.env.CI,
          timeout: 30_000,
          stdout: "pipe" as const,
          stderr: "pipe" as const,
        },
      }),
});
