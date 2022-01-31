import React, {useState} from "react";
import { FaBars , FaTimes } from "react-icons/fa"
import logo from "../../Images/5.png";
import "./Navbar.css";


export default function Navbar () {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar bg-black">
      <div className="app__navbar-logo">
       <a href="/"><img src={logo} alt="app__logo" /></a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>     
        <li className="p__opensans"><a href="#skills">Skills</a></li>
        <li className="p__opensans"><a href="#projects">Projects</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <FaBars color="fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <FaTimes color="fff" fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className="p__opensans"><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li className="p__opensans"><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
              <li className="p__opensans"><a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
              <li className="p__opensans"><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
