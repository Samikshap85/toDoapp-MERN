import React from 'react'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom" ////importing reactrouter dom for routing
//import PersistentDrawerLeft from './component/appbar'

//importing pages for routing

import Task from "./pages/Task";
import CompletedTodo from './pages/completion';



export default function App() {
  return (
    <Router>
    <div>
      
      <Routes> 
        

        <Route path = "/"
        element={
          <Task/>
        }></Route>

        <Route path = "/completion"
        element={
          
          <CompletedTodo/>
        }></Route>
        </Routes>
        
    </div>
    </Router>
   
  )
}
