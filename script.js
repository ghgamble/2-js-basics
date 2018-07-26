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
// var teamJohn = (89 + 120 + 130) / 3;
// var teamMike = (116 + 94 + 123) / 3;
// var teamMary = (97 + 134 + 105) / 3;
// console.log(teamJohn, teamMike, teamMary);

// if (teamJohn > teamMike) {
//       console.log('John\'s team wins with an average score of ' + teamJohn);
// } else if (teamJohn < teamMike) {
//       console.log('Mike\'s team wins with an average score of ' + teamMike);
// } else {
//       console.log('There is a draw');
// }

// if (teamJohn > teamMike && teamJohn > teamMary) {
//       console.log('John\'s team wins with an average score of ' + teamJohn);
// } else if (teamMike > teamJohn && teamMike > teamMary) {
//       console.log('Mike\'s team wins with an average score of ' + teamMike);
// } else if (teamMary > teamJohn && teamMary > teamMike) {
//       console.log('Mary\'s team wins with an average score of ' + teamMary);
// } else {
//       console.log('There is a draw');
// }


/* ****************************
Functions
******************************* */

// function calculateAge (birthYear) {
//       return 2018 - birthYear;
// }
//
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);
//
// function yearsUntilRetirement (year, firstName) {
//       var age = calculateAge(year);
//       var retirement = 65 - age;
//       if (retirement > 0) {
//             console.log(firstName + ' retires in ' + retirement + ' years.');
//       } else {
//             console.log(firstName + ' is already retired.');
//       }
// }
//
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');


/* ****************************
Function Statements and Expressions
******************************* */

// Function Declaration
// function whatDoYouDo (job, firstName) {}

// Function Expression
// var whatDoYouDo = function (job, firstName) {
//       switch (job) {
//             case 'teacher':
//                   return firstName + ' teaches kids how to code.';
//             case 'driver':
//                   return firstName + ' drives an Uber in Boulder.';
//             case 'designer':
//                   return firstName + ' designs beautiful websites.';
//             default:
//                   return firstName + ' does something else.';
//       }
// }
//
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mike'));


/* ****************************
Arrays
******************************* */

// Initialize Array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names);
// console.log(names.length);


// Mutate Array Data
// Changing the value of the index of 1 in the array, so Mark will be replaced with Ben
// names[1] = 'Ben';
// console.log(names);

// Adding a new index to the array, specifying where you want it to be placed. Only is effective if you know the contents of the array already
// names[5] = 'Mary';
// console.log(names);

// Alternatively, you can just add a new index to the array, knowing that you're doing so at the end of the array, so you're not accidentally replacing data
// names[names.length] = 'Mary';
// console.log(names);

// Different Data Types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// Push adds an element to the end of the array
// john.push('blue');
// console.log(john);

// Unshift adds an element to the beginning of the array
// john.unshift('Mr.');
// console.log(john);

// Pop removes element from the end of the array
// john.pop();
// console.log(john);

// Shift removes element from the beginning of the array
// john.shift();
// console.log(john);

// Returns position of the data that is entered into parentheses
// console.log(john.indexOf(1990));

// If we ask the indexOf method to return the index of a value that does not exist in the array, it will return -1


/* ****************************
Coding Challenge 3
******************************* */

// Our Solution
// var tipAmount = function (total) {
//       if (total < 50) {
//             return total * 0.2;
//       } else if (total >= 50 && total <= 200) {
//             return total * 0.15;
//       } else {
//             return total * 0.1;
//       }
// }
//
// console.log(tipAmount(124));
// console.log(tipAmount(48));
// console.log(tipAmount(268));
//
// var tipTotal = [18.6, 9.6, 26.8];
// var totalBill = [142.6, 57.6, 294.8];

// Challenge Solution
// function tipCalculator(bill) {
//       var percentage;
//       if (bill < 50) {
//             percentage = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//             percentage = 0.15;
//       } else {
//             percentage = 0.1;
//       }
//       return percentage * bill;
// }
//
// var bills = [124, 48, 268];
//
// var tips = [
//       tipCalculator(bills[0]),
//       tipCalculator(bills[1]),
//       tipCalculator(bills[2])
// ];
// console.log(tips);
//
// var finalValues = [
//       bills[0] + tips[0],
//       bills[1] + tips[1],
//       bills[2] + tips[2]
// ];
// console.log(finalValues);


/* ****************************
Objects and Properties
******************************* */

// There are two ways of creating new objects, object literal and new object syntax

// Object Literal
// var john = {
//       firstName: 'John',
//       lastName: 'Smith',
//       birthYear: 1990,
//       family: ['Jane', 'Mark', 'Bob', 'Emily'],
//       job: 'teacher',
//       isMarried: false
// };

// Logging to the console the entire John object, displaying all properties and values
// console.log(john);

// Multiple ways to log one property and it's value
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// Mutating/changing data
// john.job = 'driver';
// console.log(john);
// john['isMarried'] = true;
// console.log(john);

// New object syntax

/* *****************************************************************************
// Eric and I stopped here
********************************************************************************

/* ****************************
Objects and Methods
******************************* */

// var john = {
//       firstName: 'John',
//       lastName: 'Smith',
//       birthYear: 1990,
//       family: ['Jane', 'Mark', 'Bob', 'Emily'],
//       job: 'teacher',
//       isMarried: false,
//       calcAge: function(birthYear) {
//             this.age = 2018 - this.birthYear;
//       }
// };

// Create function within object, so you don't hard code
// First example uses the exact year, second calls the property value of the object. This is the same as "john." This points to the object in question.
// console.log(john.calcAge(1990));
// console.log(john.calcAge());
//
// console.log(john);

/* ****************************
Coding Challenge 4
******************************* */

// My Solution

// var john = {
//       fullName: 'John Smith',
//       mass: 68,
//       height: 1.8,
//       calcBmi: function(mass, height) {
//             this.bmi = this.mass / (this.height * this.height);
//       }
// };
//
// var mark = {
//       fullName: 'Mark Andrews',
//       mass: 88,
//       height: 2.1,
//       calcBmi: function(mass, height) {
//             this.bmi = this.mass / (this.height * this.height);
//       }
// };
//
// console.log(mark, john);
//
// function highestBMI () {
//       if (john.bmi > mark.bmi) {
//             console.log(john.fullName + ' has a higher BMI than ' + mark.fullName);
//       } else {
//             console.log(mark.fullName + ' has a higher BMI than ' + john.fullName);
//       }
// }
//
// console.log(highestBMI());

// Instructor Solution

// var john = {
//       fullName: 'John Smith',
//       mass: 92,
//       height: 1.95,
//       calcBMI: function () {
//             this.bmi = this.mass / (this.height * this.height);
//             return this.bmi;
//       }
// }
//
// var mark = {
//       fullName: 'Mark Miller',
//       mass: 78,
//       height: 1.69,
//       calcBMI: function () {
//             this.bmi = this.mass / (this.height * this.height);
//             return this.bmi;
//       }
// }
//
// console.log(john, mark);
//
// if (john.calcBMI() > mark.calcBMI()) {
//       console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.calcBMI() > john.calcBMI()) {
//       console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//       console.log('They have the same BMI.');
// }


/* ****************************
Loops and Iterations
******************************* */

// console.log(1);
// console.log(2);
// console.log(3);
// To 10
// Rather
// for (var i = 0; i < 10; i++) {
//       console.log(i);
// }
// i = 0, 0 < 10 true, log i to console, i++ (counter is updated)
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop

// for (var i = 1; i <= 20; i += 2) {
//       console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false];
// Want to log values to console
// Easy when there are a few values, but array could be larger and could keep growing, needs to be DYNAMIC
// Start at 0, because array starts at 0
// for (var i = 0; i < john.length; i++) {
//       console.log(john[i]);
// }

// While, we only have a condition
// var i = 0;
// while (i > john.length) {
//       console.log(john[i]);
//       i++;
// }

// Continue and break Statements
// var john = ['John', 'Smith', 1990, 'designer', false];
// If condition is not satisfied, it will skip printing the iteration, but continue through loop
// for (var i = 0; i < john.length; i++) {
//       if (typeof john[i] !== 'string') continue;
//       console.log(john[i]);
// }
// If condition is not satisfied, it will skip printing the iteration, then break out of loop
// for (var i = 0; i < john.length; i++) {
//       if (typeof john[i] !== 'string') break;
//       console.log(john[i]);
// }
// Loop through the array backwards
// for (var i = john.length - 1; i >= 0; i--) {
//       console.log(john[i]);
// }


/* ****************************
Coding Challenge 5
******************************* */

// My Solution

var billVal = [124, 48, 268, 180, 42];

function tipCalculator () {
      var tips = [];
      var finalVal = [];
      for (var i = 0; i < billVal.length; i++) {
            if (billVal[i] < 50) {
                  tips.push(billVal[i] * 0.20);
                  finalVal.push((billVal[i] * 0.20) + billVal[i]);
            } else if (billVal[i] > 50 && billVal[i] < 200) {
                  tips.push(billVal[i] * 0.15);
                  finalVal.push((billVal[i] * 0.15) + billVal[i]);
            } else {
                  tips.push(billVal[i] * 0.10);
                  finalVal.push((billVal[i] * 0.10) + billVal[i]);
            }
      }
      console.log(tips);
      console.log(finalVal);
}

tipCalculator(billVal);

// Instructor Solution Part 1

var john = {
      fullName: 'John Smith',
      bills: [124, 48, 268, 180, 42],
      calcTips: function () {
            this.tips = [];
            this.finalValues = [];
            for (var i = 0; i < this.bills.length; i++) {
                  // Determine percentage based on tipping rules
                  var percentage;
                  var bill = this.bills[i];
                  if (bill < 50) {
                        percentage = 0.20;
                  } else if (bill <= 50 && bill < 200) {
                        percentage = 0.15;
                  } else {
                        percentage = 0.10;
                  }
                  // Add result to the corresponding arrays
                  this.tips[i] = bill * percentage;
                  this.finalValues[i] = bill + bill * percentage;
            }
      }
}

// Instructor Solution Part 2

var mark = {
      fullName: 'Mark Miller',
      bills: [77, 375, 110, 45],
      calcTips: function () {
            this.tips = [];
            this.finalValues = [];
            for (var i = 0; i < this.bills.length; i++) {
                  // Determine percentage based on tipping rules
                  var percentage;
                  var bill = this.bills[i];
                  if (bill < 100) {
                        percentage = 0.20;
                  } else if (bill <= 100 && bill < 300) {
                        percentage = 0.10;
                  } else {
                        percentage = 0.25;
                  }
                  // Add result to the corresponding arrays
                  this.tips[i] = bill * percentage;
                  this.finalValues[i] = bill + bill * percentage;
            }
      }
}

function calcAverage(tips) {
      var sum = 0;
      for (var i = 0; i < tips.length; i++) {
            sum = sum + tips[i];
      }
      return sum / tips.length;
}

// Do the calculations for tips and final values
john.calcTips();
mark.calcTips();
console.log(john, mark);
// Calculate average
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
      console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (john.average < mark.average) {
      console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
} else {
      console.log('Mark and John pay the same average tip amount.');
}
