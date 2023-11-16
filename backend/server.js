const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world');
})

const PORT = 3000;
const IP_ADDRESS = '127.0.0.1';
server.listen(PORT, IP_ADDRESS, () => {
    console.log("hello there");
})