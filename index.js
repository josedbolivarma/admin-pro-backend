require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Midlewares //
// Cors
app.use( cors() );

// Base de datos
dbConnection();

// Rutas
app.get( '/', ( res, req ) => {
    res.status( 200 ).json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT );
});