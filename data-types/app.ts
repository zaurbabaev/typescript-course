let isEnabled: boolean = true;
let isAlive: boolean = false;

console.log(isEnabled);
console.log(isAlive);

/* number */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

/* string */
let firstName: string = "Tom";
let age: number = 28;
let info: string = `Name ${firstName} and age: ${age}`;
console.log(info);

let sentence: string = `Hello World!
Good bye World!`;
console.log(sentence);

/* bigint */
const num2: bigint = BigInt(100);
console.log(num2);

const num3: bigint = 100n;
console.log(num3);

let hello = "hello world";
// hello=23; səv olacaq birincidə biz yazmasaqda artıq hello bir string kimi elan olundu sonradan bu tipi dəyişmək olamaz

/* any */
let someVar: any = "Hello";
console.log(someVar);
someVar = 30;
console.log(someVar);

var someArray: any[] = [24, "Tom", false];
console.log(someArray);

let xy;
xy = 10;
xy = "hello";

/* Tipin yoxlanılması typeof */
/* let sum: any;
sum = 1200;
sum = "one  thousand two hundred";
let result: number = sum / 12;
console.log(result); // Nan çıxacaq çünki stringi rəqəmə bölmək istəyirik. bunla qarşılaşmamaq üçün any zamanı typeof-dan istifadə etmək lazımdır. Əgər şərt ödəyirsə əməliyyat icra olunsun
 */

let sum: any;
sum = 1200;

if (typeof sum === "number") {
  let result: number = sum / 12;
  console.log(result);
} else {
  console.log("Invalid operation");
}


