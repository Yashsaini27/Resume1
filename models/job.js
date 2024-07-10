// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  companyName: { type: String, required: true },
  companyUrl: { type: String, required: true },
  location: { type: String, required: true },
  jobLink: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: [String], required: true },
  postedOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);
