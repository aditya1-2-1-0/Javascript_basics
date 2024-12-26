// for-in loop (Each iteration return a key of object)

let car = {
    model:2024,
    color:"white",
    brand:"Toyota",
}

console.log(car);
let x = ""
for(let Key in car){
    x=x+car[Key]
}
console.log(x);
