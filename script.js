// console.log("Hello World!!!");

/* ****************************
 Variables and Data Types
******************************* */

// var firstName = 'John';
// console.log(firstName);
//
// var lastName = 'Smith';
// var age = 28;
//
// var fullAge = true;
// console.log(fullAge);
//
// var job;
// console.log(job);
// job = 'teacher';
// console.log(job);

// All variable names must start with a $, _ or letter and can't be JS names
// Variable naming rules
// var 3years = 3;


/* ****************************
 Variable Mutation and Type Coercion
******************************* */
// var firstName = 'John';
// var age = 28;

// Type Coercion
// console.log(firstName + ' ' + 28);
//
// var job, isMarried;
// job = 'teacher';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
// Changing value of a variable after variable is already declared with a value above in the code
// age = 'twenty eight';
// job = 'driver';
//
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);


/* ****************************
 Basic Operators
******************************* */
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
//
// console.log(yearJohn);
// console.log(yearMark);
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
//
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// typeof Operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);


/* ****************************
Operator Precedence
******************************* */

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;
// True
// console.log(isFullAge);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence TABLE

// Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = ageJohn + ageMark / 2;         / takes precendence over +, so the calculation won't be read in the correct order
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// Multiple Assignments
// var x, y;
// console.log(x, y);
// x = y = (3 + 5) * 4 - 6;
// 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// More Operators
// x = x * 2;
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);

// All three are the same effect
// x = x + 1;
// x += 1;
// x++;
// console.log(x);


/* ****************************
Coding Challenge 1
******************************* */

// Mass Values
// var markMass, johnMass;
// markMass = 88;
// johnMass = 68;

// Height Values
// var markHeight, johnHeight;
// markHeight = 2.1;
// johnHeight = 1.8;

// Mark's BMI
// var markBmi = markMass / (markHeight * 2);
// console.log(markBmi);

// John's BMI
// var johnBmi = johnMass / (johnHeight * 2);
// console.log(johnBmi);

// Mark VS John
// var isMarkHigher = markBmi > johnBmi;
// console.log(isMarkHigher);

// Print to result to console
// console.log("Is Mark's BMI higher than John's BMI? " + isMarkHigher);



/* ****************************
If/Else Statements
******************************* */

// var firstName = 'John';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//       console.log(firstName + ' is married!');
// }
// else {
//       console.log(firstName + ' will hopefully marry soon.');
// }

// var isMarried = false;
// These two if statements are synonymous
// if (isMarried === true) {
//       console.log(firstName + ' is married!');
// }
// if (isMarried) {
//       console.log(firstName + ' is married!');
// }
// else {
//       console.log(firstName + ' will hopefully marry soon.');
// }
//
// var markMass, johnMass;
// markMass = 88;
// johnMass = 68;
//
// var markHeight, johnHeight;
// markHeight = 2.1;
// johnHeight = 1.8;
//
// var markBmi = markMass / (markHeight * 2);
// var johnBmi = johnMass / (johnHeight * 2);
//
// if (markBmi > johnBmi) {
//       console.log('Mark\'s BMI is higher than John\'s.');
// }
// else {
//       console.log('John\'s BMI is higher than Mark\'s.');
// }


/* ****************************
Boolean Logic
******************************* */

// var firstName = 'John';
// var age = 20;
//
// if (age < 13) {
//       console.log(firstName + ' is a boy.');
// }
// else if (age >= 13 && age < 20) {
//       console.log(firstName + ' is a teenager.');
// }
// else if (age >= 20 && age < 30) {
//       console.log(firstName + ' is a young man.');
// }
// else {
//       console.log(firstName + ' is a man.');
// }


/* ****************************
The Ternary Operator and Switch Statements
******************************* */

// var firstName = 'John';
// var age = 22;

// Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');
//
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if(age >= 18) {
//       var drink = 'beer';
// }
// else {
//       var drink = 'juice';
// }

//Switch Statement
// var firstName = 'John';
// var job = 'teacher';
// switch (job) {
//       case 'instructor':
//       case 'teacher':
//             console.log(firstName + ' teaches kids how to code.');
//             break;
//       case 'driver':
//             console.log(firstName + ' drives an uber in Boulder.');
//             break;
//       case 'designer':
//             console.log(firstName + ' designs beautiful websites.');
//             break;
//       default:
//             console.log(firstName + ' does something else.');
// }
//
// var age = 12;
// switch (true) {
//       case age < 13:
//             console.log(firstName + ' is a boy.');
//             break;
//       case age >= 13 && age < 20:
//             console.log(firstName + ' is a teenager.');
//             break;
//       case age >= 20 && age < 30:
//             console.log(firstName + ' is a young man.');
//             break;
//       default:
//             console.log(firstName + ' is a man.');
// }


/* ****************************
Truthy and Falsy Values and Equality Operators
******************************* */

// Falsy Values: undefined, null, 0, '', NaN
// Truthy Values: NOT falsy Values

// var height;
//
// height = 23;
//
// if (height) {
//       console.log('Variable is defined');
// }
// else {
//       console.log('Variable has NOT been defined');
// }

// Equality Operators
// if (height == '23') {
//       console.log('The == operator does type coercion!');
// }


/* ****************************
Coding Challenge 2
******************************* */

// var teamJohn = (89 + 120 + 103) / 3;
// var teamJohn = (89 + 120 + 124) / 3;
var teamJohn = (89 + 120 + 130) / 3;
var teamMike = (116 + 94 + 123) / 3;
var teamMary = (97 + 134 + 105) / 3;
console.log(teamJohn, teamMike, teamMary);

// if (teamJohn > teamMike) {
//       console.log('John\'s team wins with an average score of ' + teamJohn);
// } else if (teamJohn < teamMike) {
//       console.log('Mike\'s team wins with an average score of ' + teamMike);
// } else {
//       console.log('There is a draw');
// }

if (teamJohn > teamMike && teamJohn > teamMary) {
      console.log('John\'s team wins with an average score of ' + teamJohn);
} else if (teamMike > teamJohn && teamMike > teamMary) {
      console.log('Mike\'s team wins with an average score of ' + teamMike);
} else if (teamMary > teamJohn && teamMary > teamMike) {
      console.log('Mary\'s team wins with an average score of ' + teamMary);
} else {
      console.log('There is a draw');
}
