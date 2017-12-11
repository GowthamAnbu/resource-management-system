const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let employee_details = new Schema({
    firstName: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength:4, maxlength:25 },
    lastName: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength:4, maxlength:25 },
    dob: { type: Date, required:true },
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

let Employee_details = mongoose.model('Employee_details', employee_details);