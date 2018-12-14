var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}
mongoose.connect("mongodb+srv://newuser:newuser@c0-gnjbv.gcp.mongodb.net/test?retryWrites=true");
var db = mongoose.connection;
db.connection.on('connection successful');
}
db.connection.on('DB Error!',(err) => {console.error(err)});
/**/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/pj')));
app.use('/', express.static(path.join(__dirname, 'dist/pj')));
app.use('/api', apiRouter);

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
  res.send(err.status);
});

module.exports = app;
var server = app.listen(3000);
