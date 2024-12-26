// Introduction to objects in javascript

let car = {
    color: "black",
    model: "2024",
    company: "Toyota"
}

console.log(car);

// Accessing the javascript object properties

console.log(car["company"]);
// other way
console.log(car.color);

let propertyName = "company";

console.log(car[propertyName]);

// "Modify" the object

car.color = "brown"

console.log(car.color);
console.log(car);


// Delete properties of objects

let obj = {
    prop1: "value1",
    prop2: "value2"
}

// delete obj.prop1
// delete obj["prop2"]

let returnValue = delete obj["prop2"]
// It always return true
console.log(obj.prop2,returnValue);
