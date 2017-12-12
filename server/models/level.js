const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let level = new Schema({
    name: { type: String, required: true, unique: true, uppercase: true, trim: true, minlength:2, maxlength:25 },
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

let Level = module.exports = mongoose.model('Level', level);
