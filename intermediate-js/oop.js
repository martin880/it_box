class Vehicle {
    constructor(name, type, price){
        this.name = name;
        this.type = type;
        this.price = price;
    }
    startEngine(){
        console.log("Mesin menyala")
    }
    stopEngine(){
        console.log("Mesin mati")
    }
}

let vehicle = new Vehicle("Civic", "Sedan", 500000000);
console.log(vehicle);

vehicle.startEngine();

