import React from 'react';
import { Box, Button, TextField, Typography, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginBottom: theme.spacing(2),
  },
  inputField: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
  },
  addButton: {
    marginRight: theme.spacing(2),
  },
}));

const EducationForm = ({ education, handleChange, handleAdd,handleCheckboxChange }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Education Details
      </Typography>
      {education.map((edu, index) => (
        <Grid container spacing={isSmallScreen ? 2 : 4} key={index} className={classes.formContainer}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="Institution Name"
              name="institutionName"
              value={edu.institutionName}
              onChange={(e) => handleChange(e, index, 'education')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="From Year"
              name="fromYear"
              value={edu.fromYear}
              onChange={(e) => handleChange(e, index, 'education')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="To Year"
              name="toYear"
              value={edu.toYear}
              onChange={(e) => handleChange(e, index, 'education')}
              disabled={edu.currentlyPursuing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="Grade"
              name="grade"
              value={edu.grade}
              onChange={(e) => handleChange(e, index, 'education')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={edu.currentlyPursuing}
                  onChange={(e) => handleChange(index, e)}
                   name="currentlyPursuing"
                color="primary"
                />
              }
              label="Currently Pursuing"
            />
          </Grid>
        </Grid>
      ))}
      <Box className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          className={classes.addButton}
          onClick={() => handleAdd('education')}
        >
          Add Education
        </Button>
        {/* <Button
          variant="contained"
          color="default"
          onClick={handleSkip}
        >
          Skip
        </Button> */}
      </Box>
    </Box>
  );
};

export default EducationForm;
