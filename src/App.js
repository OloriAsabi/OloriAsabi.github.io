import React from 'react';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Skills  from "./components/Skills/MySkills";
import Contact from "./components/Contact/Contact";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return(
      <div className="bg-black">
      <Navbar/>
      <Home/> 
      <About/> 
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
       
  )
}
export default App;
