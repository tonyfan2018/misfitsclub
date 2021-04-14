const mongoose = require('mongoose');
 
const articleSchema = new mongoose.Schema({
   title:{ type:String, required: true},
   article:{ type:String, required: true},
   authorname:{ type: String, required: true},
   articleImage:{type: String, required: true},
   postDate:{ type: Date, default: Date.now},
});
 

 
module.exports = new mongoose.model('articles', articleSchema);