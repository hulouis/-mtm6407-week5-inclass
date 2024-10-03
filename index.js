import { mtm6407, colors, points } from './data.js';

// console.log(mtm6407);


//Done declaratively

// Loop through each student and provide in a new variable



// - First name
//   - Last name
//     - Letter Grade + (Number Grade) e.g.(A + (100 %))

const studentGrades = [];

mtm6407.forEach(student => {
  const formattedStudent = `${student.firstName} ${student.lastName} - ${student.gradeLetter} + (${student.gradeNumber}%)`;
  studentGrades.push(formattedStudent);
});

console.log(studentGrades);


//2  go through each color and return the color that is 'red'
const redColors = colors.filter(color => color === 'red');


console.log(redColors); 

//3 create a compass variable (object)
// - North - "N"
//   - South - "S"
//   - East - "E"
//   - West - "W"



//Bonus: if you can add this to an html object and return this to the body and make it look somewhat like a compass

/* name = mtm6407 - week5 - inclass

Github repo link to my email: rodneyl @algonquincollege.com - 9pm */


const compassContainer = document.getElementById('compass');

points.forEach(point => {
  const pointEl = document.createElement('div');
  pointEl.classList.add('point', point.symbol);
  pointEl.textContent = point.symbol;
  compassContainer.appendChild(pointEl);
});
