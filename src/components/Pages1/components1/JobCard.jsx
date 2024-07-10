
import React from "react";
import  Box  from "@mui/material/Box";
import { Button, Grid, Typography,makeStyles } from "@material-ui/core";
import {differenceInMinutes,differenceInHours} from 'date-fns'



const useStyles=makeStyles((Theme)=>({
    wrapper:{
    border: '1px solid #e8e8e8',
    cursor:"pointer",
    transition:'.3s',

    "&:hover":{
        boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
        borderleft:"5px solid #4D64E4"

    },
    },
    companyName:{

        fontSize:"13.5px",
        backgroundColor: Theme.palette.primary.main,
        padding:Theme.spacing(0.75),
        borderRadius:"5px",
        display:"inline-block",
        fontWeight:600,
    },
    skillChip:{
        margin:Theme.spacing(0.5),
        padding:Theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        fontWeight:600,
        backgroundColor:Theme.palette.secondary.main,
        color:"#fff",
    }

}));

export default  (props)=>{
    const minutesAgo = differenceInMinutes(Date.now(), props.postedOn);
    const hoursAgo = differenceInHours(Date.now(), props.postedOn);
    const classes=useStyles()
    return(
    <Box mt={4} p={4} className={classes.wrapper}>
    <Grid container alignItems="center">
        <Grid item xs>
         
         <Typography variant="subtitle1">{props.title} </Typography>
         <Typography className={classes.companyName} variant="subtitle1">{props.companyName}</Typography>
         </Grid>
        <Grid item container xs>
            
                {props.skills.map((skill)=> (<Grid key={skill} className={classes.skillChip} item>{skill}</Grid>))}
            </Grid>
            <Grid item container direction="column" alignItems="flex-end" xs>
                <Grid item>
                <Typography variant="caption">
                {hoursAgo} hours {minutesAgo % 60} min ago| {props.type} | {props.location} 
                </Typography>
               
        </Grid>
        <Grid item>
            <Box mt={4}>
            <Button onClick={props.open} variant="outlined">Apply</Button>
            </Box>

        </Grid>

        </Grid>
        </Grid>
    
    </Box>
    )
}

