/*const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const port = 1000 //

const miniOutlook = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elisha.cummings65@ethereal.email',
        pass: 'UWUp2FAgZ8xCvr7QET'
    },
});

app.listen(port)
app.use( express.static('public') )
app.use( express.urlencoded({ extended : true })) //Convirtiendo el contenido a un objeto */

/* PLANTILLA MODELO PARA "ENDPOINTS" DE EXPRESS()
app.TIPO_HTTP('/peliculas.html', (req, res) => {

}) */
/*
app.post('/enviar', (req, res) => {
    const contacto = req.body

    miniOutlook.sendMail({
        from: contacto.correo, // sender address
        to: "estebanisaiastoloza@gmail.com", // list of receivers
        subject: `Asunto #${contacto.asunto}`, // Subject line
        html: `<blockquote>${contacto.mensaje}</blockquote>`, // html body
    });

    //console.log(contacto)
    res.end('Desde acá vamos a enviar un email de contacto :o')
}) */





const express = require("express")
const nodemailer = require("nodemailer")
const app = express()

const port = 1000   //mas allá del 1000 usualmente están disponibles

const miniOutlook = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elisha.cummings65@ethereal.email',
        pass: 'UWUp2FAgZ8xCvr7QET'
    }
})

app.listen(port)
app.use( express.static('public') )
app.use( express.urlencoded({ extended : true }) )

/*
// Plantilla modelo para "endpoints" de express() //
app.TIPO_HTTP("/RUTA", (req, res) => {
})
*/
app.post("/enviar", (req, res) => {
    const contacto = req.body
    
    miniOutlook.sendMail({
        from : contacto.correo, // sender address
        to : "estebanisaiastoloza@gmail.com", // list of receivers
        subject : `Asunto #${contacto.asunto}`, // Subject line
        html : `<blockquote>${contacto.mensaje}</blockquote>"`, // html body
    })

    res.end('Desde acá vamos a enviar un email de contacto :o')
})