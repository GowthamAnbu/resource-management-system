const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let department = new Schema({
    name: { type: String, required: true, unique: true, uppercase: true, trim: true, minlength:3, maxlength:50 },
    technologies: {type: [Schema.Types.ObjectId], ref:'Technology' },/* one to many relationship */
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});
let Department = module.exports  = mongoose.model('Department', department);
