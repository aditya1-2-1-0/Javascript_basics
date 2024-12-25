//  Numbers

let score = 50;
// console.log(score, typeof score);

// Mathematical Operators * / % ** + -

// let result = score /2; // Give Quotient
// let result = score % 2; // give Remainder

// Mathematical Expression

let result =  score *2 + (4*3) -8 / 2 % 4;
// Using Priority and Precedence
// 1 () Bracketes
// 2 ** Exponentiation
// 3 * / % ( From left to Right )
// 4 + - ( From left to Right )


// console.log(result);

// Concatination of Numbers 

let resultLine = 'My total score is = ' + result;
// console.log(resultLine);


// Loose Equality (==) Vs Strict Equality (===)

// Loose Equality ==

let age = 22;// Number type value
// console.log(age == '22');// Focus only on value but not type
// console.log(age != '22');

// Strict Equality 

// console.log(age === '22');// Focus on both value and its type
// console.log(age !== '22');


// Type Conversion

// String to number //
let stringType = '54';

// console.log(stringType,typeof stringType);

// Number method

let number = Number(stringType);
// console.log(number, typeof number);

// Imp Note : In Number method passing String must be of numeric values


// Number to String //
let numberType = 44;

// console.log(numberType, typeof numberType);
let string = String(numberType);
// console.log(string, typeof string);


// Boolean Method true/false

let age1 = " "; //empty string
let booleanValueofAge = Boolean(age1);

console.log("Boolaen Value of Age is ", booleanValueofAge);
