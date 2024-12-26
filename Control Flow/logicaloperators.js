// Logical Operators

// And && , Or || , Not !

let password = "qwerty";

// if(password.length > 5 && password.includes("@")){
//     console.log("Password Strength is strong");
    
// } else {
//     console.log("Change your password");
    
// }

if(password.length > 5 || password.includes("@")){
    console.log("Password Strength is strong");
    
} else {
    console.log("Change your password");
    
}

let status = false;
if(!status){ //change into true
    console.log("Your status is ", status);
    
}

// Priorities
// Not
// And , Or from left to right

let result = true && true || false && !false
// result = true&&true || false&&true
// result = true || false && true
// result = true && true
console.log(result);
