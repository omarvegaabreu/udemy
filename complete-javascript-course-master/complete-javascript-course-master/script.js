/** 
 * Variables and data types
 * 
*/

/*
var firstName = 'Omar';
console.log (firstName);

var lastName = 'Vega';
var age = 37;

var fullAge = true;
console.log(fullAge);

var job;
job = 'programmer';
console.log(job);
*/ 


/** 
 * Variables and type coercion
 * 
*/

// // Type coercion
/* udemy
var firstName ='omar';
var age = 37;

 console.log(firstName +' '+ age);

 var job,isMarried;
 job = 'developer';
 isMarried = true;

 alert(firstName + ' is a ' +  age + ' year old ' + job + ' is he married? '+ isMarried);

// // variable mutation 

age = 'thirty seven';
job = 'web developer';

var lastName = prompt ('What is his last name?');
console.log(firstName + '  ' + lastName); */

// type operators

/************************** */
//basis operators 


/* var year,yearJohn,yearMark
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator

console.log (typeof johnOlder);
console.log(typeof ageJohn);
console.log('I will become a developer');
var x;
console.log(typeof x);
*/

// Operator procedence

/*var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now -yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments

var x, y;
x = y = ( 3 + 5 ) * 4 - 6; // 8*4-6//32 - 6 // 26
console.log(x,y);

// More operator
x *= 2;
console.log(x);
x +=10
console.log(x);
// x = x + 1; // the same as below
// x +=1; the same as below
x++;
console.log(x);
*/

/******************************
 * /
 * CONDING CHALLENGE 1
 ****************************************/

 /*
var mark = {
mass: 104,//kg
height: 1.78//cm
}

var john = {
mass:  100,//kg
height:  1.77//cm
}

var markBmi = mark.mass / (mark.height * mark.height);
console.log(markBmi) 

var johnBmi = john.mass / (john.height * john.height);
console.log(johnBmi);

var higherBMI = markBmi > johnBmi;

console.log('Is Marks\s BMI higher than John\s BMI??', higherBMI );
*/

/***********************************
 *  If else statements
 */

 /*
 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
   console.log(firstName + 'is married!');
 } else {
   console.log (firstName + ' is ' + civilStatus);
 }

 var isMarried = true;
 if (isMarried) {
  console.log(firstName + ' is married! ');
} else {
  console.log (firstName + ' is ' + civilStatus);
}

*/

/*******
 * if else statement with the coding challenge
 */

 /*
var mark = {
  mass: 104,//kg
  height: 1.78//cm
  }
  
  var john = {
  mass:  100,//kg
  height:  1.77//cm
  }
  
  var markBmi = mark.mass / (mark.height * mark.height);
  console.log(markBmi) 
  
  var johnBmi = john.mass / (john.height * john.height);
  console.log(johnBmi);
  
  var higherBMI = markBmi > johnBmi;
  
 if ( markBmi > johnBmi) {
   console.log ('Mark\s BMI is higher than john!! ');
 } else {
   console.log('John BMI is higher than Mark\s !!!');
 }
 
 */

/*******************************
 * Boolean logic
 */

 /*
 var firstName = 'John';
 var age = 31;

 if (age < 13) {
   console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) { //between 13 and 20
  console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) { //between 18 and 20
  console.log(firstName + ' is a young man.');
 } else {
   console.log (firstName + ' is a man!');
 }
*/

/*****************************************
 * The Ternary Operator and Switch statements
 */

 var firstName = 'John';
 var age = 22;

 age >= 18 ? console.log(firstName + ' drinks beer. ')
: console.log(firstName + ' drinks juice. ');

var drink = age >= 18? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}
 





