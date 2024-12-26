// While loop

// for(let i=1;i<=5;i++) { // Infinite loop in case we miss conditional statement
//     console.log("For loop", i);
    
// }
// console.log("***********");


// let j=1;
// while(j<=5) { // Get error >-- Conditional statement is mandatory
//     console.log("while loop", j);
//     j++;
// }

let dishes = ["Pizza", "Burger", "Fries", "Salad", "Sushi"];

let j = 0;
while (j < dishes.length) {
    console.log("Favorite dish is", dishes[j]);
    j++; // Without this statement we will get infinite loop
}