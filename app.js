const http = require('http')
const fs = require('fs')

const port = 1000

const server = (req, res) => {

    fs.readFile('front/index.html', (error, content) => {     //
        if(error){
            res.writeHead(404, { "Content-Type" : "text/plain" })
            res.end(`Malió sal...`)

        } else {
            res.writeHead(404, { "Content-Type" : "text/html" })
            res.end(content)
        }
    }) 

    //res.end("I am you Script!")
}

http.createServer( server ).listen(port)