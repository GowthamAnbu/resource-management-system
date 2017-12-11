const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let candidate_progress = new Schema({
    _id: Schema.Types.ObjectId,
    candidate: { type: Schema.Types.ObjectId, ref: 'Candidate' },/* one to one relationship */
    handledBy: { type: Schema.Types.ObjectId, ref: 'Employee' },/* one to one relationship */
    level: { type: Schema.Types.ObjectId, ref: 'Level' },/* one to one relationship */
    result: { type: Boolean }
});

let Candidate_progress = mongoose.model('Candidate_progress', candidate_progress);