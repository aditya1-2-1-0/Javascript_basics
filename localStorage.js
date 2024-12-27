// Local Storage

// set item
// get item
// update item

// Set the item in local storage

localStorage.setItem('passion','programming')
localStorage.setItem('age',24)
// console.log(localStorage);

// Get item from local storage
console.log(localStorage.getItem('age'));

// Update item in local storage
localStorage.setItem('age',26)// overwrite the previous value

// console.log(localStorage);

// remove item
localStorage.removeItem('age')



// How to store complex datastructure like array of objects

// Ultimately in local storage data store in string format

let vehicles = [
    {name:'car',price:10000},
    {name:'bike',price:5000},
]

console.log(vehicles);

let stringOfVehicles = JSON.stringify(vehicles)
console.log(stringOfVehicles);

localStorage.setItem("vehicles",stringOfVehicles)


// get stored item in object format

let storedData = localStorage.getItem(vehicles);

let objectFormat = JSON.parse(storedData)
console.log(typeof objectFormat);

