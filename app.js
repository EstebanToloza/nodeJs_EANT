const http = require('http') //se incluyen los módulos para trabajar desde el navegador. El módulo http captura toda petición realizada al servidor desde el puerto configurado
const fs = require('fs')

const port = 1000 //

const server = (req, res) => { //parámetros para configurar el servidor. La función server es la que 

    fs.readFile('front/index.html', (error, content) => {     //
        if(error){
            res.writeHead(404, { "Content-Type" : "text/plain" }) //Se configura la respuesta en caso de error
            res.end(`Malió sal...`)

        } else {
            res.writeHead(200, { "Content-Type" : "text/html" }) //Se configura la respuesta positiva
            res.end(content)
        }
    }) 

    //res.end("I am you Script!")
}

http.createServer( server ).listen(port)