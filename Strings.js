// Strings

console.log("Hello Coder");

let firstName = "Aditya";
let lastName = "Wadbudhe";
// console.log(firstName,lastName);

// String Concatination

// Method 1 using + operator

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// Method 2 using template literals

let fullName = `I want to become ${firstName} ${lastName}`;
// console.log(fullName);

// Getting String Character
// console.log(firstName[0]);
// console.log(firstName[6]); //undefined

// String Methods 

// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());
// console.log(lastName.indexOf("b"));

let hobbies = '    coding reading running    ';
// trim method
let result = hobbies.trim()
// console.log(hobbies);
// console.log(result);

// indexOf

// console.log(result.indexOf("coding"));
// console.log(result.lastIndexOf("running")); // case sensitive

// includes method

// console.log(result.includes("reading")); // case sensitive

// slice method

let homeName = "Belley";
let res = homeName.slice(0,3); // Excluding last one

// Imp Note : does not mutate original array
// console.log("sliced string :",res);

// console.log("original string :",homeName);


// Split method

let colors = "brown,Blue,Black,Gray";
let arrtes2 = colors.split(',');
//  string to array
// console.log(arrtes2);




// Javascript Strings are Immutable

let str = "Hello";

str[0] = "p";
str[1] = "q";
// There will be no change in "str" variable
// console.log(str);

str = str + "aditya";
console.log(str);


