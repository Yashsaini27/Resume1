import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const ProgressBar = ({ activeStep }) => {
  const steps = ['Education', 'Experience', 'Projects', 'Skills', 'Certifications', 'Additional Achievements'];

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default ProgressBar;
