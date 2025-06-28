const mongoose = require('mongoose');



//Define a simple Schema and Model
const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  {type: String, required: true },
  email: { type: String, required: true, unique: true},
  age: { type: Number, required: true },
});

module.exports = mongoose.model('Student', studentSchema)
  