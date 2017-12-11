const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let designation = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength:5, maxlength:25 },
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

let Designation = mongoose.model('Designation', designation);