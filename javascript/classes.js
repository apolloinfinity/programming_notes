/*
Tutorial on how classes work with the new ES6+ syntax how to do do OOP with ES6 classes. 
1. Creating a class.
2. The constructor method and 'this'.
3. Class methods and how to use them
4. Class methods vs. Static methods.
5. How to extend a class to another class the the use of super method.
*/


class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    // Class Methods
    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }

    // Static method
    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

class SUV extends Car {
    constructor(doors, engine, color, brand, carStats) {
        super(doors, engine, color, carStats);
            this.brand = brand;
            this.wheels = 4;
            this.ac = true;
        }
    myBrand() {
        return console.log(`This SUV is a ${this.brand}`)
    }
}

const cx5 = new SUV(2, 'V6', 'red', 'Mazda');
const accord = new Car(4, 'I4', 'blue');

console.log(cx5);
console.log(cx5.myBrand());

console.log(Car.totalDoors(cx5, accord));
