const path = require('path');
const fs = require('fs');

const include = (name) =>
  fs.readFileSync(path.resolve(__dirname, name), 'utf8');
const includeTest = (name) => ({
  name,
  input: include(`${name}.in`),
  out: include(`${name}.out`),
});

// Possible cases
export const testCasesGood = [
  'simple',
  "star",
  "twice",
  "simple2",
  "plain"
].map(includeTest);

// Failing cases
export const testCasesBad = [
  'empty', // Empty input
  'invalid', // Unsupported input
  'cycle', // Graph with cycle
  'impossible' // Broken graph
].map(includeTest);
