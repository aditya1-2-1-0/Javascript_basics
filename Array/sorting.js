// Sorting array using sort method

// By default sort method is used to sort strings
// It firstly convert everything into string and then...

let letters = ['d','e','f','a','b'];
console.log(letters.sort());

let nums = [2,5,7,-1,-22,-43];
console.log("unsorted",nums);
// console.log(nums.sort());//unexpected

// if a-b < 0 => a < b => A,B (keep order same)
// if a-b > 0 => a > b => B,A (swap order)
// nums.sort((a,b) => {
//     if(a<b){
//         return -1; //any num less than 0
//     }
//     if(a>b){
//         return 1; //any num greater than 0
//     }
// })

// Ascending order
nums.sort((a,b) => {
    return a-b
})

// Descending order
nums.sort((a,b) => {
    return b-a
})


console.log(nums);


// Chain of methods 

let num = [1,2,3,4,5,6];

let result = num.slice(0,3).splice(2,1,7).push(8);
// push method return new length of array

console.log(result,num);
