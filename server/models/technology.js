const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let technology = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true, unique: true, lowercase: true, trim: true, minlength:2, maxlength:25 },
    updated: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
    questions: { type: [Schema.Types.ObjectId], ref:'Question' },/* many to many relationship */
});

let Technology = mongoose.model('Technology', technology);
