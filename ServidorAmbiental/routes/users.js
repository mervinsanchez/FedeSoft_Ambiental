var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuario');

router.all((req, res, next) => {
    console.log("Aglo esta pasando");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
router.put((req, res, next) => {
    res.statusCode = 403;
    res.end('el metodo PUT no es soportado en  /estudiantes');
})
router.delete((req, res, next) => {
    res.end('Eliminando todos los estudiantes');
});



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/registro', (req, res, next) => {
    Usuario.create(req.body, (err, usuario) => {
        if (err) { next(err) } else {
            var ok = {
                estado: "ok",
                id: usuario._id
            }
            res.json(ok)
        }
    })
})

module.exports = router;