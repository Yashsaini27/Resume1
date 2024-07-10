import React, {useEffect, useState } from 'react'

import { Grid, ThemeProvider } from '@material-ui/core'
import Header from '../Pages1/components1/Header'
import Theme from '../Pages1/Theme'
import JobCard from './components1/JobCard'
import NewJobModal from './components1/NewJobModal'
import axios from 'axios'
import ViewJobModal from './components1/ViewJobModal'

export default ()=>{

    const[newJobModal,setNewJobModal]=useState(false)
    const[jobs,setJobs]=useState([]);
    const[viewJob,setViewJob]=useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/job')
          .then(response => {
            setJobs(response.data);
          })
          .catch(error => {
            console.error("There was an error fetching the job listings!", error);
          });
      }, []);
   
      
       
    return (
    <ThemeProvider theme={Theme}>
        <Header openNewJobModal={()=>setNewJobModal(true)}/>
        <NewJobModal closeModal={()=>setNewJobModal(false)} newJobModal={newJobModal} />
        
        <ViewJobModal job={viewJob} closeModal={()=>setViewJob({})}/>

        <Grid container justify='center'>
            <Grid item xs={10}>
           


                      

                       
            {jobs.map(job=> <JobCard open={()=>setViewJob(job)} key={job.id} {...job}/>)}

            </Grid>

        </Grid>
    </ThemeProvider>
    );
}
