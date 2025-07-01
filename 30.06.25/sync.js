import * as fs from 'node:fs';
import os from 'node:os';

// Exercice 1
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error: ", err);
        return;
    }

    console.log("File Content:");
    console.log(data);

    fs.stat('file.txt', (err, stats) => {
        if (err) {
            console.error("Error: ", err);
            return;
        }

        console.log(`Size: ${stats.size} bytes`);
        console.log(`Created At: ${stats.birthtime.toLocaleDateString()}`);
    });
});


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
fs.readFile("file.txt", "utf8", (err, data) =>{
    if(err){
        console.log("Error ", err);
        return
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
}, 1000)
