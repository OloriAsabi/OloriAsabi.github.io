import React, { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import logo from "../Images/Olori-logo.png";


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
 
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
 

    return(
      <nav>
      <div className='container nav-center'>
        <div className="nav-header">
          <Link to="/"><img src={logo} className='logo' alt='logo'/></Link>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
          </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links'ref={linksRef} >
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
          </ul>
        </div>
        </div>
      </nav>
   
    );
  
}

export default Navbar;




