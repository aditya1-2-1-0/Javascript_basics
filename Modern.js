// Modern Javascript Modules, and tooling

// "Exporting and Importing" ES6 modules


console.log("Exporting Module");


export let order = function(buyer,item){
    console.log(`${buyer} ordered this ${item}`);
    
}

let laptopPrice = 5000;
let quantity = 25;

// export {laptopPrice,quantity as quant};

export default order;



// IIFE
let resultIIFE = (function(){
    let orders = [];
    let addToCart = function(product,quantity){
        console.log(`${product} ordered ${quantity}`);
        orders.push({product,quantity})
    }
    return {
        orders,
        addToCart
    }
})()

resultIIFE.addToCart("Burger",5);
resultIIFE.addToCart("Biryani",8)

console.log(resultIIFE.orders);



// Closures

// Closure means "inner" function has an access to the variables and parameters
//  of "outer" function even after outer function has returned.

let outerFunction = function(outerParameter){
    let outerVariable = "outer variable";

     let innerFunction = function(){
        console.log(outerVariable,outerParameter);
        
     }
     return innerFunction
}

let innerFunc = outerFunction("outer parameter")
innerFunc();



let counter = function(){
    let count = 0;
    let innerCounter = function(){
        return count = count + 1;
    }
    return innerCounter;
}

let innerCount = counter();
console.log(innerCount());
console.log(innerCount());
console.log(innerCount());
