function add(a, b) {
    var result = a + b;
    console.log(result);
}
add(20, 30);
add(10, 15);
var koef = 1.5;
function add2(a) {
    var result = a * koef;
    console.log(result);
}
add2(20);
add2(10);
function add3(a, b) {
    return a + b;
}
var result = add3(1, 2);
console.log(result);
function add4(a, b) {
    console.log(a + b);
}
add4(12, 2);
/* optional parameters */
function getName(firstName, lastName) {
    return lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
}
var name1 = getName("Ivan", "Kuznechov");
console.log(name1);
var name2 = getName("Vasya");
console.log(name2);
/* default parametr dəyəri */
function getName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Ivanov"; }
    return "".concat(firstName, " ").concat(lastName);
}
var name3 = getName2("Ivanov", "Kuznechov");
console.log(name3);
var name4 = getName2("Vasya");
console.log(name4);
function defaultLastName() {
    return "Smith";
}
function getName3(firstName, lastName) {
    if (lastName === void 0) { lastName = defaultLastName(); }
    return "".concat(firstName, " ").concat(lastName);
}
var name5 = getName3("Tom");
console.log(name5);
