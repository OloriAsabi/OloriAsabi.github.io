import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg';
import logo from '../assests/1.png'
import ThemeSettings from './ThemeSettings';

const Navbar = () => {
 const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
   <nav className="w-screen bg-white shadow h-24 flex md:justify-center dark:text-white dark:bg-black justify-between items-center p-8 shadow-black">
     <div className="md:flex-[1.5] flex-start justify-center items-center">
        <a href="/">
        <img src={logo} alt="logo" className="w-22 h-12 object-cover dark:text-white  dark:bg-white rounded-none cursor-pointer" />
        </a>
      </div>
      <ul className="text-black nav-list font-bold md:flex hidden list-none dark:text-white flex-row justify-between items-center flex-1">
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href="/">Home</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href="/about">About</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href='/services'>Services</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href='/portfolio'>Portfolio</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href='/blog'>Blog</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href='/contact'>Contact</a></li>

       <ThemeSettings />
      </ul>
      <div className="flex relative justify-between items-center ">
        {!toggleMenu && (
          <CgMenuGridR fontSize={38} className="text-black md:hidden cursor-pointer dark:text-white" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <CgMenuGridR fontSize={38} className="text-black md:hidden cursor-pointer dark:text-white" onClick={() => setToggleMenu(false)} />
        )}  
        <div className="md:hidden">
        <ThemeSettings />
        </div>
        {toggleMenu && (
            <div
            className="nav-list  fixed top-20 right-0 left-0 bottom-0 z-5 bg-white  ease-in p-3 dark:bg-black dark:text-white shadow-2xl list-none
            justify-center rounded-md text-black w-screen h-screen">
          <ul
            className="text-black font-bold list-none dark:text-white flex-col justify-between text-center items-center "
          >
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href="/">Home</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href="/about">About</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href='/services'>Services</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href='/portfolio'>Portfolio</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href='/blog'>Blog</a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'><a href='/contact'>Contact</a></li>
          </ul>
          </div>
        )}
      </div>
   </nav>
    </div>
  )
}

export default Navbar