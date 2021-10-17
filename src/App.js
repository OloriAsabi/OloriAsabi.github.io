import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";




import Home from './components/Home';
import About from "./components/About";
import Skills  from "./components/MySkills";
import Contact from "./components/Contact";
import Navbar from './components/Navbar';

function App() {
  return(
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/olori-asabi-app">
          <Home />
        </Route>
      <Route path="/about">
          <About />
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
