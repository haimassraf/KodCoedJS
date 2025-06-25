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
