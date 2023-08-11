var express = require('express');
var router = express.Router();
const userController = require('../controllers/contact-controller');
var sessionUtils = require('../utils/session-checker.util');
const contactController = require('../controllers/contact-controller');

// Registra un contacto de confianza asociado a un usuario
router.post('/register', sessionUtils.validateSession, (req, res , next)=>{

  contactController.create(req.body).then((resp) => {
    res.json({
      data: {
        message: 'Contact successfully registered'
      }
    })
  }).catch((error) => {
    res.statusCode = 500;
    res.json({
      error: {
        code: 500,
        message: "Failed to insert record to database: " + error.original.code
      }
    });
  });

});

module.exports = router;
