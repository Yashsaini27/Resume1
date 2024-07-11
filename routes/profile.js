const router = require('express').Router();
let Profile = require('../models/profile');

// Get all profiles
router.route('/').get((req, res) => {
  Profile.find()
    .then((profiles) => res.json(profiles))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new profile
router.route('/add').post((req, res) => {
  const newProfile = new Profile(req.body);

  newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get a profile by ID
router.route('/:id').get((req, res) => {
  Profile.findById(req.params.id)
    .then((profile) => res.json(profile))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete a profile by ID
router.route('/:id').delete((req, res) => {
  Profile.findByIdAndDelete(req.params.id)
    .then(() => res.json('Profile deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update a profile by ID
router.route('/update/:id').post((req, res) => {
  Profile.findById(req.params.id)
    .then((profile) => {
      profile.firstName = req.body.firstName;
      profile.lastName = req.body.lastName;
      profile.education = req.body.education;
      profile.experience = req.body.experience;
      profile.projects = req.body.projects;
      profile.skills = req.body.skills;
      profile.certifications = req.body.certifications;
      profile.additionalAchievements = req.body.additionalAchievements;

      profile.save()
        .then(() => res.json('Profile updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
