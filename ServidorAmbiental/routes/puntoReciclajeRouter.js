const express = require('express');
const bodyParser = require('body-parser');
var authenticate = require('../authenticate');
const puntoReciclajeRouter = express.Router();

puntoReciclajeRouter.use(bodyParser.json());

puntoReciclajeRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(authenticate.verifyUser,(req,res,next) => {
    res.end('Este metodo retornara los puntos de recoleccion en la ciudad');
})
.post((req, res, next) => {
    res.end('Se agrega el punto de recolección: ' + req.body.puntoRecName + ' en la direccion: ' + req.body.puntoRecAddress);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('el metodo PUT no es soportado en  /puntosRecoleccion');
})
.delete((req, res, next) => {
    res.end('Se han eliminado todos los puntos de la ciudad');
});

puntoReciclajeRouter.route('/:puntoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Punto de recolección: '+req.params.puntoRecId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('la operacion POST no es soportada en  /puntosRecoleccion/'+ req.params.puntoRecId);
})
.put((req, res, next) => {
    res.write('Actualizando datos del  estudiante: ' + req.params.puntoRecId + '\n');
  res.end('Se actualizara al estudiante: ' + req.body.puntoRecName + 
        ' con direccion: ' + req.body.puntoRecAddress);
})
.delete((req, res, next) => {
    res.end('Eliminando al estudiante: ' + req.params.puntoRecId);
});

module.exports = puntoReciclajeRouter;