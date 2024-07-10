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

const CertificationsForm = ({ certifications, handleChange, handleAdd }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Certifications
      </Typography>
      {certifications.map((certification, index) => (
        <Box key={index} className={classes.formContainer}>
          <TextField
            fullWidth
            variant="outlined"
            label="Certification Name"
            name="certificationName"
            value={certification.certificationName}
            onChange={(e) => handleChange(e, index, 'certifications')}
            className={classes.inputField}
          />
          <Box mt={2}> {/* Add margin top between fields */}
            <TextField
              fullWidth
              variant="outlined"
              label="From Month/Year"
              name="fromMonthYear"
              value={certification.fromMonthYear}
              onChange={(e) => handleChange(e, index, 'certifications')}
              className={classes.inputField}
            />
          </Box>
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={() => handleAdd('certifications')}
      >
        Add Certification
      </Button>
    </Box>
  );
};

export default CertificationsForm;
