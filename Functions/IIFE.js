// Immediately invoked function expression (IIFE)
// Executed only once

// Now this is expression
(function(name){
    console.log("This function will never execute again",name);
    
})("IIFE")

// setTimeOut and setInterval

// setTimeOut -> Run function "once" after "interval" of time

// set Interval -> Run function repeatedly,Starting after the interval of time,then repeating.....

// setTimeOut(func|code, delay, arg1, arg2,.....)

function greeting(name){
    console.log(`Welcome ${name} to our coding space`);
    
}

setTimeout(greeting,5000,"Aditya")

setTimeout(function greeting(){
    console.log("Welcome to our coding space");
    
},3000)//5000ms = 5sec

// setInterval

// setInterval(func|code,delay , arg1, arg2,.....)

// setInterval(greeting,3000,"John")