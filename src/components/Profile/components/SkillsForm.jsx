import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
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

const SkillsForm = ({ skills, handleChange, handleAdd }) => {
  const classes = useStyles();

  // Ensure skills is always an array
  const skillsArray = Array.isArray(skills) ? skills : [skills];

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Skills
      </Typography>
      {skillsArray.map((skill, index) => (
        <Box key={index} className={classes.formContainer}>
          <TextField
            fullWidth
            variant="outlined"
            label={`Skill ${index + 1}`}
            value={skill}
            onChange={(e) => handleChange(e, index, 'skills')}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={() => handleAdd('skills')}
      >
        Add Skill
      </Button>
    </Box>
  );
};

export default SkillsForm;
