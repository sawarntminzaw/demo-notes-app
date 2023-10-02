import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: `New File . The time is ${new Date().toISOString()}`,
  };
});
