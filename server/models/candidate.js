const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let candidate = new Schema({
    name: { type: String, required: true, lowercase: true, trim: true, minlength:4, maxlength:25 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength:5, maxlength:25 },
    technology: { type: Schema.Types.ObjectId, ref: 'Technology' },/* one to one relationship */
    questions:{ type: [ Schema.Types.ObjectId ], ref: 'Question' },/* many to many relationship */
    updated: { type: Date, default: Date.now },
    active: { type: Boolean } /* to specify the presence or absence and switch it back to false once candidate got selected */
});

let Candidate = mongoose.model('Candidate', candidate);
