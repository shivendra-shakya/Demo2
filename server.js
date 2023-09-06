var http = require('http')

http.createServer(function(req, res ){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write('Server is working on 8080 port')
    res.end()
}).listen(8080)


// res.writeHead(200, {'content- type : text/html '})
// for sending response type and 200 is ok status


const server2 = http.createServer((req, res)=>{
    res.end('<h1> Your  server  is running..... </h1>')

})

server2.listen(8081, '127.0.0.1', ()=>{
    console.log("server is running on 8081 ")
})
// third parameter is callback function and optional here

