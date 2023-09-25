import React, { Component } from 'react'
import PersistentDrawerLeft from '../component/appbar'
import { Box } from '@mui/material'
import '../component/taskContent.css'
import TodoForm from '../component/TodoForm'
import Todos from '../component/Todos'



export default function Task() {
  
  return (
    <>
    
    <div className='background'>
      <Box height={70}/>
      <div className="center-container">
      <PersistentDrawerLeft/>
      <header>
      <h1>TodoList</h1>
      <TodoForm />
      <Todos />
      </header>
      
      
      </div>
      
      
    </div>
    
    
    
    
    </>
  )
}
