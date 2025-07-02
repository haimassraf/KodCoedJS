// Exercise 1
import * as fs from 'node:fs/promises'

function readFilePromise(path) {
    return fs.readFile(path, 'utf8')
}

// readFilePromise('./exemple.txt')
//     .then((data) => console.log("data: ", data))
//     .catch((err) => console.log("Error: ", err))


// Exercise 2
async function readFileAsync(path) {
    try {
        const file = await fs.readFile(path, 'utf8')
        return file;
    } catch (err) {
        console.log("Error: ", err.message);
    }
}

let a = await readFileAsync('./exemple.txt')
// console.log(a);



// Exercise 3
async function getFileSize(path) {
    try {
        const file = await fs.stat(path);
        return file.size;
    } catch (err) {
        console.log("Error: ", err.message);
    }
}

a = await getFileSize('./exemple.txt')
// console.log(a);


// Exercise 4
async function listFiles(dir) {
    try {
        const files = await fs.readdir(dir);
        const newList = [];
        for (const file of files) {
            const nFile = await fs.stat(file);
            if (nFile.isFile()) {
                newList.push(file)
            }
        }
        return newList;
    } catch (err) { console.log("Error: ", err) }
}

const allFiles = await listFiles('./')
// console.log(allFiles);


// Exercise 5
async function readFilesInOrder(files) {
    try {
        for (const file of files) {
            try {
                const a = await readFileAsync(file);
                console.log(a)
            } catch (err) { console.log("Error: ", err) }
        }
    } catch (err) { console.log("Error: ", err) }
}

// a = await readFilesInOrder(['./exemple.txt', './exemple2.txt', './fetch.js']);


// Exercise 6
async function readFilesParallel(files) {
    try {
        const readPromises = files.map(file => readFileAsync(file));
        return await Promise.all(readPromises);
    } catch (err) { console.log("Error: ", err) }
}

a = await readFilesParallel(allFiles)
console.log(a);

