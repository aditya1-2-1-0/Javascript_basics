// Destructuring the arrays 

// let hotel = {
//     name:"hotell",
//     location:"street no xyz",
//     categories:["Chinese","Italian","English"]
// }

// Without destructuring
// let items = [2,3,5,6];
// let x = items[0];
// let y = items[1];
// let z = items[2];
// let w = items[3];
// console.log(x,y,z,w);

// With destructuring

// let [x,y,z,w] = items

// console.log(x,y,z,w);

// let [main, ,secondary] = hotel.categories

// console.log(main,secondary);


// switch the category
// without destructure

// let temp = main;
// main = secondary;
// secondary = temp
// console.log(main,secondary);

// [secondary,main] = [main,secondary];

// console.log(main,secondary);

// Destructuring of nested arrays

// let nums = [2,3,[6,9]];
// let [a, ,b] = nums;
// let [a, ,[c,d]] = nums
// console.log(a,c,d);



// Destructuring of "Objects"


let hotel = {
    name:"hotell",
    Location:"street no xyz",
    categories:["Chinese","Italian","English"],
    mainMenu:["FoodA","FoodB","FoodC"],
    starterMenu:["SpecialFoodA","SpecialFoodB"],
    openingHours:{
        sunday:{open:"09:00AM",close:"11:00PM"},
        monday:{open:"10:00AM",close:"10:00PM"},
        tuesday:{open:"10:00AM",close:"11:00PM"}
    }
}

// let {name,Location,mainMenu} = hotel;
// console.log(name,Location,mainMenu);


// Set customize name to Object property
// let {name:hotelName,Location:hotelLocation,mainMenu:Menu} = hotel;
// console.log(hotelName,hotelLocation,Menu);

// Setting Default Values 

// let {name,Menu:newMenu = [],categories = []} = hotel;
// console.log(name,newMenu,categories);

// Destructuring of nested objects

// let {name,openingHours} = hotel;
// console.log(name,openingHours);

// let {monday:{open,close}} = openingHours;
// console.log(open,close);


// Spread  Operator(Unpacking of Array elements)

// let nums = [2,3,5,7]
// console.log(...nums);

// Usecase
// let newArray = [9,10, ...nums]
// console.log(newArray);

// let updatedMainMenu = [...hotel.mainMenu, "FoodD","FoodE"]
// console.log(updatedMainMenu);

// Join 2 Arrays 
// let joinedArray = [...nums,...newArray];
// console.log(joinedArray);

// Create shallow copy using spread operator

// let copyArray = [...updatedMainMenu]
// copyArray[1] = "updated Food"
// console.log(copyArray);
// console.log(updatedMainMenu);

// We can also use spread operators on Strings

// let passion = "Programming";
// console.log(...passion);

// console.log('P','r','o','g','r','a','m');



// Rest pattern and parameter
// Syntax of REST(...) Get elements and packed them into array

// let [a,b,...rest] = nums;
// console.log(rest);

// let {sunday,...weekDays} = hotel.openingHours;
// console.log(sunday,weekDays);



// Short Circuiting (&&,||)
// Falsy Values => 0,false,null,undefined,''(empty string)

// And (&&) operator (Output true if all input true)

// let result = 0 && null;
// console.log(result);//original form

// OR (||) operator (Output true if any given input true)
// let result = "" || null;
// console.log(result);
// As || opertor find first output true.It simply return that true value and does not move towards next operands



// let numGuests = null;
// let result = numGuests || 10;
// console.log(result);


// for nullish coaleshing operator (??) only "null" and "undefined" are falsy value

// let result2 = numGuests ?? 10
// console.log(result2); //0 is not nullish
// It return first non-nullish value



// for-of loop

// let menu = [...hotel.mainMenu,...hotel.starterMenu];
// console.log(menu);

// for(let elem of menu) console.log(elem);


// for(let [i,item] of menu.entries()) {
//     console.log(`${i+1}: ${item}`);
    
// }

// for(let item of menu.entries()) {
//     console.log(`${item[0]+1}: ${item[1]}`);
    
// }



// Enhanced Object literals


// Keys(Properties)

// let properties = Object.keys(hotel);
// console.log(properties);

// for(let key of properties){
//     console.log(key);
    
// }

// Values

// let values = Object.values(hotel)
// console.log(values);



let openingHours = {
    sunday:{open:"09:00AM",close:"11:00PM"},
    monday:{open:"10:00AM",close:"10:00PM"},
    tuesday:{open:"10:00AM",close:"11:00PM"}
}


// complete object
let entries = Object.entries(openingHours);

// for(let [key,values] of entries) {
//     console.log(entries);
// }

for(let [day,{open,close}] of entries){
    console.log(`On ${day} We open at ${open} And close at ${close}`);
    
}


// let itemSet = new Set([1,2,3,4,1,5,6,5])
let itemSet = new Set("Programming")
// console.log(itemSet);
// console.log(itemSet.size);
// console.log(itemSet.has(3));
// itemSet.add(9)
// console.log(itemSet);
// itemSet.delete(9)
// console.log(itemSet);

// set are also iterables

for(let item of itemSet){
    console.log(item);
    
}


// Map

let restaurantMap = new Map()

// Adding values into the map
restaurantMap.set("name","Bombay Hotel")
restaurantMap.set(1,"Address1")
restaurantMap.set(2,"Address2").set(true,"We are open today").set(false,"We are close today")
console.log(restaurantMap);

// getting value
// console.log(restaurantMap.get(2));
console.log(restaurantMap.get(true));


console.log(restaurantMap.size);
