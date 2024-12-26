// Variables and Block Scope

// scope >>- Area where variables is defined or accessible

// let score = 90;
const score = 90; //Gloabl scope

if(true) {
    let score = 50; //Block scope
    score = 50;
    // console.log(score); // Nearest value
    
}

// console.log(score);

// Ternary operator

let age = 17;
let weight = 40;
// if(age > 18) {
//     console.log("Qualify");
    
// } else {
//     console.log("Fail");
    
// }

// Single line solution

let result = age > 18 ? weight > 55 ? "Qualify" : "weightissue" : "ageissue";
// console.log(result);

switch(age) {
    case 18:
        case 19:
            case 20:
                result = "These ages are allowed to sit in exam";
                break;

    default:
        result = "Not allowed"
}

console.log(result);
