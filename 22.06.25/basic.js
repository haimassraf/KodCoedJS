// section 1
let a = "first string";
let b = "secound string";

a = a + b;
b = a.substring(0, a.length - b.length);
a = a.substring(b.length);
console.log(a, b);


// //section 2
const grid = [
    ['X', 'o', 'x', 'X', 'o'],
    ['x', 'x', 'X', 'o', 'o'],
    ['X', 'o', 'o', 'x', 'X'],
    ['o', 'o', 'X', 'x', 'o'],
    ['X', 'x', 'o', 'o', 'X']
];

let cnt = 0;
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == "X") {
            cnt++;
            console.log(`'X' found in [${i}][${j}]`);
        }
    }
}
console.log(`sum of all 'X': ${cnt}`);

// section 3
const family = { parents: {}, children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }] };
const allChilds = family.children;
const thirdChild = allChilds[2];
console.log(`Three child name: ${thirdChild.name}`);
const allChildsNames = allChilds.map((child) => child.name);
console.log(`All childs names: ${allChildsNames.join(', ')}`);


// section 4
let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < Math.floor( arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
}
console.log(arr);

// section 5
const obj = {
    'number': 0,
    'string': 0,
    'object': 0,
    'boolean': 0,
    'null': 0
}

const mixedArray = [
  42,
  "hello",
  true,
  { name: "Alice" },
  null,
  3.14,
  false,
  "world",
  { age: 30 },
  null
];

mixedArray.forEach((el) => {
    const type = typeof el;
    if (el === null){
        obj[el] ++;
    }
    else{
        obj[type] ++;
    }
})

console.log(obj);
