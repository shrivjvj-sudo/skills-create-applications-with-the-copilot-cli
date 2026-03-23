#!/usr/bin/env node
// CLI calculator
// Supported operations: addition (+), subtraction (-), multiplication (*), division (/)

const calc = require('./calculator');

function printHelp() {
  console.log('Usage:');
  console.log('  node src/index.js <operator> <num1> <num2>');
  console.log('  node src/index.js <num1> <operator> <num2>');
  console.log('\nOperators: +, -, *, / or add, subtract, multiply, divide');
  console.log('\nExamples:');
  console.log('  node src/index.js + 3 4');
  console.log('  node src/index.js 3 * 5');
}

function parseOperator(op) {
  if (!op) return null;
  op = op.toString().toLowerCase();
  if (['+', 'add', 'plus'].includes(op)) return 'add';
  if (['-', 'subtract', 'minus'].includes(op)) return 'subtract';
  if (['*', 'x', 'times', 'multiply'].includes(op)) return 'multiply';
  if (['/', 'divide', 'div'].includes(op)) return 'divide';
  return null;
}

const rawArgs = process.argv.slice(2);

if (rawArgs.length !== 3) {
  printHelp();
  process.exit(rawArgs.length === 0 ? 0 : 1);
}

let opArg, aArg, bArg;

// Allow both: <operator> <a> <b>  OR  <a> <operator> <b>
const tryFirstAsOperator = parseOperator(rawArgs[0]);
if (tryFirstAsOperator) {
  opArg = tryFirstAsOperator;
  aArg = rawArgs[1];
  bArg = rawArgs[2];
} else {
  const trySecondAsOperator = parseOperator(rawArgs[1]);
  if (trySecondAsOperator) {
    opArg = trySecondAsOperator;
    aArg = rawArgs[0];
    bArg = rawArgs[2];
  }
}

if (!opArg) {
  console.error('Error: Unknown operator.');
  printHelp();
  process.exit(1);
}

const a = Number(aArg);
const b = Number(bArg);
if (!isFinite(a) || !isFinite(b)) {
  console.error('Error: Both operands must be valid numbers.');
  process.exit(1);
}

try {
  let result;
  switch (opArg) {
    case 'add':
      result = calc.add(a, b);
      break;
    case 'subtract':
      result = calc.subtract(a, b);
      break;
    case 'multiply':
      result = calc.multiply(a, b);
      break;
    case 'divide':
      result = calc.divide(a, b);
      break;
    default:
      throw new Error('Unsupported operation');
  }
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
