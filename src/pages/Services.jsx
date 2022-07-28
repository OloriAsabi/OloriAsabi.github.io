import React from 'react'
import { services } from '../context/data';
import { Testimonals } from '../components';

const Services = () => {
  return (
    <div className='bg-white text-black overflow-y-scroll overscroll-contain h-screen dark:text-white dark:bg-black '>
<div className='container mx-auto'>
  <div className='p-5'>
      <p className='text-gray-500 text-start font-bold mb-3'>WHAT I DO</p>
      <h1 className='font-medium md:text-3xl text-start lg:text-3xl sm:text-xl mb-5'>MY SERVICES</h1>
    <div className='bg-white grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 dark:text-white dark:bg-black justify-center items-center shadow-black'>
        {services.map((service) => (
        <div key={service.id} className="border-solid border-2 p-5 hover:bg-gray-200  hover:text-black cursor-pointer rounded-2xl w-full h-full border-gray-500">
            <div className='text-3xl text-gray-700 mb-5'>{service.icon}</div>
            <h1 className='text-xl uppercase font-bold'>{service.title}</h1>
            <p className='text-gray-500 font-extralight pt-3 text-sm'>{service.info}</p>
        </div>
        ))}
  </div>
  </div>

  <div className='mt-5 container mx-auto'>
    <div className='skills'>
        <div className='p-5'>
        <h1 className='mb-5 uppercase font-boldmd:text-3xl lg:text-3xl sm:text-xl'>Professional SKILLS</h1>
        <p className='text-gray-500 text-xl block w-full pb-3'>Over the years of experience I've picked up several professional skills and these are my skills  as I keep busy sharpening my axe for more skills.</p>
        <ul className='text-center shadow-black w-full p-3 grid lg:grid-cols-4 md:grid-cols-2  gap-2 sm:grid-cols-1'>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>React.js</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>React-Native</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>Next.js</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>Angular</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>HTML/CSS</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>Tailwind CSS</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>Material UI</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>Bootstrap</li>
            <li className='dark:text-black dark:bg-white cursor-pointer hover:scale-x-105 
            transition 
            delay-3 
            ease-inbg-black text-white p-3 mb-3 rounded-xl'>Styled Coompnents</li>
        </ul>
        </div>
    </div>
    <div className='pb-32'>
      <Testimonals/>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Services