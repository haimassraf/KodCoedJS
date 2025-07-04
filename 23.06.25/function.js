function start(num, fun) {
   return fun(num, 2)
}

const multiply = (num1, num2) => {
   res = num1 * num2
   return subtract(res, 5)
}

const subtract = (num1, num2) => {
   res = num1 - num2
   return divide(res, 10)
}

const divide = (num1, num2) => num1 / num2

const add = (num1, num2) => num1 + num2

res = start(5, multiply)
// console.log(`res = ${res}`);

// block scope
function test() {
   let x = 5;
   if (true) {
      let x = 10;
   }
   console.log(x);
}

function Person(name, age) {
   this.name = name;
   this.age = age;
}

const newPerson = new Person('haim', 24);
console.log(newPerson);
