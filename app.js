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
/* Enum */
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var color = Colors.Blue;
console.log(color); //2
var Colors2;
(function (Colors2) {
    Colors2["Red"] = "RED";
    Colors2["Green"] = "GREEN";
    Colors2["Blue"] = "BLUE";
})(Colors2 || (Colors2 = {}));
var color2 = Colors2.Blue;
console.log(color2);
/* Any */
var data;
data = 5;
console.log(data);
data = "Hello";
console.log(data);
data = true;
console.log(data);
function logData(data) {
    console.log(data);
}
logData(12);
logData("TypeScript");
logData([1, 2, 3]);
var man = { name: "Levent", age: 30 };
console.log(man.name, man.age);
var data2 = {
    name: "Teoman",
    skills: ["Typescript", "Javascript"],
    experience: 5,
};
console.log(data2.skills[1]);
/* unknown */
var datas;
// datas = 12;
// datas = true;
datas = "Hello";
if (typeof datas === "number") {
    console.log("Number");
}
else if (typeof datas === "string") {
    console.log(datas.toUpperCase());
}
else if (typeof datas === "boolean") {
    console.log("Boolean");
}
