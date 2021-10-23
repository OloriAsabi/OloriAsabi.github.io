import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars , FaTimes } from "react-icons/fa"
import logo from "../Images/Olori-logo.png";


export default function Navbar () {


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <nav>
    <header className="header container">
      <div className="logo-nav">
      <Link to="/">
        <img src={logo} className='logo' alt='logo' />
       </Link>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
          <Link to="/" >
                Home
             </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link to="/about">
              About </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link to="/project"
            >Projects</Link>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
          <Link to="/skills">Skills</Link>
          </li>
          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <Link to="/contact" className="">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FaTimes className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>

    </header>
    </nav>
  );
};
