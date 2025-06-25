// const { Component, PureComponent } = require("react");

// function Book(author, gener, numOfPages) {
//     this.author = author;
//     this.gener = gener;
//     this.numOfPages = numOfPages;
//     this.ShowDetails = function () {
//         console.log(`author: ${author}\ngener: ${gener}\nnum of pages: ${numOfPages}\n`);
//     }
// }

// const b = new Book('haim', 'hey', 34);


function Car(brand) {
    this.brand = brand;
    this.drive = function () {
        console.log("vooom voom");
    }
    this.feul = function () {
        console.log("glok glok");
    }
}

function Tesla(parentCar) {
    this.isBetery = true;
    Object.setPrototypeOf(this, parentCar);
}

const car = new Car('Toyota');
const tesla = new Tesla(car);

function Animal(name){
    this.name = name;
    this.makeSound = function(){
        console.log("make some sound");
    }
}

function Dog(parentAnimal){
    this.makeSound = function(){
        console.log("hav hav");
    }
    Object.setPrototypeOf(this, parentAnimal);
}

function Cat(parentAnimal){
    this.makeSound = function(){
        console.log("mau");
    }
    Object.setPrototypeOf(this, parentAnimal);
}

const newAnimal = new Animal('new animal');
const newDog = new Dog(newAnimal);
const newCat = new Cat(newAnimal);
newDog.makeSound();
newCat.makeSound();
newAnimal.makeSound();
