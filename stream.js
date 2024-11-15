const http = require('http')

// creating a using row node.js server 


const server = http.createServer((req,res)=>{
    console.log(server);
    res.end('Hello form Bangladesh')
})

server.listen(5000,()=>{
    console.log('Server is running is 5000');
})