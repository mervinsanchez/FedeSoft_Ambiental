var express = require('express');
var router = express.Router();
var passport = require('passport');
var authenticate = require('../authenticate');
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
router.post('/signup', (req, res, next) => {
    Usuario.register(new Usuario({
        username: req.body.username,
        password: req.body.password,
        nombre: req.body.nombre,
        primerapellido: req.body.primerapellido,
        segundoapellido: req.body.segundoapellido,
        //correo: req.body.correo,
        telcontacto: req.body.telcontacto
    }), 
      req.body.password, (err, Usuario) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      }
    });
  });
  
  router.post('/login', passport.authenticate('local'), (req, res,err) => {
      console.log("entro");
      
      if(err){
          console.log(err);
      }
      var token = authenticate.getToken({_id:req.user._id});
      console.log(req.user);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true,token:token, status: 'You are successfully logged in!'});
  });
  
module.exports = router;