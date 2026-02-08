let person: { name: string; age: number };
person = { name: "Tom", age: 12 };
person = { name: "Bob", age: 32 };
console.log(person.name);
console.log(person["age"]);

let human: { name: string; age?: number };

human = { name: "Vusal", age: 23 };
console.log(human);

human = { name: "Humay" };
console.log(human);
console.log(human.age); // undefined

let man: { name: string; age?: number };

man = { name: "Tom", age: 12 };
if (man.age !== undefined) {
  console.log(man.age);
}

function printUser(user: { name: string; age: number }) {
  console.log(`name ${user.name} age: ${user.age}`);
}

let tom = { name: "Tom", age: 34 };
printUser(tom);

let bob = { name: "Bob", age: 44, isMarried: true };
printUser(bob);

function defaultUser(): { name: string; age: number } {
  return { name: "Tom", age: 37 };
}

let user = defaultUser();
console.log(`name: ${user.name} age: ${user.age}`);

/* operator in */

let bom: { name: string; age?: number } = { name: "Bom", age: 23 };
let bobl: { name: string; age?: number } = { name: "Bobl" };

function printUserData(user: { name: string; age?: number }) {
  if ("age" in user) {
    console.log(`Name: ${user.name} Age: ${user.age}`);
  } else {
    console.log(`Name: ${user.name}`);
  }
}

printUserData(bom);
printUserData(bobl);

function printUser2({ name, age }: { name: string; age: number }) {
  console.log(`name: ${name} age: ${age}`);
}

let tomas = { name: "Tomas", age: 12 };
printUser2(tomas);

function printUser3({ name, age }: { name: string; age?: number }) {
  if (age !== undefined) {
    console.log(`name: ${name} age: ${age}`);
  } else {
    console.log(`name: ${name}`);
  }
}

let tomi = { name: "Tomi" };
printUser3(tomi);

let coni = { name: "Coni", age: 38 };
printUser3(coni);

function printUser4({ name, age = 23 }: { name: string; age?: number }) {
  console.log(`Name: ${name} age: ${age}`);
}

let german = { name: "German" };
printUser4(german);

let anton = { name: "Anton", age: 45 };
printUser4(anton);
