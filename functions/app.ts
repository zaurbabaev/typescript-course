function add(a: number, b: number) {
  let result = a + b;
  console.log(result);
}

add(20, 30);
add(10, 15);

let koef: number = 1.5;

function add2(a: number) {
  let result = a * koef;
  console.log(result);
}

add2(20);
add2(10);

function add3(a: number, b: number): number {
  return a + b;
}

let result = add3(1, 2);
console.log(result);

function add4(a: number, b: number): void {
  console.log(a + b);
}

add4(12, 2);

/* optional parameters */
function getName(firstName: string, lastName?: string) {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

let name1 = getName("Ivan", "Kuznechov");
console.log(name1);

let name2 = getName("Vasya");
console.log(name2);

/* default parametr dəyəri */
function getName2(firstName: string, lastName: string = "Ivanov") {
  return `${firstName} ${lastName}`;
}

let name3 = getName2("Ivanov", "Kuznechov");
console.log(name3);
let name4 = getName2("Vasya");
console.log(name4);


function defaultLastName(): string {
  return "Smith";
}

function getName3(firstName: string, lastName: string = defaultLastName()) {
  return `${firstName} ${lastName}`;
}

let name5 = getName3("Tom");
console.log(name5);
