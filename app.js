const http = require('http')

const port = 1000

const server = (req, res) => {
    res.end("I am you Script!")
}

http.createServer( server ).listen(port)