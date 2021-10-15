import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

import Home from './components/Home';
import About from "./components/About";
import Skills  from "./components/MySkills";
import Navbar from './components/Navbar';

function App() {
  return(
    <Router>
      <div>
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
      </Switch>
      </div>
      </Router>
  )
}
export default App;
