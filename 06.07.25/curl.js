import { createServer } from 'node:http'
import { readFile, writeFile } from 'node:fs/promises'
import { json } from 'node:stream/consumers';
const PORT = 3000;

const server = createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;
    let students;
    let tichers;
    switch (method) {
        case "GET":
            switch (url) {
                case "/students":
                    students = await getData("students");
                    res.end(students)
                    break;
                case "/tichers":
                    tichers = await getData("tichers");
                    res.end(tichers);
                    break;
                case "/studentsAndTichers":
                    students = await getData("students");
                    tichers = await getData("tichers");
                    const newRes = students + tichers
                    res.end(newRes)
                    break;
                default:
                    res.end("wrong path");
                    break;
            }
        case "POST":
            let body = '';
            switch (url) {
                case "/students":
                    body = '';
                    req.on('data', chunk => {
                        body += chunk.toString();
                    });
                    req.on('end', async () => {
                        const newData = await addData('students', body);
                        res.end(JSON.stringify(newData))
                    })
                    break;
                case "/tichers":
                    body = '';
                    req.on('data', chunk => {
                        body += chunk.toString();
                    });
                    req.on('end', async () => {
                        const newData = await addData('tichers', body);
                        res.end(JSON.stringify(newData))
                    })
                    break;
            }
        default:
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

async function getData(path) {
    try {
        const file = await readFile(`${path}.json`, "utf8");
        return file;
    } catch (err) {
        console.log("Error:", err);
    }
}

async function addData(path, body) {
    try {
        const file = await getData(path);
        const data = JSON.parse(file);
        const newData = JSON.parse(body);
        data.push(newData);
        await writeFile(`${path}.json`, JSON.stringify(data));
        return data;
    } catch (err) {
        console.log("Error: ", err.message)
    }
}