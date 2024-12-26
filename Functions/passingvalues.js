// Passing values (Arguments and parameters)

let invitation = function(name = "default",time = "night") { // local variable to this function
    console.log(`Welcome ${name} You are invited on event and time will be at ${time} `);
    
}
// console.log(name);

invitation("John","morning"); // Output: Welcome John You are invited on event
invitation()

// Return Values (How to return value from the function)

let ageCalculation = function(birthYear,currentYear=2023) {
    let age = currentYear-birthYear;
    // console.log(`Your current age is ${age}`);
    return age;
    console.log("After return statement no code of line will executable");
    
}

// console.log(ageCalculation(2000,2025));

let functionResult = ageCalculation(2005)
console.log(`Your age is ${functionResult}`);



