const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let level = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true, lowercase: true, trim: true, minlength:2, maxlength:25 },
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }  
});

let Level = mongoose.model('Level', level);
