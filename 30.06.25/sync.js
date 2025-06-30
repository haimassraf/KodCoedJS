// Exercice 1
import { readFile } from 'node:fs';
import { resolve } from 'node:path';

// const cb = (err, data) => {
//     if (err) console.log(err);
//     const dataString = JSON.parse(data);
//     console.log(dataString.length);
// }

// readFile("file.json", cb);

new Promise((resolve, reject) => {
    reject(5)
}).then(num => console.log(num))
    .catch(err => console.log(err));
