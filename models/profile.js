const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  education: [
    {
      institutionName: String,
      fromYear: String,
      toYear: String,
      grade: String,
    },
  ],
  experience: [
    {
      companyName: String,
      role: String,
      fromYear: String,
      toYear: String,
      currentlyPursuing: Boolean,
    },
  ],
  projects: [
    {
      name: String,
      description: String,
      usedTechnology: String,
    },
  ],
  skills: [String],
  certifications: [
    {
      certificationName: String,
      fromMonthYear: String,
    },
  ],
  additionalAchievements: [String],
});

const Profile = mongoose.model('Profile', ProfileSchema);


module.exports = Profile;
