const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let question_category = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength:2, maxlength:25 },
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }  
});

let Question_category = mongoose.model('Question_category', question_category);
