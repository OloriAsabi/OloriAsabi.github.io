import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/1.png';
const Navbar = () => {
  return (
    <div className="navbar" data-aos="fade-down">
      <div className="nav">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="w-12 h-12 object-cover image bg-white text-white rounded-none cursor-pointer" />
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
