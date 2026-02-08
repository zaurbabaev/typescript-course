var userId = 2;
console.log("Id: ".concat(userId));
userId = "qwerty";
console.log("Id: ".concat(userId));
function printId(inputId) {
    console.log("Id: ".concat(inputId));
}
function getId(isNumber) {
    if (isNumber) {
        return 1;
    }
    else {
        return "1";
    }
}
printId(12345);
printId("qwerty");
console.log(getId(true));
var tom = {
    name: "Tom",
    age: 12,
};
var bob = {
    name: "Bob",
    age: 32,
};
function printPerson(user) {
    console.log("Name: ".concat(user.name, " age: ").concat(user.age));
}
printPerson(tom);
printPerson(bob);
var toto = {
    name: "Toto",
    age: 20,
};
var bobi = {
    name: "Bobbi",
    age: 21,
    company: "Microsoft",
};
function printPerson2(user) {
    console.log("Name ".concat(user.name, " age: ").concat(user.age));
}
printPerson2(toto);
printPerson2(bobi);
