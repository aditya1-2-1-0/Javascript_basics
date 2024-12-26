//  "if" , "else" , "else if" statements

// let budget = 3500;

// if(budget > 6000) {
//     console.log("Will do dinner in hotel");
    
// } else if(budget > 4500){
//     console.log("Will do dinner in 3 star");
    
// } else if(budget > 3000) {
//     console.log("will do dinner in 1 star");
    
// } else {
//     console.log("Run if all conditions false");
    
// }
// After 1st condition true control get out of the scope


// Nested if statement

// let num = 23;

// if(num > 22) {
//     console.log("Run if 1st condition true");
//     if(num > 25) {
//         console.log("Run if both condition true");
//         if (num  > 20) {
//             console.log("Run if all condition true");
            
//         }
        
//     }
    
// }


// Break And Continue statement
// Also called jump statement

// Continue 
// used to skip some values of loop

for(let i=1;i<=10;i++) {
    if(i == 2) {
        continue;
    }console.log("Value of i: ", i);
    
}

// Break 

// used to terminate the loop and control transfer from outside

for(let i=1;i<=10;i++) {
    if(i==5) {
        console.log("Our desired value :",i);
        break;
    }
    console.log("value of i:", i);
    
}

console.log("I am outside of loop");
