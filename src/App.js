import React from 'react';
import { BrowserRouter as Router,
  Switch,
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
  
     
    <Router basename="/OloriAsabi.github.io">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      <Route path="/about">
          <About />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      </Router>
  
  )
}
export default App;
