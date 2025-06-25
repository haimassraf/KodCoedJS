// Exercise 1 - Phone
const Phone = function(brand, model){
    this.brand = brand;
    this.model = model;
    this.details = function(){
        console.log(`Phone: ${this.brand} ${this.model}`);
    }
}

const apple = new Phone('IPhone', '13');
apple.details()


// Exercise 2 - Rectangle
const Rectangle = function(width, height){
    this.width = width;
    this.height = height;
    this.area = function(){
        return width * height;
    }
}

const floor = new Rectangle(10, 5);
console.log(floor.area());


// Exercise 3 -Bank Account
const BankAccount = function(owner, balance){
    this.owner = owner;
    this.balance = balance;
    this.deposit = function(amount){
       this.balance += amount;
        console.log('The money added succesfully');
    }

    this.withdraw = function(amount){
        if(this.balance - amount >= 0){
            this.balance -= amount;
            console.log('The quantity was successfully dropped');
        }
        else{
            console.log('You dont have enught money on the bank');
        }
    }
    this.checkBalance = function(){
        console.log(`Balance: ${this.balance}`);
    }
}

const newBank = new BankAccount('haim', 1000);
newBank.deposit(500);
newBank.withdraw(2000);
newBank.checkBalance();


// Exercise 4 - Animal & dog
const Animal = function(name){
    this.name = name;
    this.speak = function(){
        console.log(`${this.name} makes a sound`);
    }
}

const Dog = function(name, animalParet){
    this.name = name;
    this.bark = function(){
        console.log(`${this.name} barks`);
    }
    Object.setPrototypeOf(this, animalParet);
}

const cat = new Animal('cat');
const dog = new Dog('dog', cat);
dog.speak();
dog.bark();


// Exercise 5 - vehicle & car
const Vehicle = function(type){
    this.type = type;
    this.describe = function(){
        console.log(`This is a ${this.type}`);
    }
}

const Car = function(brand, vehicleParent){
    this.brand = brand;
    this.info = function(){
        console.log(`This is a ${this.brand} ${this.type}`);
    }
    Object.setPrototypeOf(this, vehicleParent)
}


const car = new Vehicle('car');
const bmw = new Car('BMW', car);
bmw.describe();
bmw.info();

// Exercise 6 - shape polymorphism
const Shape = function(){
    this.area = function(){
        return 0;
    }
}

const Circle = function(radius, shapeParent){
    this.radius = radius;
    this.area = function(){
        return Math.PI * (radius * radius)
    }
    Object.setPrototypeOf(this, shapeParent);
}

const Square = function(side, shapeParent){
    this.side = side;
    this.area = function(){
        return side * side;
    }
    Object.setPrototypeOf(this, shapeParent);
}

const shape = new Shape();
const circle = new Circle(3, shape);
const square = new Square(4, shape);
console.log(shape.area());
console.log(circle.area());
console.log(square.area());


// Exercise 7 - Book
class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    info(){
        console.log(`${this.title} by ${this.author}`);
    }
}

const theHobbit = new Book('The Hobbit', 'Tolkien');
theHobbit.info();

// Exercise 8 - Person & student
class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello, im ${this.name}`);
    }
}

class student extends Person{
    constructor(name, school){
        super(name);
        this.school = school;
    }
    study(){
        console.log(`${this.name} is studting at ${this.school}`);
    }
}

const haim = new student('haim', 'kodecod');
haim.greet();
haim.study();


// Exercise 8 - Employee & manager
class Employee{
    #salary
    constructor (salary){
        this.#salary = salary;
    }
    getSalary(){
        return this.#salary;
    }
    work(){
        console.log("Employee is working");
    }
}

class Manager extends Employee{
    constructor(salary){
        super(salary);
    }
    work(){
        console.log("Manager is managing");
    }
}

const employee = new Employee(400);
const manager = new Manager(500);
console.log(employee.getSalary());
employee.work();

console.log(manager.getSalary());
manager.work()
