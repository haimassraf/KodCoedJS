import http from 'node:http';

const router = {
    GET:{
        '/': (req, res) => res.end(JSON.stringify({"msg": "hello world"}))
    },
    POST:{
        '/': (req, res) => res.end(JSON.stringify(req.data))
    }
}

const server = http.createServer();
let counter = 1;
server.on('request', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        router[req.method][req.url](req, res);
    })
})

server.listen(3000, () => console.log('listening...'));
