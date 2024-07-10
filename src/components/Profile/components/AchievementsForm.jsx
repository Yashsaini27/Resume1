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
  inputField: {
    marginBottom: theme.spacing(2), // Adjust margin bottom for each input field
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
}));

const AchievementsForm = ({ additionalAchievements, handleChange, handleAdd }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Additional Achievements
      </Typography>
      {additionalAchievements.map((achievement, index) => (
        <Box key={index} className={classes.formContainer}>
          <TextField
            fullWidth
            variant="outlined"
            label="Achievement"
            value={achievement}
            onChange={(e) => handleChange(e, index, 'additionalAchievements')}
            className={classes.inputField}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={() => handleAdd('additionalAchievements')}
      >
        Add Achievement
      </Button>
    </Box>
  );
};

export default AchievementsForm;
