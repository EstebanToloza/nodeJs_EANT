const express = require('express')
const app = express()

const port = 1000 //



app.listen(port)

/* PLANTILLA MODELO PARA "ENDPOINTS" DE EXPRESS()
app.TIPO_HTTP('/peliculas.html', (req, res) => {

}) */

app.get('/contacto', (req, res) => {
    res.end('Desde acá vamos a contactarnos...')
})