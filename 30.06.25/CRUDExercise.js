import * as fs from 'node:fs';

function create(newData) {
    fs.readFile("db.txt", "utf8", (err, file) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            const data = JSON.parse(file);
            if (data.length === 0) {
                newData["id"] = 1;
            } else {
                const allId = data.map(el => el["id"]);
                const highestId = Math.max(...allId);
                newData["id"] = highestId + 1;
            }
            console.log("new data: ", newData);
            data.push(newData);

            fs.writeFile("db.txt", JSON.stringify(data), (err) => {
                if (err) {
                    console.log("Error: ", err);
                }
            })
        }
    })
}

function read() {
    fs.readFile("db.txt", "utf8", (err, file) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            const data = JSON.parse(file);
            console.log("All data: ");
            console.log(data);
        }
    })
}

function getAllObjects() {
    return new Promise((res, rej) => {
        fs.readFile("db.txt", "utf8", (err, file) => {
            if (err) {
                rej(err)
            } else {
                res(JSON.parse(file))
            }
        })
    })
}

function updateById(id, newData){
    return new Promise((res, rej) => {
        getAllObjects()
            .then((data) => {
                const i = data.findIndex(obj => obj.id === id);
                if (i === -1) {
                    rej(`Id ${id} not found`);
                    return;
                }

                data[i].name = newData.name? newData.name: data[i].name;
                data[i].lastName = newData.lastName? newData.lastName: data[i].lastName;
                fs.writeFile("db.txt", JSON.stringify(data), (err) => {
                    if (err) {
                        rej("Error: " + err);
                        return;
                    }
                    res(`Object with id ${id} update successfully.`);
                });
            })
            .catch((err) => {
                rej(err);
            });
    })
}

function deleteById(id) {
    return new Promise((res, rej) => {
        getAllObjects()
            .then((data) => {
                const i = data.findIndex(obj => obj.id === id);
                if (i === -1) {
                    rej(`Id ${id} not found`);
                    return;
                }

                data.splice(i, 1);

                fs.writeFile("db.txt", JSON.stringify(data), (err) => {
                    if (err) {
                        rej("Error: " + err);
                        return;
                    }
                    res(`Object with id ${id} removed successfully.`);
                });
            })
            .catch((err) => {
                rej(err);
            });
    });
}


const newObject = {
    "firstName": "Avraham",
    "lastName": "king"
}

create(newObject);

read();

updateById(2, newObject)
.then((log) => console.log(log))
.catch((err) => console.log(err))


deleteById(5)
    .then((log) => { console.log(log) })
    .catch((err) => { console.log(err) })
