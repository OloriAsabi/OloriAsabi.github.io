import React,{ useState } from 'react'
import { PersonalProjects, Work } from './shared_pages'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Portfolio = () => {

    const [showPersonalProjects, setShowPersonalProjects] = useState(false);
    const [showWorkProjects, setShowWorkProjects] = useState(false);
    
  return (
    <div className='bg-white text-black overflow-y-scroll w-screen h-screen overscroll-contain dark:text-white dark:bg-black p-5 services'>
    <div className='container mx-auto h-screen'>
    <p className='text-gray-500 text-start font-bold mb-3'>MY PORTFOLIO</p>
    <h1 className='font-medium md:text-3xl text-start lg:text-3xl sm:text-xl'>CREATIVE WORKS</h1>

    <div className='text-center flex justify-between flex-col items-center '>
     <div className=' '>
      <header className=' p-10'>
        <h2 className='font-bold lg:text-2xl md:text-2xl sm:text-xl p-5 underline underline-offset-8'>Personal Projects</h2>
        <button className="" onClick={()=>setShowPersonalProjects(!showPersonalProjects)}>
        {showPersonalProjects ? <AiOutlineMinus className=' bg-black text-white dark:text-black dark:bg-white  hover:scale-x-105  border-none' fontSize={28} /> : <AiOutlinePlus className='bg-black text-white dark:text-black dark:bg-white  hover:scale-x-105  border-none'  fontSize={28}/>} 
        </button> 
       </header>
       <div>
       {showPersonalProjects &&
        <PersonalProjects/>
         }
       </div>
       </div>
               
        <div className=''>
            <header className='p-10'>
                 <h2 className='font-bold lg:text-2xl md:text-2xl sm:text-xl p-5  underline underline-offset-8'>Works</h2>
                <button className="" onClick={()=>setShowWorkProjects(!showWorkProjects)}>
                {showWorkProjects ? <AiOutlineMinus className=' bg-black text-white dark:text-black dark:bg-white  hover:scale-x-105  border-none' fontSize={28} /> : <AiOutlinePlus className='bg-black text-white dark:text-black dark:bg-white hover:scale-x-105  border-none'  fontSize={28}/>} 
                </button> 
            </header>
            <div>
            {showWorkProjects && <Work/> }
            </div>
       </div>
       </div>
       </div>
  </div>

  )
}

export default Portfolio