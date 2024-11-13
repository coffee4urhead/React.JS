const inputs = document.querySelectorAll("input");
inputs.forEach(function(input) {
    console.log(`This is the input ${input.attributes}`);
    console.log("Hello there little watchers!");
    } 
)
let add: Function;

add = function(a: number, b: number, c?: number | string): number {
    return a + b;
}

type objWithName = {name: string, age: number, lastName: string}

let logUser: Function;

logUser = function(userInfo: objWithName) {
    console.log(`User logged in with account with credentials: ${userInfo.name} | ${userInfo.lastName} | ${userInfo.age}`);
}

logUser({name: "Mihail", age: 16, lastName: "Mihaylov"});

interface IPerson<T> {
    name: string,
    age: number,
    personalData: T
    speakYourself(): string
    greetings(name: string): string
    displayPersonalInformation(): T
}

let numche: number;
let addFunction: (a: number, b : number, c: string, d?: object) => number
interface IShop {
    countOfCustomers: number,
    nameOfTheShop: string,
    getClients: () => string,
    getNameOfTheShop: () => string,
}

class GenchoLocalStore implements IShop {
    constructor(
        public countOfCustomers: number,
        readonly nameOfTheShop: string,
    ){}

    getClients(): string {
        return `The clients count is ${this.countOfCustomers}`
    }

    getNameOfTheShop(): string {
        return `The name of the shop is: ${this.nameOfTheShop}`
    } 
}

let printSomeData = <T extends number | string>(printSomeData: T, someDataToPrint?: T) =>  {
    if(someDataToPrint)
        return `The information that i received is ${printSomeData} and ${someDataToPrint}`
    else
       return `The information that i received is ${printSomeData}`
}

let firstNum: number = 2
let secondNum: number = 3

let strToPrint: string = printSomeData(firstNum, secondNum);
let myName: string = "Misho";

class Person<T> implements IPerson<T> {
    constructor(
        public name: string,
        public age: number,
        public personalData: T,
    ){}

    speakYourself(): string {
        return `I am ${this.name} and i am also ${this.age} years old!`;
    }

    greetings(name: string): string {
        return `${this.name} said hi to ${name}`;
    }
    displayPersonalInformation(): T {
        return this.personalData;
    }
}
let misho = new Person("Mihail", 17, {favoriteTown: "London", "favColor": "red", "favPerson": "His mother"});
console.log(misho.displayPersonalInformation())
let greetSomebody: (nameToGreed: string) => string;

// Generics in a simple term
//Enums in TypeScript

enum Colours { RED, BLUE, YELLOW, GREEN, MAGENTA };

//Tuples in Typescript


add(1, 3, "Misho")