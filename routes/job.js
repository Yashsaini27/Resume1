// routes/jobs.js
const express = require('express');
const router = express.Router();
const Job = require('../models/job');

// POST /api/job - Create a new job
router.post('/', async (req, res) => {
  try {
    // Validate job data here if necessary
    const { title, type, companyName, companyUrl, location, jobLink, description, skills } = req.body;

    // Create the job
    const job = await new Job({
      title,
      type,
      companyName,
      companyUrl,
      location,
      jobLink,
      description,
      skills,
    }).save();

    res.status(201).send({ message: 'Job posted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// GET /api/jobs - Fetch all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedOn: -1 }); // Retrieve all jobs sorted by postedOn desc
    res.json(jobs); // Respond with the jobs in JSON format
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
