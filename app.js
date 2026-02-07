/* console.log("Hello TypeScript");
console.log("TyprScript kodlama davam ediyor");
console.log("Kodlama davam ediyor");

 */
function add(n1, n2) {
    /* if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Incorrect Input!");
    } */
    return n1 + n2;
}
var number1 = 4.5;
var number2 = 5.2;
var result = add(number1, number2);
console.log(result);
/* ---------------Object------------------- */
var person = {
    name: "Teoman",
    age: 2,
};
var ali = {
    name: "Ali",
    age: 20,
    birthday: new Date("2000-02-02"),
};
console.log(ali.name);
console.log(ali.birthday);
console.log(ali.age);
console.log(ali);
/* Arrays */
var person2 = {
    name: "Teoman",
    age: 2,
    hobies: ["Movies", "Sports", "Musics"],
};
for (var _i = 0, _a = person2.hobies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
/* Tuples type  sabit uzunluqlu və tipi əvvəlcədən müyyən olunmuş array*/
var person3;
person3 = ["Levent", 30];
console.log(person3);
var mixed;
mixed = ["Hello", 20, true];
mixed.forEach(function (m) { return console.log(m); });
function getUser() {
    return ["Teoman", 10];
}
var user = getUser();
console.log(user);
var product;
product = ["Hello"];
console.log(product);
product = ["Java", 20];
console.log(product);
