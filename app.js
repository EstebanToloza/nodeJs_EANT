//require('dotenv').config()

const express = require("express")
const nodemailer = require("nodemailer")
const joi = require('joi');
const expressFileUpload = require('express-fileupload')

const app = express()

const port = 3000   //mas allá del 1000 usualmente están disponibles

const miniOutlook = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PUERTO_EMAIL,
    auth: {
        user: process.env.CASILLA_EMAIL,
        pass: process.env.CLAVE_EMAIL
    }
})

const schema = joi.object({
    nombre : joi.string().required,
    email : joi.string().email({ minDomainSegments: 3, tlds: { allow: ['com', 'net', 'tech'] } }).required(),
    asunto : joi.number().integer().required,
    mensaje : joi.string().required,
})

app.listen(port)
app.use( express.static('public') )
app.use( express.json() ) //<-- de application/json a Object
app.use( express.urlencoded({ extended : true }) ) //<--- de "application/x-www-form-urlencoded" a Object
app.use ( expressFileUpload() ) //<-- de "multipart/form-data" a Object

/*
// Plantilla modelo para "endpoints" de express() //
app.TIPO_HTTP("/RUTA", (req, res) => {
})
*/
app.post("/enviar", (req, res) => {
    const contacto = req.body

    console.log(req.files)

    return res.end('Mira la consola')

    const { error, value } = schema.validate({ contacto });

    if( error ){
        console.log(error)

        const msg = {
            error : error.details.map( e => {
                console.log(e.message)
            })
        }
        res.end(error.details[0].message)
    } else{
        miniOutlook.sendMail({
            from : contacto.correo, // sender address
            to : "estebanisaiastoloza@gmail.com", // list of receivers
            replyTo : contacto.correo, 
            subject : `Asunto #${contacto.asunto}`, // Subject line
            html : `<blockquote>${contacto.mensaje}</blockquote>"`, // html body
        })
    
        res.end('Desde acá vamos a enviar un email de contacto :o')
    }
    
})

//TAREA AGREGAR NOMBRE Y APELLIDO Y CASILLA PARA ARCHIVOS
