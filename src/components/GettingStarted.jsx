import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Features from './Feature';
import CarouselComponent from '../components/CarouselComponent';
import { Button, Container, Box } from '@mui/material'; // Import Material-UI components
import { makeStyles } from '@material-ui/core'; // Import makeStyles for custom styles
import { useNavigate } from 'react-router-dom';
import Chatbot from './Chatbot';

// Define custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 2,
    padding: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#1976d2', // Custom button background color
    color: '#fff', // Custom button text color
    '&:hover': {
      backgroundColor: '#115293', // Custom hover background color
    },
  },
}));

const GettingStarted = () => {
  const classes = useStyles(); // Apply custom styles
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/templete'); // Navigate to '/templete'
  };

  return (
    <Box className={classes.root}>
      <Header />

      <Container className={classes.content}>
        <CarouselComponent />
        
        {/* Get Started Button */}
        <Button variant="contained" className={classes.button} onClick={handleGetStarted}>
          Get Started
        </Button>
        
        {/* Features Component */}
        <Features />

        <Chatbot/>
      </Container>


      <Footer />
    </Box>
  );
};

export default GettingStarted;
