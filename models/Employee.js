var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    name: String,
    gender: String,
    email: String,
    phone: String,
    dateOfBirth: { type: Date, default: Date.now },
    department: String
  });

  module.exports = mongoose.model('Employee', EmployeeSchema);