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

console.log("//--------------------------//");
console.log("//                          //");
console.log("//         PROMISES         //");
console.log("//                          //");
console.log("//--------------------------//");
const promise1 = new Promise((resolve, reject) => {
    resolve(123);
});
promise1.then((res) => {
    console.log('I get called:', res === 123); // I get called: true
    return 456;
}).then((res) => {
    console.log('I get called:', res === 456); // I get called: true
});
promise1.catch((err) => {
    // This is never called
});
const promise2 = new Promise((resolve, reject) => {
    reject(new Error("Something awful happened"));
});
promise2.then((res) => {
    // This is never called
});
promise2.catch((err) => {
    console.log('I get called:', err.message); // I get called: 'Something awful happened'
});

console.log("//--------------------------//");
console.log("//                          //");
console.log("//         JSON             //");
console.log("//                          //");
console.log("//--------------------------//");
const jsonStr = JSON.stringify({ name: "bob", age: 34, created: new Date() });
console.log(jsonStr);
const jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);

console.log("//--------------------------//");
console.log("//                          //");
console.log("//         Async/Await      //");
console.log("//                          //");
console.log("//--------------------------//");
function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
}

// async function always returns a Promise
async function dramaticWelcome(): Promise<void> {
    console.log("Hello");

    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count:number = await delay(500, i);
        console.log(count);
    }

    console.log("World!");
}

dramaticWelcome();