import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

import Navbar from './components/Navbar';

import Contact from './components/Contact';
import Home from './components/Home';
import About from "./components/About";
import Skills  from "./components/MySkills";
<<<<<<< HEAD
import Contact from "./components/Contact";
import Navbar from './components/Navbar';
=======
>>>>>>> f0f3c8d5babfc37b893b385a191367591af7e0cc

function App() {
  return(
    <Router>
<<<<<<< HEAD
=======
    <div>
>>>>>>> f0f3c8d5babfc37b893b385a191367591af7e0cc
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
<<<<<<< HEAD
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
=======
        <Route path='/contact'>
          Contact
          </Route>
      </Switch>
    </div>
>>>>>>> f0f3c8d5babfc37b893b385a191367591af7e0cc
      </Router>
  )
}
export default App;
