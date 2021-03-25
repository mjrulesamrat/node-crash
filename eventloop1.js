const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello world!')
})

server.listen(5000, () => {
    console.log('Server is listening on port: 5000...')
})