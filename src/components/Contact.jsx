import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    textAlign: 'center',
  },
  background: {
    position: 'relative',
    background: 'linear-gradient(135deg, #f0f4f8, #e2e8f0)',
    padding: theme.spacing(8, 0),
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
  },
  formContainer: {
    background: 'white',
    borderRadius: '12px',
    padding: theme.spacing(4),
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
  },
  form: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
    width: '100%',
    maxWidth: '400px',
  },
  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5, 3),
    borderRadius: '25px', // Increased border radius for a more attractive look
    backgroundColor: '#007BFF',
    color: 'white',
    transition: 'background-color 0.3s, transform 0.2s',
    '&:hover': {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)', // Slight scaling effect on hover
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  shape: {
    position: 'absolute',
    zIndex: -1,
  },
  shape1: {
    top: '10%',
    left: '10%',
    width: '100px',
    height: '100px',
    backgroundColor: '#E0E7FF',
    clipPath: 'polygon(100% 0, 0 100%, 0 0)',
  },
  shape2: {
    top: '30%',
    right: '15%',
    width: '80px',
    height: '80px',
    backgroundColor: '#C7D2FE',
    clipPath: 'polygon(100% 0, 0 100%, 0 0)',
  },
  shape3: {
    bottom: '10%',
    left: '20%',
    width: '60px',
    height: '60px',
    backgroundColor: '#D1FAE5',
    clipPath: 'polygon(100% 0, 0 100%, 0 0)',
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/contact', formData);
      console.log('Form submitted:', response.data);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Header />

      <Box className={classes.background}>
        <Container className={classes.root}>
          <Typography variant="h4" className={classes.title}>
            Let us know if you need any help!
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Our customer  agents will assist you with any issues you’re facing.
          </Typography>

          <Box className={classes.formContainer}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                className={classes.textField}
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <Button type="submit" variant="contained" className={classes.button}>
                Send Message
              </Button>
            </form>
          </Box>
        </Container>

        <Box className={classes.overlay}>
          <Box className={`${classes.shape} ${classes.shape1}`} />
          <Box className={`${classes.shape} ${classes.shape2}`} />
          <Box className={`${classes.shape} ${classes.shape3}`} />
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
