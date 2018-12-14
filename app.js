var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');

const fs = require('fs');
//var event = require('./src/app/model/eventmodelforapp.js')

var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}
mongoose.connect("mongodb+srv://newuser:newuser@c0-gnjbv.gcp.mongodb.net/test?retryWrites=true");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function(){
    console.log("Connection is open....");
});


//
let data = fs.readFileSync('leisure_prog.json');
let edata = JSON.parse(data);
console.log(edata);


/**/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/pj')));
app.use('/', express.static(path.join(__dirname, 'dist/pj')));
app.use('/api', apiRouter);

var Schema = mongodb.mongoose.Schema;
var evt = new Schema({
    "PGM_CODE": {
      "type": "string",
      "description": "Programme Number"
    },
    "CLASS_CODE": {
      "type": "string",
      "description": "Class Code"
    },
    "TC_PGM_NAME": {
      "type": "string",
      "description": "Activity Name (Chi)"
    },
    "EN_PGM_NAME": {
      "type": "string",
      "description": "Activity Name (Eng)"
    },
    "TC_ACT_TYPE_NAME": {
      "type": "string",
      "description": "Activity Type (Chi)"
    },
    "EN_ACT_TYPE_NAME": {
      "type": "string",
      "description": "Activity Type (Eng)"
    },
    "TC_DISTRICT": {
      "type": "string",
      "description": "Organized District (Chi)"
    },
    "EN_DISTRICT": {
      "type": "string",
      "description": "Organized District (Eng)"
    },
    "PGM_START_DATE": {
      "type": "string",
      "description": "Programme Start Date"
    },
    "PGM_END_DATE": {
      "type": "string",
      "description": "Programme End Date"
    },
    "TC_DAY": {
      "type": "string",
      "description": "Day of Week (Chi)"
    },
    "EN_DAY": {
      "type": "string",
      "description": "Day of Week (Eng)"
    },
    "PGM_START_TIME": {
      "type": "string",
      "description": "Programme Start Time"
    },
    "PGM_END_TIME": {
      "type": "string",
      "description": "Programme End Time"
    },
    "TC_VENUE": {
      "type": "string",
      "description": "Venue (Chi)"
    },
    "EN_VENUE": {
      "type": "string",
      "description": "Venue (Eng)"
    },
    "MIS_TARGET_GRP_CODE": {
      "type": "string",
      "description": "Target Type Code. 'OLDER PERSONS 3': Elderly; 'DISABILITIES_all': All programmes for Persons with Disabilities; 'DISABILITIES 2': Visually Impaired Persons; 'DISABILITIES 4': Hearing Impaired Persons; 'DISABILITIES 6': Intellectual disabled persons; 'DISABILITIES 9': Autism Persons; 'DISABILITIES 3': Chronically Ill Persons; 'DISABILITIES 7': Physical Disabled Persons; 'DISABILITIES 5': Ex-mentally Ill Persons; 'DISABILITIES 11': All kinds of Disabilities"
    },
    "MIN_AGE": {
      "type": "string",
      "description": "Limit on Age (Minimum)"
    },
    "MAX_AGE": {
      "type": "string",
      "description": "Limit on Age (Maximum)"
    },
    "FEE": {
      "type": "string",
      "description": "Fee"
    },
    "QUOTA": {
      "type": "string",
      "description": "Quota"
    },
    "PLACES_LEFT": {
      "type": "string",
      "description": "Places Left"
    },
    "ENROL_METHOD": {
      "type": "string",
      "description": "Enrolment Method. 'E': Internet (first come first served); 'B': Ballot; 'S': First-come-first-served (For programmes organised for people with disabilities, enrolment can only be made at district offices); 'M': Organizing District Office/Designated Venues (First come first served) 'W': Walk-in"
    },
    "ENROL_START_DATE": {
      "type": "string",
      "description": "Enrolment Start Date"
    },
    "ENROL_END_DATE": {
      "type": "string",
      "description": "Enrolment End Date"
    },
    "BALLOT_DATE": {
      "type": "string",
      "description": "Date of Enrolment (Balloting)"
    },
    "OPEN_ENROL_START_DATE": {
      "type": "string",
      "description": "Open Enrolment Start Date"
    },
    "OPEN_ENROL_END_DATE": {
      "type": "string",
      "description": "Open Enrolment End Date"
    },
    "TC_NOTES_1": {
      "type": "string",
      "description": "Point to Note (Chi) (Line 1)"
    },
    "TC_NOTES_2": {
      "type": "string",
      "description": "Point to Note (Chi) (Line 2)"
    },
    "EN_NOTES_1": {
      "type": "string",
      "description": "Point to Note (Eng) (Line 1)"
    },
    "EN_NOTES_2": {
      "type": "string",
      "description": "Point to Note (Eng) (Line 2)"
    },
    "TC_URL": {
      "type": "string",
      "description": "Link to details (TC)"
    },
    "SC_URL": {
      "type": "string",
      "description": "Link to details (SC)"
    },
    "EN_URL": {
      "type": "string",
      "description": "Link to details (EN)"
    }
  });
var Event = mongodb.mongoose.model('Event',evt);

for( var i = 0; i < data.length; i++ ) {
  new Event( data[i] ).save();
}


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
