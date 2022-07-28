import React from 'react'
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen'>
    <Navbar/> 
    <div>
        <main>
              {children}   
        </main>
    </div>
    </div>
  )
}

export default Layout