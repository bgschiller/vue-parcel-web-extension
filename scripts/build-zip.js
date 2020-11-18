#!/usr/bin/env node

const path = require("path");
const { execSync } = require("child_process");

const extPackageJson = require("../package.json");

const DEST_DIR = path.join(__dirname, "../dist");
const DEST_ZIP_DIR = path.join(__dirname, "../dist-zip");

const extractExtensionData = () => ({
  name: extPackageJson.name,
  version: extPackageJson.version,
});

const main = () => {
  const { name, version } = extractExtensionData();
  const zipFilename = `${name}-v${version}.zip`;

  execSync(
    `mkdir -p ${DEST_ZIP_DIR} && zip --junk-paths ${DEST_ZIP_DIR}/${zipFilename} ${DEST_DIR}/*`
  );
};

main();
