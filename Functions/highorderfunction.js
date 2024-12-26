// Passing function as an Argument (High order function)

// let upperCase = function(str) {
//     return str.toUpperCase();
// }

// let lowerCase = function(str) {
//     return str.toLowerCase();
// }

// let transformer = function(str,fun){
//     return fun(str);
// }

// console.log(transformer("hello programmer",upperCase));

let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
};

// compliment("You are good")("Aditya");

// 2nd method

let complimented = compliment("You are good Coder");

complimented("Aditya");

// compliment is higher order function

