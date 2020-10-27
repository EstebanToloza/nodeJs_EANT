const express = require('express')
const app = express()

const port = 1000 //

app.listen(port)
app.use( express.static('public') )

/* PLANTILLA MODELO PARA "ENDPOINTS" DE EXPRESS()
app.TIPO_HTTP('/peliculas.html', (req, res) => {

}) */

app.get('/contacto', (req, res) => {
    res.end('Desde acá vamos a contactarnos...')
})

app.post('/enviar', (req, res) => {
    res.end('Desde acá salee...')
})