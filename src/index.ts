import { createReporterFactory } from "@acot/reporter";
import { IncomingWebhook } from "@slack/webhook";

const url = "";

export default createReporterFactory(() => async (runner) => {
  const webhook = new IncomingWebhook(url);

  await webhook.send(
    `Audit by acot (core: ${runner.version.core}, runner: ${runner.version.self})`
  );

  runner.on("audit:complete", async ([summary]) => {
    const body = summary.results
      .map((result) => {
        return `${result.url}:  :white_check_mark: ${result.passCount}  :x: ${result.errorCount}  :warning: ${result.warningCount}`;
      })
      .join("\n");
    await webhook.send(body);
  });
});
