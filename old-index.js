/* function printMessage(msg) {
  console.log(msg);
}
printMessage("hello world"); */

/* const message = "good evening students";
const message2 = "good morning students";


const addNumbers = () => console.log(1 + 2);

const printMessage = (msg) => console.log(msg);

const crazyMath = (a, b, c) => {

  const sum = a + b;
  const mul = sum * c;
  return console.log(mul);
}


crazyMath(2, 3, 10); */
/* printMessage(message2);
printMessage(message); */

const flowers = [

  "daisy",
  "rose",
  "sunflower"
]

const colors = [

  "red",
  "blue",
  "green"
]

// const names = [

//   student1: "John",
//   student2: "Jane",
//   student3: "Tom",
//   student4: "Emily"
// ]


// const flower1 = flowers[0];

//destructure array
//const [flower1, flower2, flower3] = flowers;


//old way

// const student1 = names.student1;

//const { student1, student2, student3, student4 } = names;

// console.log(student1);

const combineArray = [...flowers, ...colors];
// console.log(combineArray);

const human = {

  ears: 2,
  nose: 1,
  arms: 2,
  legs: 2,
  firstName: "John",
  lastName: "Doe"
}

const abilities = {

  html: "100%",
  javascript: "90%",
}
const professor = {

  ...human,
  subject: "Web Development IV",
  grade: "A"
}

console.log(`the professor's name is : ${professor.firstName} ${professor.lastName}.He has ${professor.legs} and he teaches ${professor.subject} and his grade is ${professor.grade}`);




//imperative
/*
get out bread, peanut butter, and jelly
take two slices of bread
put peanut butter on one slice of bread
put jelly on the other slice of bread
put slices together

*/


// declrative


// make he a peanut butter and jelly sandwich

const numbers = [10, 2, 4, 5, 8, 7, 1, 9, 3, 6];
/* const even = []

for (const number of numbers) {
  if (number % 2 === 0) {
    even.push(number)
  }
}
 */

// const even = numbers.filter(number => number % 2 === 0);
// console.log(even);


//Find array method


// let value;

// for (number of numbers) {
//   if (number > 5) {
//     value = number;

//   }
// }


// const value = numbers.find(number => number > 5);
// console.log(value);

//for each array method

const words = ["good morning",
  "good afternoon",
  "good night",
  "good evening",
  "good day"];

// for (const word of words) {
//   console.log(word);
// }


//declarative way
// words.forEach(word => console.log(word));

//imperative way
// for (const word of words) {
//   console.log(`word is ${word}`);
// }

//declarative way

// const statements = words.map((word, index) => console.log(`word (${index + 1}) is ${word}`));

//reduce arrary method
/* let sum = 0;
for (const number of numbers) {
  sum += number;
}
console.log(sum); */


const sum = numbers.reduce((acc, number) => acc + number)
console.log(sum);

//sort array method


//declarative way
const sorted = numbers.sort((a, b) => a - b);
// console.log(sorted);

const sortedWords = words.sort(a , b) =>a. toLowerCase() ? 1 : b.toLowerCase() ? -1 : 0; 