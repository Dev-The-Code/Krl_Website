var mongoose = require('mongoose');

var contactCollection = new mongoose.Schema({
    name: { type: String },
    companyEmail: { type: String },
    contactnumber: { type: String },
    projectDescription: { type: String },
});
//categorySchema.plugin(uniqueValidator);
mongoose.model('contactCollection', contactCollection);