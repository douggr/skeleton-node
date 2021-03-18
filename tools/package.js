/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/unbound-method */

const { existsSync, mkdirSync, writeFileSync } = require("fs");
const { resolve: $R } = require("path");
const ncp = require("ncp").ncp;
const output = $R(__dirname, "../dist");
const package = require("../package.json");

if (!existsSync(output)) {
  mkdirSync(output, { recursive: true });
}

["bin", "README.md", "CHANGELOG.md", "LICENSE"].forEach((path) => {
  const copy = $R(__dirname, "..", path);

  if (existsSync(copy)) {
    ncp(copy, $R(output, path));
  }
});

(package.ncp || []).forEach((path) => {
  const { dest, source } = path;

  ncp($R(__dirname, "..", source), $R(output, dest || source));
});

const json = {
  ...package,

  "devDependencies": undefined,
  "lint-staged": undefined,
  "ncp": undefined,
  "scripts-production": undefined,
  "scripts": package["scripts-production"],
};

writeFileSync($R(output, "package.json"), JSON.stringify(json, null, 2));
