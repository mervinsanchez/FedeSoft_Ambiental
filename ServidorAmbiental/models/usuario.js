var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var validateTel = function(telefono) {
    var re = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    return re.test(telefono)
};

var UsuarioEsquema = new Esquema({
    username: {
        type: String,
        lowercase: true,
        maxlength: 20,
        trim: true,
        // required = true,
    },
    password: {
        type: String,
        // required = 'La contraseña es necesaria',
    },
    primernombre: String,
    segundonombre: String,
    primerapellido: {
        type: String,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: true,
    },
    segundoapellido: {
        type: String,
        maxlength: 50,
        trim: true,
        lowercase: true,
    },
    correo: {
        type: String,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: true,
        // required: 'La dirección de Correo es necesaria',
        validate: [validateEmail, 'Por favor complete con una dirección de correo válida'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor complete con una dirección de correo válida']
    },
    telcontacto: {
        type: String,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validateTel, 'Por favor complete con un Nùmero de Telèfono vàlido'],
        match: [/^[2-9]\d{2}[2-9]\d{2}\d{4}$/, 'Por favor complete con un Nùmero de Telèfono vàlido']
    }


});

module.exports = mongoose.model('Usuario', UsuarioEsquema);