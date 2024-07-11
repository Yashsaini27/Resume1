// routes/jobs.js
const express = require('express');
const multer = require('multer');
const Job = require('../models/job');
const Application = require('../models/application');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/:id/apply', upload.single('resume'), async (req, res) => {
    try {
        const { id } = req.params;
        const { email, name, mobile } = req.body;
        const resume = req.file.path;

        const application = new Application({
            jobId: id,
            email,
            name,
            mobile,
            resume
        });

        await application.save();
        res.status(201).send({ message: 'Application submitted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
