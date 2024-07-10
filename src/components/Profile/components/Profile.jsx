import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Container, Box} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import ProgressBar from './ProgressBar';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import ProjectsForm from './ProjectsForm';
import SkillsForm from './SkillsForm';
import CertificationsForm from './CertificationsForm';
import AchievementsForm from './AchievementsForm';
import Header from '../../Header';
import axios from 'axios';
//import Footer from '../../Footer';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(0),
    width: '10vw', // Adjust width as needed
  },
  button: {
    minWidth: '110px', // Adjust width as needed
  },
}));

const Profile = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    education: [{ id: 0, institutionName: '', fromYear: '', toYear: '', grade: '', currentlyPursuing: false }],
    experience: [{ id: 0, companyName: '', role: '', fromYear: '', toYear: '', currentlyPursuing: false }],
    projects: [{ id: 0, name: '', description: '', usedTechnology: '' }],
    skills: [],
    certifications: [{ id: 0, certificationName: '', fromMonthYear: '' }],
    additionalAchievements: [],
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    // Fetch profile data from backend (example for fetching a profile by ID)
    axios.get('http://localhost:8080/api/profile')
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the profile data!", error);
      });
  }, []);

  const handleChange = (e, index, section) => {
      if (!e || !e.target) {
    console.error('Event or event target is undefined');
    return;
  }
    const { name, value, checked } = e.target;
    setFormData(prevFormData => {
      const updatedSection = [...prevFormData[section]];
      if (name === 'currentlyPursuing') {
        updatedSection[index][name] = checked;
      } else {
        updatedSection[index][name] = value;
      }
      return {
        ...prevFormData,
        [section]: updatedSection,
      };
    });
  };

  const handleAdd = (section) => {
    const newItem = section === 'skills' || section === 'additionalAchievements' || section === 'education' || section === 'experience'
      ? ''
      : { id: formData[section].length, ...formData[section][0] };
    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: [...prevFormData[section], newItem],
    }));
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Profile Form
        </Typography>
        <ProgressBar activeStep={step - 1} />
        {step === 1 && <EducationForm education={formData.education} handleChange={handleChange} handleAdd={handleAdd} />}
        {step === 2 && <ExperienceForm experience={formData.experience} handleChange={handleChange} handleAdd={handleAdd} />}
        {step === 3 && <ProjectsForm projects={formData.projects} handleChange={handleChange} handleAdd={handleAdd} />}
        {step === 4 && <SkillsForm skills={formData.skills} handleChange={handleChange} handleAdd={handleAdd} />}
        {step === 5 && <CertificationsForm certifications={formData.certifications} handleChange={handleChange} handleAdd={handleAdd} />}
        {step === 6 && <AchievementsForm additionalAchievements={formData.additionalAchievements} handleChange={handleChange} handleAdd={handleAdd} />}
        
        <Grid container justifyContent="center" className={classes.buttonContainer}>
          {step > 1 && (
            <Box className={classes.buttonWrapper}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
            </Box>
          )}
          {step < 7 && (
            <Button 
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              Next
            </Button>
          )}
        
        </Grid>
       
      </Container>
   
      
    </>
  );
};

export default Profile;
