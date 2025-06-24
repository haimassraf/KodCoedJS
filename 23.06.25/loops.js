// Exercise 1
const doubleValues = (num) => num * 2;

const numbers = [1, 2, 3, 4, 5]

const newArr = numbers.map(doubleValues);

// Exercise 2
const isEven = (num) => num % 2 === 0;
function onlyEvenValues(arr) {
    const newArr = arr.filter(isEven);
    return newArr
}

// Exercise 3
function showFirstAndLast(arr) {
    let result = [];

    arr.forEach((v, i) => {
        if ((i === 0 || i === arr.length - 1) && typeof v === 'string') {
            result.push(v);
        }
    });

    return result;
}

// Exercise 4
function vowelCount(str) {
    const obj = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };
    const letters = str.toLowerCase().split('');
    letters.forEach((letter)=> {
        if (letter in obj){
            obj[letter] ++;
        }
    })
    return obj;
}

// Exercise 5
function capitalize(str) {
    let newStr = "";
    for (let char of str) {
        newStr += char.toUpperCase();
    }
    return newStr;
}

// Exercise 6

function shiftLetters(str) {
    let newStr = "";
    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            newStr += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        }
        else if (char >= 'A' && char <= 'Z') {
            newStr += char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
        }
        else {
            newStr += char;
        }
    }
    return newStr;
}


// Exercise 7
function swapCase(str){
    const words = str.split(' ');

    const res = words.map((v, i) => {
        return i % 2 === 0? v.toLowerCase(): v.toUpperCase();
    });

    return res.join(' ');
}

console.log(swapCase("helLo WORld!"));
