const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let employee_details = new Schema({
    firstName: { type: String, required: true, lowercase: true, trim: true, minlength:3, maxlength:25 },
    lastName: { type: String, required: true, lowercase: true, trim: true, minlength:3, maxlength:25 },
    dob: { type: Date, required:true },
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

let Employee_detail = module.exports  = mongoose.model('Employee_detail', employee_details);
