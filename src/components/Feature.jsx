import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { FaSpellCheck, FaLock, FaRegFileAlt, FaRobot, FaUserShield, FaFileWord, FaPaperPlane } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
  featuresContainer: {
    padding: theme.spacing(4),
    backgroundColor: '#f5f5f5', // Example background color
    width: '100%', // Ensure full width of the container
  },
  featuresGrid: {
    marginTop: theme.spacing(4),
  },
  featureItem: {
    textAlign: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    backgroundColor: 'white',
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
  },
  featureIcon: {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(1),
  },
}));

function Features() {
  const classes = useStyles();

  const features = [
    { icon: <FaRegFileAlt className={classes.featureIcon} />, title: 'Easy online resume builder', description: 'Create an awesome resume in minutes, without leaving your web browser.' },
    { icon: <FaSpellCheck className={classes.featureIcon} />, title: 'Automatic spell-checker', description: 'Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.' },
    { icon: <FaLock className={classes.featureIcon} />, title: 'Your data is safe', description: 'Your data is kept private and protected by strong 256-bit encryption.' },
    { icon: <FaUserShield className={classes.featureIcon} />, title: 'Automatic summary generator', description: "Create a powerful resume profile or cover letter in one click. Writer's block is no longer an obstacle. Try for free!" },
    { icon: <FiFileText className={classes.featureIcon} />, title: 'Approved templates', description: 'Professionally-designed resume templates and examples. Just edit and download in 5 minutes.' },
    { icon: <FaRobot className={classes.featureIcon} />, title: 'AI pre-written phrases', description: 'Use the power of AI and data analysis, choose pre-generated effective phrases and keywords.' },
    { icon: <FaUserShield className={classes.featureIcon} />, title: 'Optimized resumes', description: 'Formats and designs are optimized for resume-filtering algorithms. Ensure humans see your application!' },
    { icon: <FaFileWord className={classes.featureIcon} />, title: 'Multi-format resume options', description: 'Save your perfect resume in any common format, including Microsoft Word and PDF in a single click.' },
    { icon: <FaPaperPlane className={classes.featureIcon} />, title: 'Cover letters', description: 'Our cover letter builder works with the same ease and use of elegant templates as the resume creator.' },
  ];

  return (
    <Box className={classes.featuresContainer}>
      <Typography variant="h2" align="center" gutterBottom>
        Features designed to help you win your dream job
      </Typography>
      <Grid container spacing={3} className={classes.featuresGrid}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className={classes.featureItem}>
              {feature.icon}
              <Typography variant="h5" component="h3" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1" component="p">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Features;
