var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var esquemaPuntoReciclaje = new Esquema({
    nombrePunto:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('PuntoReciclaje',esquemaPuntoReciclaje);