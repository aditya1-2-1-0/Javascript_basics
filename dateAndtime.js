// Date and Time

// Date Object always carry both "Date" and "Time"

// Using Date method 
// let currentDate = new Date(2024,7,24); //0 to 11 (month)
// console.log(currentDate);


// Using timestamp(integer number represent in "ms" from 1-1-1970)
// let currentDate = new Date(0); //0 is time in ms
// console.log(currentDate);


// To get time in "ms"
// let currentDate = new Date().getTime();
// console.log(currentDate);

let completeDateAndTime = new Date();
console.log(completeDateAndTime);

// Get full Year
console.log(completeDateAndTime.getFullYear());

console.log(completeDateAndTime.getMonth());//0 to 11 month
console.log(completeDateAndTime.getDay());
console.log(completeDateAndTime.getDate());
console.log(completeDateAndTime.getHours());





