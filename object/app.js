var person;
person = { name: "Tom", age: 12 };
person = { name: "Bob", age: 32 };
console.log(person.name);
console.log(person["age"]);
var human;
human = { name: "Vusal", age: 23 };
console.log(human);
human = { name: "Humay" };
console.log(human);
console.log(human.age); // undefined
var man;
man = { name: "Tom", age: 12 };
if (man.age !== undefined) {
    console.log(man.age);
}
function printUser(user) {
    console.log("name ".concat(user.name, " age: ").concat(user.age));
}
var tom = { name: "Tom", age: 34 };
printUser(tom);
var bob = { name: "Bob", age: 44, isMarried: true };
printUser(bob);
function defaultUser() {
    return { name: "Tom", age: 37 };
}
var user = defaultUser();
console.log("name: ".concat(user.name, " age: ").concat(user.age));
/* operator in */
var bom = { name: "Bom", age: 23 };
var bobl = { name: "Bobl" };
function printUserData(user) {
    if ("age" in user) {
        console.log("Name: ".concat(user.name, " Age: ").concat(user.age));
    }
    else {
        console.log("Name: ".concat(user.name));
    }
}
printUserData(bom);
printUserData(bobl);
function printUser2(_a) {
    var name = _a.name, age = _a.age;
    console.log("name: ".concat(name, " age: ").concat(age));
}
var tomas = { name: "Tomas", age: 12 };
printUser2(tomas);
function printUser3(_a) {
    var name = _a.name, age = _a.age;
    if (age !== undefined) {
        console.log("name: ".concat(name, " age: ").concat(age));
    }
    else {
        console.log("name: ".concat(name));
    }
}
var tomi = { name: "Tomi" };
printUser3(tomi);
var coni = { name: "Coni", age: 38 };
printUser3(coni);
function printUser4(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 23 : _b;
    console.log("Name: ".concat(name, " age: ").concat(age));
}
var german = { name: "German" };
printUser4(german);
var anton = { name: "Anton", age: 45 };
printUser4(anton);
