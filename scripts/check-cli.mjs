import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const cli = join(root, "bin/pathos.mjs");
mkdirSync(join(root, ".pathos"), { recursive: true });
const temp = mkdtempSync(join(root, ".pathos/test-"));

function run(args) {
  return execFileSync("node", [cli, ...args], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

const status = JSON.parse(run(["status", "--json"]));
if (status.schema !== "pathos-session-status-v0") throw new Error("status schema mismatch");
if (!status.project) throw new Error("status missing project");

const handoffPath = join(temp, "PATHOS.md");
const handoff = JSON.parse(run(["handoff", "--write", handoffPath, "--json"]));
if (handoff.schema !== "pathos-handoff-write-v0") throw new Error("handoff schema mismatch");
if (!existsSync(handoffPath)) throw new Error("handoff file was not written");
if (!readFileSync(handoffPath, "utf8").includes("PATHOS Handoff")) throw new Error("handoff missing title");

let refusedOutsideWrite = false;
try {
  run(["handoff", "--write", "../pathos-outside.md", "--json"]);
} catch {
  refusedOutsideWrite = true;
}
if (!refusedOutsideWrite) throw new Error("handoff must refuse writes outside repo");

const scan = JSON.parse(run(["custodian", "scan", "--dry-run", "--json"]));
if (scan.schema !== "pathos-custodian-scan-v0") throw new Error("scan schema mismatch");
if (scan.dry_run !== true) throw new Error("scan must be dry-run");

const backupDir = join(temp, "backup");
const backup = JSON.parse(run(["custodian", "backup", "--out", backupDir, "--json"]));
if (backup.schema !== "pathos-custodian-backup-v0") throw new Error("backup schema mismatch");
if (!existsSync(join(backupDir, "manifest.json"))) throw new Error("backup manifest missing");

rmSync(temp, { recursive: true, force: true });
console.log("PATHOS CLI ok");
