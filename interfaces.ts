interface ICar {  
    model: String,  
    make: String,  
    display(): void  
}
  
export const CarType: ICar = {  
    model: 'Prius',  
    make: 'Toyota',  
    display() { 
        console.log(`This car is ${this.model} made by ${this.make}`); 
    }  
}