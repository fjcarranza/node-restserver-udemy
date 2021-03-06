require('./config/config')
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

// configuracion global de rutas es el archivo index donde estan las rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, (err, res) => {
        if (err) throw err;
        console.log("Base de Datos online");
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando Puerto: ", process.env.PORT);
});