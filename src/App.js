import React from 'react';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Skills  from "./components/Skills/MySkills";
import Contact from "./components/Contact/Contact";

import Navbar from './components/Navbar/Navbar';

function App() {
  return(
      <div className="bg-black">
      <Navbar/>
      <Home/>
      <hr className="sec-line" /> 
      <About/> 
      <hr className="sec-line" /> 
      <Skills/>
      <hr className="sec-line" /> 
      <Project/>
      <hr className="sec-line" /> 
      <Contact/>
      </div>
       
  )
}
export default App;
