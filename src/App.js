import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";


import Home from './components/Home';
import About from "./components/About";
import Project from "./components/Project";
import Skills  from "./components/MySkills";
import Contact from "./components/Contact";

import Navbar from './components/Navbar';

function App() {
  return(
  
    //basename="/olori-asabi-app"
     
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />  
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route>404 Not Found!</Route>
        </Routes>

      </Router>
  
  )
}
export default App;
