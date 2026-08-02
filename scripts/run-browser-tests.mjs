import { spawn } from "node:child_process";
import { createServer } from "vite";

const server = await createServer({
  configFile: "vite.config.ts",
  server: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
  },
});

await server.listen();
console.log("Catalog test server listening at http://127.0.0.1:4173");

try {
  const exitCode = await new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      ["node_modules/@playwright/test/cli.js", "test"],
      {
        stdio: "inherit",
        env: { ...process.env, JVL_EXTERNAL_TEST_SERVER: "1" },
      },
    );
    child.once("error", reject);
    child.once("exit", (code) => resolve(code ?? 1));
  });
  if (exitCode !== 0) process.exitCode = exitCode;
} finally {
  await server.close();
}
