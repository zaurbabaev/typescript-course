let x: number = undefined;
console.log(x);
x = null;
console.log(x);
x = 5;
console.log(x);

let userId: number | null = null;
function printId(id: number | null) {
  if (id === null) {
    console.log("пользователь отсутствует");
  } else {
    console.log(`id пользователя: ${id}`);
  }
}

printId(userId);
userId = 45;
printId(userId);
