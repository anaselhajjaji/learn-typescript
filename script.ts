console.log("//--------------------------//");
console.log("//                          //");
console.log("//         CLASSES          //");
console.log("//                          //");
console.log("//--------------------------//");
import { Car } from "./classes";
const Prius = new Car('Prius', 4, true);
Prius.displayMake(); // This car is Prius

console.log("//--------------------------//");
console.log("//                          //");
console.log("//         INTERFACES       //");
console.log("//                          //");
console.log("//--------------------------//");
import { CarType } from "./interfaces";
CarType.display();