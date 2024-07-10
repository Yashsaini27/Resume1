import React, { useState } from "react";
import { Grid,Typography,Button } from "@material-ui/core";
import Box from '@mui/material/Box';
// import { Link } from "react-router-dom";



export default (props) =>{


   
return(
<Box py={10} bgcolor="black" color="white">
    <Grid container justify="center" > 
        <Grid item xs={10}>

       <Box display="flex" justifyContent="space-between">

       

    
    <Typography variant="h5">Open Job Listing</Typography>
    <Button onClick={props.openNewJobModal} variant="contained" color="primary" disableElevation >
        Post a Job</Button>
    </Box>
    </Grid>
    </Grid>
</Box>
);
}
