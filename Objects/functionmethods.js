// Function Vs Method

let ageCalculate = function(birthyear) {
    let age = 2024 - birthyear
    console.log(`Current age is = ${age}`);
    
}

ageCalculate(2000)

// Method >-- It is nothing but object property(key) holding function as "value"

let person = {
    ageCalculate : function(birthyear){
        let age = 2024 - birthyear;
        return age;
    }
}

console.log(`Current age is ${person.ageCalculate(2000)}`);
