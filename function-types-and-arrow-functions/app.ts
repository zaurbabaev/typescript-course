function hello() {
  console.log("Hello Typescript");
}

const message: () => void = hello;
message();

function sum(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x - y;
}

let op: (x: number, y: number) => number;

op = sum;
console.log(op(4, 2));

op = subtract;
console.log(op(6, 4));

let res = subtract(12, 3);
console.log(res);

function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number,
) {
  return operation(a, b);
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return a / b;
}

console.log(calculate(12, 4, multiply));
console.log(calculate(12, 3.2, divide));

const multiply2 = (a: number, b: number): number => a * b;
console.log(calculate(12, 4, multiply2));

console.log(calculate(5, 3, (x, y) => x * y));
console.log(calculate(4, 6, (x, y) => x / y));
console.log(calculate(12, 6, (x, y) => x + y));




