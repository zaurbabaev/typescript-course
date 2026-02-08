var isEnabled = true;
var isAlive = false;
console.log(isEnabled);
console.log(isAlive);
/* number */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
/* string */
var firstName = "Tom";
var age = 28;
var info = "Name ".concat(firstName, " and age: ").concat(age);
console.log(info);
var sentence = "Hello World!\nGood bye World!";
console.log(sentence);
/* bigint */
var num2 = BigInt(100);
console.log(num2);
var num3 = 100n;
console.log(num3);
var hello = "hello world";
// hello=23; səv olacaq birincidə biz yazmasaqda artıq hello bir string kimi elan olundu sonradan bu tipi dəyişmək olamaz
/* any */
var someVar = "Hello";
console.log(someVar);
someVar = 30;
console.log(someVar);
var someArray = [24, "Tom", false];
console.log(someArray);
var xy;
xy = 10;
xy = "hello";
/* Tipin yoxlanılması typeof */
/* let sum: any;
sum = 1200;
sum = "one  thousand two hundred";
let result: number = sum / 12;
console.log(result); // Nan çıxacaq çünki stringi rəqəmə bölmək istəyirik. bunla qarşılaşmamaq üçün any zamanı typeof-dan istifadə etmək lazımdır. Əgər şərt ödəyirsə əməliyyat icra olunsun
 */
var sum;
sum = 1200;
if (typeof sum === "number") {
    var result = sum / 12;
    console.log(result);
}
else {
    console.log("Invalid operation");
}
