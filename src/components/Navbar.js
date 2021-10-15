import React, { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { FaBars ,FaTimes} from 'react-icons/fa';
import logo from "../Images/Olori-logo.png";


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  /*const linksContainerRef = useRef(null);*/
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
 
  useEffect(() => {
    
    if (showLinks) {
      linksRef.current.style.display = "flex";
    } else {
      linksRef.current.style.display = 'none';
    }
  }, [showLinks]);
 

    return(
      <nav className="">
      <div className='container nav'>
          <Link to="/"><img src={logo} className='logo' alt='logo'/></Link>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
          <ul className='links' ref={linksRef}>
            <li>
           <Link to="/"
           >
                Home
             </Link>
             </li>
             <li>
            <Link to="/about">
              About </Link>
          </li>
          <li>
            <Link to="/project"
            >Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>

          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <div ><button className="closeMenu" onClick={toggleLinks}><FaTimes /></button></div>
          </ul>
        </div>
      </nav>
   
    );
  
}

export default Navbar;




