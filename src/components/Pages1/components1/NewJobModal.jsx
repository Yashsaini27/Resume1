import React,{useState} from "react";
import Box from "@mui/material/Box"
import { Dialog,DialogTitle, FilledInput, Grid,MenuItem,Select } from "@mui/material";
import { Button, DialogActions, DialogContent, IconButton, Typography,makeStyles } from "@material-ui/core";
import {Close as CloseIcon} from "@mui/icons-material"
import axios from 'axios';


const useStyles=makeStyles((Theme)=>({
    skillChip:{
        margin:Theme.spacing(0.5),
        padding:Theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        fontWeight:600,
        border:`1px solid ${Theme.palette.secondary.main}`,
        color:Theme.palette.secondary.main,
        cursor:'pointer',

        '&:hover':{
            backgroundColor: Theme.palette.secondary.main,
            color:"#fff",
        },
    }
}));
const initState={
    title: "",
    type: "Full Time",
    companyName: "",
    companyUrl: "",
    location: "Remote",
    jobLink: "",
    description: "",
    skills: []

}
export default (props)=>{

    const [jobDetails, setJobDetails] = useState(initState);

      const handleChange = (e) => {
        setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
      };

      const addRemoveSkill = (skill) => {
        jobDetails.skills.includes(skill)
          ? setJobDetails({ ...jobDetails, skills: jobDetails.skills.filter(s => s !== skill) })
          : setJobDetails({ ...jobDetails, skills: jobDetails.skills.concat(skill) });
      };

const handleSubmit=async()=>{
    try {
        await axios.post('http://localhost:8080/api/job', jobDetails);
        closeModal();
      } catch (error) {
        console.error("There was an error posting the job!", error);
      }
    };
    
    const closeModal =()=>{
        setJobDetails(initState);
        props.closeModal();
    };


    const classes=useStyles();
    const skills=[
        "JavaScript",
        "React",
        "Node",
        "Java",
        "My-SQL",
        "MongoDB",
    ];

    return(
        <Dialog open={props.newJobModal} fullWidth>
               
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
            Post Job
        <IconButton onClick={closeModal}>
           <CloseIcon/>
            </IconButton> 
            </Box>
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FilledInput placeholder="JobTitle  *" name="title" value={jobDetails.title} onChange={handleChange} disableUnderline fullWidth/>

                </Grid>
                <Grid item xs={6}>
                <Select disableUnderline variant="filled" name="type" value={jobDetails.type} onChange={handleChange}  fullWidth>
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Contract ">Contract</MenuItem>
            </Select>

           

                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder="Company Name  *" name="companyName" value={jobDetails.companyName} onChange={handleChange}  disableUnderline fullWidth/>

                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder="Company URL  *" name="companyUrl" value={jobDetails.companyUrl} onChange={handleChange}  disableUnderline fullWidth/>

                </Grid>

                <Grid item xs={6}>
                <Select disableUnderline variant="filled" name="location" value={jobDetails.location} onChange={handleChange} fullWidth>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
               
            </Select>
            
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder="Job Link  *" name="jobLink" value={jobDetails.jobLink} onChange={handleChange}  disableUnderline fullWidth/>

                </Grid>

                <Grid item xs={12}>
                    <FilledInput placeholder="Job Description  *" name="description" value={jobDetails.description} onChange={handleChange} disableUnderline fullWidth multiline rows={4}/>

                </Grid>

            </Grid>
            <Box mt={2}>
                 <Typography>Skills</Typography>
                 <Box display="flex">
                    {skills.map((skill)=>(<Box className={classes.skillChip} key={skill} onClick={()=>addRemoveSkill(skill)} style={{
                        backgroundColor:jobDetails.skills.includes(skill)? "#4D64E4" :"",
                        color : jobDetails.skills.includes(skill) ? "#fff" : "",
                    }} >{skill}</Box>))}
                 </Box>
            </Box>
        </DialogContent>
        <DialogActions>
            <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="caption">*Required fields</Typography>
                <Button onClick={handleSubmit} variant="contained" disableElevation color="primary">Post a Job</Button>
            </Box>
        </DialogActions>
        </Dialog>
    )
}