// section 1
let a = "first string";
let b = "secound string";
a, b = [b, a];
console.log(a);
console.log(b);

// //section 2
const grid = [
    ['X', 'o', 'x', 'X', 'o'],
    ['x', 'x', 'X', 'o', 'o'],
    ['X', 'o', 'o', 'x', 'X'],
    ['o', 'o', 'X', 'x', 'o'],
    ['X', 'x', 'o', 'o', 'X']
];

let cnt = 0;
for (let i = 0; i < grid.length; i++){
    for (let j = 0; j< grid[i].length; j++){
        if( grid[i][j] == "X"){
            cnt ++;
            console.log(`'X' found in [${i}][${j}]`);
        }
    }
}
console.log(`sum of all 'X': ${cnt}`);

// section 3
let family = { parents: {}, children: [ { name: "Ali" }, { name: "Lea" }, { name: "Mona" } ] };
let thirdChild = family.children[2]
console.log(thirdChild.name);
