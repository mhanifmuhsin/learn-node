const http = require('http');
const hello = require('./helloWorld');
const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(hello.hello());
    res.end();
})

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname,()=>{
    console.log(`server runnning at ${hostname} : ${port}`)
})
