/* 
Traditional JavaScript Function

function printMessage() {
    console.log("Hello class");
}

*/

/*
const message = "Good evening students!"
const message2 = "Goodbye students :("

const addNumbers = (a, b) => console.log(a+b);

const printMessage = (msg) => console.log(msg);

const crazyMath = (a, b, c) => {
    let sum = a + b;
    let mul = sum * c;
    return console.log(mul);
}
*/

const flowers = [
    "daisy",
    "rose",
    "violet"
];

const colors = [
    "red",
    "green",
    "blue"
];

const names = {
    student1: 'Jim',
    student2: 'Sally',
    student3: 'Jane',
    student4: 'Mark'
}

// old way
// const flower1 = flowers[0];

// destructure array
// const [flower1, flower2, flower3] = flowers;

//console.log(flower3);


// old way
// const student1 = names.student1;
// const student2 = names.student2;
// const student3 = names.student3;
// const student4 = names.student4;

// const { student1, student2, student3, student4 } = names;

// console.log(student4);

// crazyMath(2, 3, 10);
// addNumbers(1, 7);
// printMessage(message2)

const combinedArray = [...flowers, ...colors];

// console.log(combinedArray);

const human = {
    ears: 2,
    nose: 1,
    arms: 2,
    legs: 2,
    firsName: "Leighton",
    lastName: "Rodney"
};

const abilities = {
    html: "100%",
    javascript: "100%"
}

const professor = {
    ...human,
    ...abilities
}

// console.log(`The professor's name is: ${professor.firsName} ${professor.lastName}. He has ${professor.arms} arms and ${professor.nose} nose. He knows ${professor.javascript} JavaScript.`)


// IMPERATIVE

/*
GET OUT BREAD, PEANUT BUTTER, AND JELLY
TAKE TWO SLICES OF BREAD
PUT PEANUT BUTTER ON ONE SLICE
PUT JELLY ON THE OTHER SLICE
PUT SLICES TOGETHER
*/

// DECLARATIVE

/*
MAKE ME A PEANUT BUTTER AND JELLY SANDWICH
*/

// Filter array method

const numbers = [10, 2, 4, 5, 8, 7, 1, 9, 3, 6];

// const even = []

// imperative way
/*
for (const number of numbers) {
    if(number % 2 === 0) {
        even.push(number);
    }
}
*/

// declarative way
// const even = numbers.filter(number => number % 2 === 0)

// console.log(even);



// Find array method

// let value;

// imperative way
/*
for (number of numbers) {
    if(number > 5){
        value = number;
    }
}
*/

// console.log(value);

//declarative way

const value = numbers.find(number => number > 5);

// console.log(value);



// For each array method

const words = [
    'Good Morning',
    'good afternoon',
    'Good Night',
    'sorry',
    'excuse me please',
    'Come Here'
];


// imperative way
/*
for (const word of words) {
    console.log(word);
}
*/

//declarative way
//words.forEach(word => console.log(word))


// Map method

//imperative way
/*
for (const word of words) {
    console.log(`Word is: ${word}`);
}
*/

// declarative way
// const statements = words.map((word, index) => console.log(`Word number(${index + 1}) is: ${word}`))


// Reduce array method

// imperative way
/*
let sum = 0;
for (const number of numbers) {
    sum += number
}
console.log(sum)
*/

// declarative way
const sum = numbers.reduce((acc, number) => acc + number)
// console.log(sum)

// Sort array method

// declarative way
const sortedNumbers = numbers.sort((a, b) => a - b)
// console.log(sortedNumbers)

const sortedWords = words.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : a.toLowerCase() < b.toLowerCase() ? -1 : 0);
console.log(sortedWords);








