var mongoose = require('mongoose');
var Esquema = mongoose.Schema;
var loc = new Esquema({
    longitud: {
        type: Number,
    }, latitud: Number
});
var esquemaPuntoReciclaje = new Esquema({
    nombrePunto: {
        type: String,
        required: true
    },
    coordenadas: {
        type: loc,
        unique: true
    },
    tipoReciclaje: String
});

module.exports = mongoose.model('PuntoReciclaje', esquemaPuntoReciclaje);