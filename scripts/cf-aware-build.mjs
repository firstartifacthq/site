import { spawnSync } from "node:child_process";

/**
 * Workers Builds runs `npm run build` then `npx wrangler deploy`.
 * OpenNext needs its own build (standalone Next + worker bundle) before deploy.
 *
 * When OpenNext invokes this script it already set NEXT_PRIVATE_STANDALONE, so
 * we only run `next build`. Otherwise (Workers Builds / direct npm run build)
 * we run the full OpenNext Cloudflare build.
 */
const isNestedOpenNextBuild = process.env.NEXT_PRIVATE_STANDALONE === "true";
const command = isNestedOpenNextBuild ? "next" : "opennextjs-cloudflare";

const result = spawnSync(command, ["build"], {
  stdio: "inherit",
  shell: true,
  env: process.env,
});

process.exit(result.status ?? 1);
