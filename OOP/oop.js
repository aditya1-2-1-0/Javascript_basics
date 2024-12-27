// Object Oriented Programming

// Constructor function and the "new" keyword
// We can not use "arrow" function as constructor
// Call "constructor" function using "new" keyword

// 1 new {object} created empty initially
// 2 "this" = {object} 
// 3 object linked to prototype
// 4 function automatically return {object}

let Car = function(color,model) {
    // instance properties
    this.color = color,
    this.model = model
    // methods
    Car.prototype.startEngine = function() {
        console.log("This is start engine method");
        
    }
}

// console.log(Car.prototype);

let instanceOfCar = new Car("Yellow",2024)
let instance = new Car("Blue",2022) 
// console.log(instance instanceof Car);
console.log(instanceOfCar.startEngine());

// Prototype 
// Each object created by "constructor" function have an access
// to all "methods" present inside that "constructor" prototype


console.log(instance.__proto__);
// we can also set "properties" to prototype
Car.prototype.model = 2023

console.log(Car.prototype.isPrototypeOf(Car));

let arr = [1,2,3,4,5,6]
console.log(arr.__proto__.__proto__);//chaining of prototype
console.log(Object.prototype);




// ES6 Classes (They still implement prototypal inheritence behind the scene)

// class declaration

class Cars {
    constructor(color,model) {
        this.color = color;
        this.model = model;
    }
        startEngine (){
            console.log("This is start engine method of Cars");
        }
}

Cars.prototype.breakMethod = function(){
    console.log("This is break method of Cars");
}

let honda =new Cars("Red",2029);
// console.log(honda.__proto__.isPrototypeOf(honda));
// honda.startEngine()

console.log(honda.__proto__);


// Imp points
// Classes are not hoisted
// Classes are also first class citizens(Pass as a argument or return)
// Classes are executed in strict mode