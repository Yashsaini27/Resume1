import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Features from './Feature';
import CarouselComponent from '../components/CarouselComponent';
import { Button, Container, Box, Fab, Dialog, DialogContent } from '@mui/material'; // Import Material-UI components
import { makeStyles } from '@material-ui/core'; // Import makeStyles for custom styles
import { useNavigate } from 'react-router-dom';
import Chatbot from '../components/chatbot/index';
import MessageIcon from '@mui/icons-material/Message'; // Import message icon

// Define custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 2,
    padding: theme.spacing(4),
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'center', // Center items horizontally
    marginBottom: theme.spacing(4), // Space between carousel and button
  },
  carousel: {
    maxWidth: '80%', // Adjust width as needed
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4), // Space between button and features
  },
  button: {
    backgroundColor: '#1976d2', // Custom button background color
    color: '#fff', // Custom button text color
    '&:hover': {
      backgroundColor: '#115293', // Custom hover background color
    },
  },
  features: {
    marginTop: theme.spacing(4), // Space between features and Chatbot
  },
  fabContainer: {
    position: 'fixed', // Use fixed positioning for the container
    bottom: theme.spacing(2), // Stick to the bottom of the viewport
    right: theme.spacing(2), // Adjust right spacing as needed
    display: 'flex',
    justifyContent: 'flex-end',
  },
  dialog: {
    position: 'fixed', // Use fixed positioning for the dialog
    bottom: theme.spacing(-9), // Align with FAB
    right: theme.spacing(-89), // Adjust right spacing to place left of FAB
    maxWidth: '300px', // Adjust width as needed
  },
  dialogContent: {
    padding: 0, // Remove padding around the chatbot
  },
}));

const GettingStarted = () => {
  const classes = useStyles(); // Apply custom styles
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // State to handle dialog open/close

  const handleGetStarted = () => {
    navigate('/templete'); // Navigate to '/templete'
  };

  const handleFabClick = () => {
    setOpen(!open); // Toggle the dialog open state
  };

  return (
    <Box className={classes.root}>
      <Header />

      <Container className={classes.content}>
        <CarouselComponent className={classes.carouselContainer} /> {/* Apply styles to CarouselComponent */}

        <Box className={classes.buttonContainer}>
          {/* Get Started Button */}
          <Button variant="contained" className={classes.button} onClick={handleGetStarted}>
            Get Started
          </Button>
        </Box>
        
        <Box className={classes.features}>
          {/* Features Component */}
          <Features />
        </Box>

        {/* FAB Container */}
        <Box className={classes.fabContainer}>
          {/* Floating Action Button */}
          <Fab color="primary" onClick={handleFabClick}>
            <MessageIcon />
          </Fab>
        </Box>

        {/* Chatbot Dialog */}
        <Dialog
          open={open}
          onClose={handleFabClick}
          PaperProps={{
            className: classes.dialog,
          }}
        >
          <DialogContent className={classes.dialogContent}>
            <Chatbot />
          </DialogContent>
        </Dialog>
      </Container>

      <Footer />
    </Box>
  );
};

export default GettingStarted;
