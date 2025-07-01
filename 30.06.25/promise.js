import * as fs from "node:fs";

fs.readFile("file.txt", "utf8", (err, file) => {
    if (err) {
        console.log("Error: ", err);
    }
    else {
        fs.writeFile("newFile.txt", file.toUpperCase(), (err) => {
            if (err) {
                console.log("Error: ", err);
            }
        });
        fs.readFile("newFile.txt", "utf8", (err, file) => {
            if (err) {
                console.log("Error: ", err);
            }
            else {
                console.log(file);
            }
        })
    }
})


// ------------  PROMISE  --------------
function readFilePromise() {
    return new Promise((res, rej) => {
        fs.readFile('file.txt', "utf8", (err, data) => {
            if (err) {
                rej(err)
            } else {
                res(data)
            }
        })
    })
}

function writeFilePromise(data) {
    return new Promise((res, rej) => {
        fs.writeFile("b.txt", data, (err) => {
            if (err) {
                rej(err)
            } else {
                res(data)
            }
        })
    })
}

const filePromise = readFilePromise();
const writePromise = writeFilePromise();

filePromise
    .then((res) => {
        writeFilePromise(res)
    })
    .then(res => { console.log(res) })
    .catch()