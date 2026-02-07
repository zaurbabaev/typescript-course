/* console.log("Hello TypeScript");
console.log("TyprScript kodlama davam ediyor");
console.log("Kodlama davam ediyor");

 */

function add(n1: number, n2: number): number {
  /* if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect Input!");
  } */
  return n1 + n2;
}

const number1: number = 4.5;
const number2: number = 5.2;

const result: number = add(number1, number2);

console.log(result);

/* ---------------Object------------------- */

const person = {
  name: "Teoman",
  age: 2,
};

interface Human {
  name: string;
  age: number;
  birthday: Date;
}

const ali: Human = {
  name: "Ali",
  age: 20,
  birthday: new Date("2000-02-02"),
};

console.log(ali.name);
console.log(ali.birthday);
console.log(ali.age);

console.log(ali);

/* Arrays */

const person2 = {
  name: "Teoman",
  age: 2,
  hobies: ["Movies", "Sports", "Musics"],
};

for (const hobby of person2.hobies) {
  console.log(hobby);
}

/* Tuples type  sabit uzunluqlu və tipi əvvəlcədən müyyən olunmuş array*/

let person3: [string, number];
person3 = ["Levent", 30];

console.log(person3);

let mixed: [string, number, boolean];

mixed = ["Hello", 20, true];
mixed.forEach((m) => console.log(m));

function getUser(): [string, number] {
  return ["Teoman", 10];
}

let user = getUser();
console.log(user);

let product: [string, number?];
product = ["Hello"];
console.log(product);
product = ["Java", 20];
console.log(product);

/* Enum */

enum Colors {
  Red,
  Green,
  Blue,
}

let color: Colors = Colors.Blue;

console.log(color); //2

enum Colors2 {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let color2: Colors2 = Colors2.Blue;

console.log(color2);

/* Any */
let data: any;
data = 5;
console.log(data);

data = "Hello";
console.log(data);

data = true;
console.log(data);

function logData(data: any) {
  console.log(data);
}

logData(12);
logData("TypeScript");
logData([1, 2, 3]);

let man: any = { name: "Levent", age: 30 };

console.log(man.name, man.age);

let data2: any = { name: "Teoman", skills: ["Typescript", "Javascript"], experience:5 };

console.log(data2.skills[1]);

