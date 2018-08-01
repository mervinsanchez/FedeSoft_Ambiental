//
/// Ruta cerada para esquema de prueba

const express = require('express');
const bodyParser = require('body-parser');

const estudianteRouter = express.Router();

estudianteRouter.use(bodyParser.json());

estudianteRouter.route('/')
.all((req,res,next) => {
    console.log("Aglo esta pasando");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})