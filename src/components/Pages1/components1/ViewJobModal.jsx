import React, { useState } from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import { Box, Dialog, DialogContent, IconButton, FilledInput, Grid, Typography } from "@material-ui/core";
import { DialogActions, DialogTitle, Button } from "@mui/material";
import axios from 'axios';

export default (props) => {
    const [applicantDetails, setApplicantDetails] = useState({
        email: "",
        name: "",
        mobile: "",
        resume: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume") {
            setApplicantDetails({ ...applicantDetails, resume: files[0] });
        } else {
            setApplicantDetails({ ...applicantDetails, [name]: value });
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("email", applicantDetails.email);
        formData.append("name", applicantDetails.name);
        formData.append("mobile", applicantDetails.mobile);
        formData.append("resume", applicantDetails.resume);

        try {
            await axios.post(`http://localhost:8080/api/jobs/${props.job._id}/apply`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
        } catch (error) {
            console.error("There was an error applying for the job!", error);
        }
        props.closeModal();
    };

    return (
        <Dialog open={!!Object.keys(props.job).length} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Apply for Job
                    <IconButton onClick={props.closeModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FilledInput
                            placeholder="Email *"
                            name="email"
                            value={applicantDetails.email}
                            onChange={handleChange}
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput
                            placeholder="Name *"
                            name="name"
                            value={applicantDetails.name}
                            onChange={handleChange}
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput
                            placeholder="Mobile *"
                            name="mobile"
                            value={applicantDetails.mobile}
                            onChange={handleChange}
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            style={{ display: 'none' }}
                            id="resume-upload"
                            type="file"
                            name="resume"
                            onChange={handleChange}
                        />
                        <label htmlFor="resume-upload">
                            <Button variant="contained" color="primary" component="span">
                                Upload Resume
                            </Button>
                        </label>
                        {applicantDetails.resume && (
                            <Typography variant="body2" style={{ marginTop: '10px' }}>
                                {applicantDetails.resume.name}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};
