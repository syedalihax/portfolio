import { spawn } from "node:child_process";
import path from "node:path";

const mode = process.argv[2] === "start" ? "start" : "dev";
let port = "3000";
let host = "0.0.0.0";

for (const arg of process.argv.slice(3)) {
  if (arg.startsWith("--port=")) {
    port = arg.slice("--port=".length);
  } else if (arg.startsWith("--host=")) {
    host = arg.slice("--host=".length);
  }
}

const nextBin = path.resolve(process.cwd(), "node_modules", ".bin", "next");
const child = spawn(nextBin, [mode, "-p", port, "-H", host], {
  stdio: "inherit",
  env: process.env,
});

const forwardSignal = (signal) => {
  if (!child.killed) {
    child.kill(signal);
  }
};

process.on("SIGINT", () => forwardSignal("SIGINT"));
process.on("SIGTERM", () => forwardSignal("SIGTERM"));

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
