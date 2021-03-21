const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to our about page')
    }
    res.end(`
    <h1>oops!</h1><a href='/'>Go back!</a>
    `)
})

server.listen(5000)