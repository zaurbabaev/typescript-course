function hello() {
    console.log("Hello Typescript");
}
var message = hello;
message();
function sum(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
var op;
op = sum;
console.log(op(4, 2));
op = subtract;
console.log(op(6, 4));
var res = subtract(12, 3);
console.log(res);
function calculate(a, b, operation) {
    return operation(a, b);
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log(calculate(12, 4, multiply));
console.log(calculate(12, 3.2, divide));
var multiply2 = function (a, b) { return a * b; };
console.log(calculate(12, 4, multiply2));
console.log(calculate(5, 3, function (x, y) { return x * y; }));
console.log(calculate(4, 6, function (x, y) { return x / y; }));
console.log(calculate(12, 6, function (x, y) { return x + y; }));
