const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let question_category = new Schema({
    name: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength:2, maxlength:25 },
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

let Question_category = module.exports  = mongoose.model('Question_category', question_category);
