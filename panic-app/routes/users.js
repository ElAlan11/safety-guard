var express = require('express');
var router = express.Router();
const userController = require('../controllers/user-controller');

/**
 * Servicio para iniciar sesión en la aplicación 
 * @param {String} req.email Correo electrónico del usuario
 * @param {String} req.password Contraseña del usuario encriptada
 * @returns {any} Devuelve una cookie con el perfil y usuario logeado
 */
router.post('/login', async (req, res , next)=>{
  
  var user = await userController.getUserByEmail(req.body.email);

  if(user.length > 0){
    // Usuario existe en BDD
    if(user[0].password === req.body.password){
      var session = req.session;
      session.user = user[0].email;
      session.userId = user[0].id;

      res.json({data: {
        message: 'Login successful', 
        expiresAt: session.cookie.expires, 
      }})
      return;
    }
  }
  // No existe el usuario en BDD o la contraseña es incorrecta
  res.statusCode = 401;
  res.json({
    error: {
      code: 401,
      message: 'Invalid username or password',
    }
  });

});

router.post('/register', (req, res , next)=>{

  userController.create(req).then((resp) => {
    res.json({
      data: {
        message: 'User created successfully'
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

/**
 * Destruye la cookie con la sesión del usuario
 * @param {cookie} session Recibe una cookie con la sesión del usuario
 */
router.get('/logout',(req,res) => {
  try {
    req.session.destroy();
    res.json({
      data: {
        message: 'Logout successful'
      }
    })
  } catch (error) {
    res.statusCode = 500;
    res.json({
      error: {
        code: 500,
        message: 'Could not delete session cookie'
      }
    });

  }
});

module.exports = router;
