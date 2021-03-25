const http = require('http')
const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World');
    res.end();
})

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname,()=>{
    console.log(`server runnning at ${hostname} : ${port}`)
})
