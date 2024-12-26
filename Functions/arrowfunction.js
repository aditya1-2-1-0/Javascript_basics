// Arrow Function(ES6)

// Special forms of function expression
// It allows us to write function more fast because
// No need to use function keyword
// No need to use paranthesis() in case of single parameter
// No need to use curely {} if single line code in function
// No need to use return statement if single line code in function

// Function Expression

// let invitation = name => `Welcome ${name} to this event`

let invitation = name => {
    return `Welcome ${name} to this event`
}

console.log(invitation("coders"));
