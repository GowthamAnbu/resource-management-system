const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let department = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength:5, maxlength:25 },
    technologies: {type: [Schema.Types.ObjectId], ref:'Technology' },/* one to many relationship */
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});
let Department = mongoose.model('Department', department);
