import React from 'react';
import { Box, Button, Typography, Grid, TextField } from '@mui/material';
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

const ProjectsForm = ({ projects, handleChange, handleAdd }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Projects Details
      </Typography>
      {projects.map((project, index) => (
        <Grid container spacing={2} key={index} className={classes.formContainer}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Project Name"
              name="name"
              value={project.name}
              onChange={(e) => handleChange(e, index, 'projects')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Description"
              name="description"
              value={project.description}
              onChange={(e) => handleChange(e, index, 'projects')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Used Technology"
              name="usedTechnology"
              value={project.usedTechnology}
              onChange={(e) => handleChange(e, index, 'projects')}
            />
          </Grid>
        </Grid>
      ))}
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={() => handleAdd('projects')}
      >
        Add Project
      </Button>
    </Box>
  );
};

export default ProjectsForm;
