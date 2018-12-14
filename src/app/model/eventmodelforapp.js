var mongodb = require('../app.js');
var Schema = mongodb.mongoose.Schema;
var evt = new Schema({
  name:String,
  code:String,
  date:{type:Date},
  type:String,
  venue:String});
var Event = mongodb.mongoose.model('Event',evt);
var EvtDAO = function(){};
module.exports = new EvtDAO();
