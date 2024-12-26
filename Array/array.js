// Working with Arrays

let letters = ['a','b','c','d','e'];

// Reverse (Mutate the original array)
// let reverse = letters.reverse();

// console.log(reverse);

// console.log(letters);

// concat

let nums = [1,2,3,4,5]
let concated = nums.concat(letters);
// console.log(concated);

// join
let joined = letters.join('-');
// console.log(joined);


// Slice method

// used to extract part of an array
// Array.slice(startIndex,lastIndex(excluded))
// Return new Array of extracted elements

let num = [3,5,7,9,0];
let extractedArray = num.slice(0,3)
// console.log("original",num);
// console.log("extrcated",extractedArray);

// Splice method

// used to add new elements to an array
// Array.splice(index,deleteValue,valueToBeAdded)
// Return deleted items in the form of Array

let num1 = [1,2,3,4,5];
let updated = num.splice(1,2,1);
console.log("Returned elements",updated);


// at method

let numb = [23,54,77,85];
console.log(numb[0]);
console.log(numb.at(1));

// getting last element of the array

console.log(numb[numb.length-1]);
console.log(numb.at(-1));

// at method can also work with strings
let name = "Aditya";
console.log(name.at(-1));


// Map method

// create new array from original array by applying
// transformation function

let salaries = [3000,4000,5000,6000]
let newSalaries = salaries.map(salary => {
    let incrementAmount = salary/2;
    return salary + incrementAmount
});
console.log("After 50% increment",newSalaries);

// Filter method (Used to perform filtration on array)

let gifts = ["Watch","Ring","Chocolates","Teddy bear"];
// Now you want to filter only "Watch and ring" gifts

let filteredArray = gifts.filter(gift => {
    if(gift == 'Watch' || gift == 'Ring') {
        return gift
    }
})

// It return "new" array
console.log(filteredArray);
console.log(gifts);

// Length of new array may or may not be equal to original array

// reduce method

// Run reducer function for each array element
// Array.reduce(function(total,currentValue),initialValue)
// It return single value

// Sum of all elements using reduce method

let number = [1,5,8,3,9];
let sum = number.reduce(function(total,currentValue){
    return total + currentValue
},0);

console.log(sum);

// Does not mutate original array
console.log(number);


// "find" method

// It return the "first" element we are looking for...

let students = [{id:1,name:"alex"},{id:2,name:"john"}];

let result = students.find(student => {
    return student.id == 1
})
console.log(result);

// findIndex method

// Execute function for each array method
// It return "index" of that array element who "first" pass the test "otherwise" -1

let ages = [11,18,16,17,23];

let result2 = ages.findIndex(age => {
    return age > 18;
})

console.log("Index",result2);

// "some" and "every" method

// some method return "true" if "any" array element pass the test
// every method return "true" if "all" array element pass the test

let scores = [25,34,67,65,80,92];

let result3 = scores.some(score => {
    return score > 50
})
// console.log(result3);

let newScore = scores.every(score => {
    return score > 10
})
console.log(newScore);

// "flat" method

// It creates a new array with the elements of the subarrays "concatenated" into it.

let arr = [1,2,3,[4,5,[6,7,8]]];
console.log("Before flat",arr);//no effect on original array

let result4 = arr.flat();//by default 1 value
console.log("After flat",result4);

let result5 = arr.flat(2);//by default 1 value
console.log("After flat",result5);


// "flatMap" method

// It is the combination of the "map()" method follwed by the "flat()" method of depth "1"

let cart = [{
    name:"mobile",
    qty:2,
    price:500,
},
{
    name:"laptop",
    qty:1,
    price:1000,
}]

let result6 = cart.flatMap(item =>{
    if(item.name == "mobile"){
        return [item,{
            name:"Screen cover",
            qty:1,
            price:0
        }]
    } else {
        return [item]
    }
})

console.log(result6);
