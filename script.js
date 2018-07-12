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
var firstName = 'John';
var age = 28;

// Type Coercion
console.log(firstName + ' ' + 28);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
// Changing value of a variable after variable is already declared with a value above in the code
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
