const mongoose = require('mongoose');
 
const excerciseSchema = new mongoose.Schema({
   excerciseVideo:{type: String, required: true},
   title:{ type:String, required: true},
   introduction:{ type:String, required: true},
   excerciseImage:{type: String, required: true},
   postDate:{ type: Date, default: Date.now},
});
 

 
module.exports = new mongoose.model('excercise', excerciseSchema);