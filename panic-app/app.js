// Importación de modulos
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var sessions = require('express-session');
const mySQLStore = require('express-mysql-session')(sessions);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const gconfigController = require('./controllers/globalconfig-controller');

// Establece las variables de entorno de .env si el entorno no es productivo
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = require('./config/config.json')[process.env.NODE_ENV];

// Se agregan los middleware a utilizar
var app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// // Obtener las configuraciones globales desde la base de datos
// var sessionMaxAge;

// gconfigController.getConfig().then((res) => {
//   console.log("Global config retrieved from DB:\n", JSON.stringify(res, null, 2));
//   var tmpSessionAge = res.find(res => res.parameter === 'SESSION_MAX_AGE');
//   if(tmpSessionAge) sessionMaxAge = parseInt(tmpSessionAge.value);
// }).catch((error) => {
//   console.error('Unable to retrieve configuration from database: ', error);
// });

const sessionMaxAge = 1000 * 60 * 60 * 12; //12 hours - MOVER A CONFIGURACIÓN BD
const sessionStore = new mySQLStore(config);

app.use(sessions({
  secret: process.env.SESSION_SECRET,
  saveUninitialized:false,
  resave: false,
  cookie: { maxAge: sessionMaxAge },
  store: sessionStore
}));

sessionStore.onReady().then(() => {
	// MySQL session store ready for use.
	console.log('MySQLStore ready');
}).catch(error => {
	// Something went wrong.
	console.error(error);
});


app.use('/', indexRouter);
app.use('/user', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
  // res.render('error');
});

module.exports = app;
