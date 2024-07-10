import React from 'react';
import { Box, Button, Typography, Grid, TextField,Checkbox,FormControlLabel } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
}));

const ExperienceForm = ({ experience, handleChange, handleAdd }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Experience Details
      </Typography>
      {experience.map((exp, index) => (
        <Grid container spacing={2} key={index} className={classes.formContainer}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Company Name"
              name="companyName"
              value={exp.companyName}
              onChange={(e) => handleChange(e, index, 'experience')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Role"
              name="role"
              value={exp.role}
              onChange={(e) => handleChange(e, index, 'experience')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="From Year"
              name="fromYear"
              value={exp.fromYear}
              onChange={(e) => handleChange(e, index, 'experience')}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="To Year"
              name="toYear"
              value={exp.toYear}
              onChange={(e) => handleChange(e, index, 'experience')}
              disabled={exp.currentlyPursuing}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={exp.currentlyPursuing}
                  onChange={(e) => handleChange(index,e,'experience')}
                   name="currentlyPursuing"
                color="primary"
                />
              }
              label="Currently Pursuing"
            />
          </Grid>
        </Grid>
      ))}
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={() => handleAdd('experience')}
      >
        Add Experience
      </Button>
    </Box>
  );
};

export default ExperienceForm;
