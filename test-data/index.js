const path = require("path");
const fs = require("fs");

const include = name => fs.readFileSync(path.resolve(__dirname, name), "utf8");
const includeTest = name => ({
  name,
  input: include(`${name}.in`),
  out: include(`${name}.out`)
});

export const testCases = [
  "cycle",
  "impossible",
  "simple",
  "star",
  "twice",
  "simple2",
  "plain"
].map(includeTest);
