"use strict";
const inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    console.log(`This is the input ${input.attributes}`);
    console.log("Hello there little watchers!");
});
let add;
add = function (a, b, c) {
    return a + b;
};
let logUser;
logUser = function (userInfo) {
    console.log(`User logged in with account with credentials: ${userInfo.name} | ${userInfo.lastName} | ${userInfo.age}`);
};
logUser({ name: "Mihail", age: 16, lastName: "Mihaylov" });
let numche;
let addFunction;
class GenchoLocalStore {
    constructor(countOfCustomers, nameOfTheShop) {
        this.countOfCustomers = countOfCustomers;
        this.nameOfTheShop = nameOfTheShop;
    }
    getClients() {
        return `The clients count is ${this.countOfCustomers}`;
    }
    getNameOfTheShop() {
        return `The name of the shop is: ${this.nameOfTheShop}`;
    }
}
let printSomeData = (printSomeData, someDataToPrint) => {
    if (someDataToPrint)
        return `The information that i received is ${printSomeData} and ${someDataToPrint}`;
    else
        return `The information that i received is ${printSomeData}`;
};
let firstNum = 2;
let secondNum = 3;
let strToPrint = printSomeData(firstNum, secondNum);
let myName = "Misho";
class Person {
    constructor(name, age, personalData) {
        this.name = name;
        this.age = age;
        this.personalData = personalData;
    }
    speakYourself() {
        return `I am ${this.name} and i am also ${this.age} years old!`;
    }
    greetings(name) {
        return `${this.name} said hi to ${name}`;
    }
    displayPersonalInformation() {
        return this.personalData;
    }
}
let misho = new Person("Mihail", 17, { favoriteTown: "London", "favColor": "red", "favPerson": "His mother" });
console.log(misho.displayPersonalInformation());
let greetSomebody;
// Generics in a simple term
//Enums in TypeScript
var Colours;
(function (Colours) {
    Colours[Colours["RED"] = 0] = "RED";
    Colours[Colours["BLUE"] = 1] = "BLUE";
    Colours[Colours["YELLOW"] = 2] = "YELLOW";
    Colours[Colours["GREEN"] = 3] = "GREEN";
    Colours[Colours["MAGENTA"] = 4] = "MAGENTA";
})(Colours || (Colours = {}));
;
//Tuples in Typescript
add(1, 3, "Misho");
