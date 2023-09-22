import React from 'react'
import PersistentDrawerLeft from '../component/appbar'
import { Box } from '@mui/material'


export default function Task() {
  return (
    <>
    
    <div className='background'>
      <Box height={70}/>
      <Box sx={{display:'flex'}}>
      
      <PersistentDrawerLeft/>
      
      This is Task
      </Box>
    </div>
    
    
    
    
    </>
  )
}
