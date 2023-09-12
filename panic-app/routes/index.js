var express = require('express');
var sessionUtils = require('../utils/session-checker.util');
var router = express.Router();

// router.use(sessionUtils.validateSession);

// Servicio random de pruebas BORRAR
router.get('/', sessionUtils.validateSession, function(req, res, next) {

  res.json({
    data: {
      message: 'Hola mundo'
    }
  });
});

module.exports = router;
