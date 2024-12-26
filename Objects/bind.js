// bind method

function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} on journey`);
    
}
// greet()

let user = {
    firstName: 'John',
    lastName: 'Doe',
}

let greets = greet.bind(user)

greets()


// "Object/arrays" how "reference" are passed to variable

let arr = [1,2,3,4,5]
let getRef = arr;

getRef[5] = 7;
getRef.shift()

console.log("original array",arr);//also changed
console.log("getRef array",getRef);

// pass by value

let getValue = [...arr]

getValue[6] = 8
getValue.shift()

console.log("original",arr);
console.log("getValue",getValue);



