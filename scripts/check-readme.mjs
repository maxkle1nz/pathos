import { readFileSync } from "node:fs";

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");
const required = [
  "# PATHOS",
  "## Quickstart",
  "## Install",
  "## What PATHOS Captures",
  "## Known Limits",
  "## Security",
];

const missing = required.filter((heading) => !readme.includes(heading));

if (missing.length > 0) {
  console.error(`README is missing required sections: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("README structure ok");
