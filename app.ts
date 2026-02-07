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


