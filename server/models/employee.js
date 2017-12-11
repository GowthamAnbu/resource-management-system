const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let employee = new Schema({
    _id: Schema.Types.ObjectId,
    employee_id: { type: Schema.Types.ObjectId, ref:'Employee_details' },/* one to one relationship */
    userName: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength:4, maxlength:25 },
    password: { type: String, required: true, unique: true, trim: true, minlength: 8 },
    department: { type: Schema.Types.ObjectId, ref: 'Department' },/* one to one relationship */
    designation: { type: Schema.Types.ObjectId, ref:'Designation' },/* one to one relationship */
    technologies: { type: [Schema.Types.ObjectId], ref:'Technology' },/* one to many relationship */
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

let Employee = mongoose.model('Employee', employee);
