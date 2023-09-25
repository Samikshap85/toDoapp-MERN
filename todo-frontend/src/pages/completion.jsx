import React from 'react'
import PersistentDrawerLeft from '../component/appbar'
import { Box } from '@mui/material'

export default function Completion() {
  return (
    <>
    
    <div className='background'>
      <Box height={70}/>
      <Box sx={{display:'flex'}}>
      
      <PersistentDrawerLeft/>
      </Box>
    </div>
      
    </>
  )
};


