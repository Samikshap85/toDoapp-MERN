import React from 'react'
import PersistentDrawerLeft from '../component/appbar'
import { Box ,Paper,Typography } from '@mui/material'
import CompletedTodos from '../component/completedTodos'
// import Todos from '../component/Todos'
import '../component/taskContent.css'

export default function Completion() {
  return (

    <>
    
    <div className='background'>
      <Box height={70}/>
      <div className="center-container">
      <PersistentDrawerLeft/>
      <div className='content-container'>
      <Paper elevation={3} className='heading-paper'
      >
              <Typography variant="h4" gutterBottom textAlign={'center'}>
                Completed Todos
              </Typography>
              <CompletedTodos/>
            </Paper>
      
      
     
      
      
      </div>
      </div>
      
      
    </div>
    
    
    
    
    </>
  )
}


