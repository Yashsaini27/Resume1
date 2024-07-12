import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import card1 from '../assets/images/download12.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  header: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: theme.spacing(8, 2),
    textAlign: 'center',
    marginBottom: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
  },
  section: {
    marginBottom: theme.spacing(6),
    padding: theme.spacing(6),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '700px',
    height: 'auto',
    maxHeight: '500px',
    margin: '0 auto',
    display: 'block',
    marginBottom: theme.spacing(6),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  bodyText: {
    marginBottom: theme.spacing(3),
    lineHeight: 1.6,
    fontSize: '1.4rem', // Increased font size
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Box className={classes.root}>
        <Container>
          <Box className={classes.header}>
            <Typography variant="h3" gutterBottom>
              About us
            </Typography>
            <Typography variant="h6">
              Resume is a career site powered by some of the best career experts and a community of 40 million readers a year.
            </Typography>
          </Box>

          <Box className={classes.section}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              Resume Is Like Rocket Fuel for Your Career.
            </Typography>
            <Typography variant="body3" className={classes.bodyText}>
              Use it to take your career to new heights.
            </Typography>
            <Typography variant="body3" className={classes.bodyText}>
              We offer you the best online resume builder and free professional advice from career experts. We’ll guide you through the entire recruitment process, all the way to your dream job.
            </Typography>
          </Box>

          <img src={card1} alt="Your description" className={classes.image} />

          <Box className={classes.section}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              Resume is your ultimate career toolbox
            </Typography>
            <Typography variant="body3" className={classes.bodyText}>
              Since 2016, Resume has helped millions of job seekers worldwide find employment. With a rapidly growing community of over 40 million readers a year, Resume is arguably the world’s fastest-growing career advice website.
            </Typography>
            <Typography variant="body3" className={classes.bodyText}>
              Each day, we help thousands of people write resumes and cover letters, improving their chances of landing a dream job.
            </Typography>
          </Box>

          <Box className={classes.section}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              We’re Building the World’s Largest and Best Career Site to Help You Find the Job You Want.
            </Typography>
            <Typography variant="body3" className={classes.bodyText}>
              Resume has published more than 1,400 career guides. Each required extensive research, consultation, fact-checking and was thoroughly reviewed according to Resume editorial guidelines.
            </Typography>
            <Typography variant="body3" className={classes.bodyText}>
              From resume and interview advice to networking, our guides have been recognized by over 200 universities and organizations worldwide.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
