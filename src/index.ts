import { createReporterFactory } from "@acot/reporter";
import { IncomingWebhook } from "@slack/webhook";
import type { Schema } from "@acot/schema-validator";
import { validate } from "@acot/schema-validator";
const debug = require("debug")("kuy:reporter:slack");

type Options = {
  url: string;
};

const schema: Schema = {
  type: "object",
  properties: {
    url: {
      type: "string",
      format: "uri",
    },
  },
  required: ["url"],
  additionalProperties: false,
};

export default createReporterFactory<Options>((config) => async (runner) => {
  validate(schema, config.options, {
    name: "SlackReporter",
    base: "options",
  });

  debug("received valid options:", config.options);

  const webhook = new IncomingWebhook(config.options.url);

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
