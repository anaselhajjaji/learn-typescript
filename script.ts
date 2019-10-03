console.log("//--------------------------//");
console.log("//                          //");
console.log("//         CLASSES          //");
console.log("//                          //");
console.log("//--------------------------//");
class Car {
    // fields  
    model: String;  
    doors: Number;  
    isElectric: Boolean;
    
    constructor(model: String, doors: Number, isElectric: Boolean) {  
        this.model = model;  
        this.doors = doors;  
        this.isElectric = isElectric;  
      }
    
    displayMake(): void {  
        console.log(`This car is ${this.model}`);  
    }
}

const Prius = new Car('Prius', 4, true);  
Prius.displayMake(); // This car is Prius

console.log("//--------------------------//");
console.log("//                          //");
console.log("//         INTERFACES       //");
console.log("//                          //");
console.log("//--------------------------//");
interface ICar {  
    model: String,  
    make: String,  
    display(): void  
}
  
const CarType: ICar = {  
    model: 'Prius',  
    make: 'Toyota',  
    display() { 
        console.log(`This car is ${this.model} made by ${this.make}`); 
    }  
}

CarType.display();