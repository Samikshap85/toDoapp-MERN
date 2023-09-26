import React, { Component } from 'react'
import PersistentDrawerLeft from '../component/appbar'
import { Box } from '@mui/material'
import '../component/taskContent.css'
import TodoForm from '../component/TodoForm'
import Todos from '../component/Todos'
import {Paper, Typography} from '@mui/material'




export default function Task() {
  
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
                Add Your Task Here
              </Typography>
              <TodoForm />
              <Todos />
            </Paper>
      
      
     
      
      
      </div>
      </div>
      
      
    </div>
    
    
    
    
    </>
  )
}
