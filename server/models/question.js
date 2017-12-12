const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let question = new Schema({
    name: { type: String, required: true, lowercase: true },
    categories: { type: [Schema.Types.ObjectId], ref: 'Question_category' },/* one to many relationship */
    technologies:{ type: [Schema.Types.ObjectId], ref: 'Technology' },/* many to many relationship */
    default_answer:{ type: {trueOrFalse: Boolean, options: []} },/* default answer for the particular question */
    createdBy: { type: Schema.Types.ObjectId, ref: 'Employee' },/* one to one realtionship */
    answeredBy:{ type: [Schema.Types.ObjectId], ref: 'Candidate' },/* many to many relatioship */
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

let Question = module.exports  = mongoose.model('Question', question);
