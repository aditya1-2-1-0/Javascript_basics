// Class inheritance(sub class)

// Parent Class
class Cars {
    constructor(color,model) {
        this.color = color;
        this.model = model;
    }
        
    startEngine (){
            console.log("This is start engine method of Cars");
        }
    }

// Child Class

class Bike extends Cars {
    // Add some new properties and "method" as well
    constructor(color,model,engineCapacity) {
        super(color,model)
        this.engineCapacity = engineCapacity;
    }
    bikeMethod(){
        console.log("This is method of bike class");
        
    }
}

let newBike = new Bike("Black",2023,"125cc");
let bike2 = new Bike("Brown",2021,"200cc")
console.log(newBike,bike2);
