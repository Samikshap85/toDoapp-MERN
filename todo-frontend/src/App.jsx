import React from 'react'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom" ////importing reactrouter dom for routing
import PersistentDrawerLeft from './component/appbar'

//importing pages for routing

import Task from "./pages/Task";
import Completion from './pages/completion';


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
          <Completion/>
        }></Route>
        </Routes>
        
    </div>
    </Router>
  )
}
