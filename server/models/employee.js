const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let employee = new Schema({
    employee_details: { type: Schema.Types.ObjectId, ref:'Employee_details' },/* one to one relationship */
    department: { type: Schema.Types.ObjectId, ref: 'Department' },/* one to one relationship */
    designation: { type: Schema.Types.ObjectId, ref:'Designation' },/* one to one relationship */
    technologies: { type: [Schema.Types.ObjectId], ref:'Technology' },/* one to many relationship */
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

let Employee = module.exports  = mongoose.model('Employee', employee);
