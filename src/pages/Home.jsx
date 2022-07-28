import React from 'react'
import bg from '../assests/bg.png'


const Home = () => {
  return (
        <div  className='bg-white text-black dark:bg-black dark:text-white homepage  h-screen '>
        <div className='text-center w-screen h-screen '>
        <img src={bg} alt="" className='homepage w-screen h-screen' />
        <div className='flex items-center container mx-auto justify-center'>
            <div className='bg-white text-black bg-white text-black dark:bg-black shadow-black absolute top-1/3 rounded dark:text-white overlay p-10 w-full '>
            <h1 className="text-3xl md:text-5xl sm:text-2xl underline underline-offset-8 font-bold pt-2">Hello, I am Olorì Àṣàbí</h1>
            <ul className='flex items-center justify-center p-5 font-bold md:text-2xl text-sm'>
                <li className='p-5'>Frontend Developer </li>
                <li  className='p-5'>Designer </li>
                <li  className='p-5'>Web Services </li>
                <li  className='p-5'>Technical Writer </li>
            </ul>
            </div>
        </div>
     </div>
     </div>
  )
}

export default Home