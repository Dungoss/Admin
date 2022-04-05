const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const passport = require('./models/passport');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const chartsRouter = require('./routes/charts');
const elementsRouter = require('./routes/elements');
const loginRouter = require('./routes/login');
const panelsRouter = require('./routes/panels');
const widgetsRouter = require('./routes/widgets');
const authenticationRouter = require('./routes/authentication');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.authenticate('session'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/charts', chartsRouter);
app.use('/elements', elementsRouter);
app.use('/login', loginRouter);
app.use('/panels', panelsRouter);
app.use('/widgets', widgetsRouter);
app.use('/', authenticationRouter);
app.use('/', authenticationRouter);

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
  res.render('error');
});

module.exports = app;
