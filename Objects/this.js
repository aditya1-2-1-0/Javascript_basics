// this keyword
"use strict";
// In each method we have an access of special keyword called
// "this"

// "this" keyword represent the objects."Calling" the method in which "this" is present

let person = {
    fisrtName: "Aditya",
    lastName: "Wadbudhe",
    city: "Nagpur",
    birthYear:2000,
    Education: "Software Engineer",
    getSummary:function(){
        // return `${this.fisrtName} ${this.lastName} lives in ${this.city}.His birthyear is ${this.birthYear} `
        return this
    }
}

// console.log(person.getSummary());

// Step1 Check in which method we use "this" keyword
// Step2 Owner of that method (Who is calling those method)



// call and apply method
// We can manually set the value of "this" keyword using call and apply method

let mainPlane = {
    airline: "Fly India",
    iatacode: "FI",
    bookings: [],
    book:function(flightNum,name){
        console.log(`${name} Booked Flight on ${this.airline} with flight number ${this.iatacode} ${flightNum} `);
        this.bookings.push({flight:`${this.airline}`,name:name,flightNum:`${this.iatacode}${flightNum}`})
    }
}

mainPlane.book(553,"Aditya")
mainPlane.book(643,"Jack");

// console.log(mainPlane);

// New Airline launched of same group

let childPlane = {
    airline: "Child Plane",
    iatacode: "CP",
    bookings:[],
}
let book = mainPlane.book;

// book(656,"lui")//book is regular function
// "this" value is "undefined" at least in strict mode

// Solution Using "call" method

book.call(childPlane,689,"Zack")

// console.log(childPlane);
book.call(mainPlane,577,"Harsh")
// console.log(mainPlane);

// apply method

book.apply(childPlane,[784,"Jaggy"])
console.log(childPlane);
