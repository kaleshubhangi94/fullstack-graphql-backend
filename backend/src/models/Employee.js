const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true },
  subjects: [{ type: String }],
  attendance: { type: Number },
  role: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true } 
});

module.exports = mongoose.model('Employee', EmployeeSchema);
