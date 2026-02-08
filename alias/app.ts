type id = number | string;

let userId: id = 2;
console.log(`Id: ${userId}`);

userId = "qwerty";
console.log(`Id: ${userId}`);

function printId(inputId: id) {
  console.log(`Id: ${inputId}`);
}

function getId(isNumber: boolean): id {
  if (isNumber) {
    return 1;
  } else {
    return "1";
  }
}

printId(12345);
printId("qwerty");
console.log(getId(true));

type Person = {
  name: string;
  age: number;
};

let tom: Person = {
  name: "Tom",
  age: 12,
};

let bob: Person = {
  name: "Bob",
  age: 32,
};

function printPerson(user: Person) {
  console.log(`Name: ${user.name} age: ${user.age}`);
}

printPerson(tom);
printPerson(bob);

/* Расширение псевдонимов */

type Person2 = { name: string; age: number };
type Employee = Person2 & { company: string }; // type Employee= {name:string, age:number, company:string};

type Person3 = { name: string; age: number };
type Employee2 = Person3 & { company: string };

let toto: Person = {
  name: "Toto",
  age: 20,
};
let bobi: Employee = {
  name: "Bobbi",
  age: 21,
  company: "Microsoft",
};

function printPerson2(user: Person) {
  console.log(`Name ${user.name} age: ${user.age}`);
}

printPerson2(toto);
printPerson2(bobi);
