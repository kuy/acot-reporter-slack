import { createReporterFactory } from "@acot/reporter";

export default createReporterFactory(() => (runner) => {
  runner.on("setup:start", async () => {});

  runner.on("setup:complete", async () => {});

  runner.on("connect:start", async () => {});

  runner.on("connect:complete", async () => {});

  runner.on("collect:start", async () => {});

  runner.on("collect:complete", async () => {});

  runner.on("launch:start", async () => {});

  runner.on("launch:complete", async () => {});

  runner.on("audit:start", async () => {});

  runner.on("test:complete", async () => {});

  runner.on("audit:complete", async () => {});
});
