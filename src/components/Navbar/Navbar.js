import React, {useState} from 'react'
import logo from '../../assests/Olori-logo.png';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss'
// import { VStack } from "@chakra-ui/react";
// import { ThemeModeToggler } from '..';


 const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
       <a href='/'><img src={logo} alt="olori logo"/></a>
      </div>
      <ul className="app__navbar-links">
      {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      <li><a href='https://medium.com/@developerqueenlatifa' target="_blank" rel="noreferrer">Blog</a></li>
      </ul>

      {/* <VStack h="10vh" justifyContent="center">
      <ThemeModeToggler />
    </VStack> */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li><a href='https://medium.com/@developerqueenlatifa' target="_blank" rel="noreferrer">Blog</a></li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
export default Navbar