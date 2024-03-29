class Cachorro {
    name: string;
    age: number;
    color: string;

    constructor(name: string, color: string, age: number) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    bark(): void {
        console.log('au au');
    }
}

class House {
    owner: string;
    address: string;
    color: string;
    area: number;

    constructor(owner: string, address: string, color: string, area: number) {
        this.owner = owner;
        this.address = address;
        this.color = color;
        this.area = area;
    }
}

class Flight {
    origin: string;
    destination: string;
    departureDate: Date;
    arrivalDate: Date;
    passengers: number;

    constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.passengers = passengers;
    }
}