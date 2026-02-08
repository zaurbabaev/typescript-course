let id: number | string;
id = "1234dsds5";
console.log(id);

id = 234;
console.log(id);

function printId(id: number | string) {
  console.log(`Id: ${id}`);
}

let id2: string | number = "ruy74";

printId("1jdjsjkd");
printId(1234);
printId(id2);

function printSentence(words: string[] | string) {
  if (typeof words === "string") {
    console.log(words);
  } else {
    console.log(words.join(" "));
  }
}

printSentence(["Programming", "language", "TypeScript"]);
printSentence("Programming language TypeScript");
