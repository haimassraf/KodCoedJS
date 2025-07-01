import * as fs from 'node:fs';
import os from 'node:os';


// Exercice 1
const p1 = new Promise((resolve, rejects) => {
    fs.readFile("file.txt", "utf8", (err, file) => {
        if (err) {
            rejects(err);
        }
        resolve(file);
    })
})

p1.then((file) =>
    fs.stat("file.txt", (err, data) => {
        if (err) {
            console.log("Error: ", err);
            return;
        }
        console.log("File content:");
        console.log(file);
        console.log(`Size: ${data.size} bytes`);
        console.log(`Created At: ${data.birthtime.toLocaleDateString()}`);
    })
)
.catch((err) => console.log("Error rej: ", err))


// Exercise 2
fs.readdir('../30.06.25/', (err, files) => {
    if (err) {
        console.log("Error: ", err);
        return;
    }
    files.forEach(file => {
        fs.lstat(`../30.06.25/${file}`, (err, stats) => {
            if (err) {
                console.log("Error: ", err);
                return;
            }
            if (stats.isFile()) {
                console.log("File: ", file);
            }
        })
    });
})


// Exercise 3
function counter(n) {
    if (n < 0) {
        console.log("Times up!");
        return
    }
    console.log(n);
    setTimeout(() => { counter(n - 1) }, 1000)
}

counter(5)


// Exercise 4
fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error ", err);
        return;
    }
    const allLines = data.split('\n');
    const randomIndex = Math.floor(Math.random() * allLines.length)
    console.log("Random line: ", allLines[randomIndex]);
})


// Exercise 5
let cnt = 5;
const timer = setInterval(() => {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    if (cnt > 0) {
        console.log(`Free memory: ${((freeMem / totalMem) * 100).toFixed(2)}%`);
    }
    else {
        console.log("Memory loggin complete.");
        clearInterval(timer);
    }
    cnt--;
}, 2000)
