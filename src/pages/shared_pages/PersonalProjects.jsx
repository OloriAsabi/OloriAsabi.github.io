import { urlFor, client } from '../../client';
import React,  { useState, useEffect } from 'react'
import { AiFillGithub,  } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa'

const PersonalProjects = () => {
    const [works, setWorks] = useState([]); 
    const [expanded, setExpanded] = useState(false);
     const [filterWork, setFilterWork] = useState([]);
     const [activeFilter, setActiveFilter] = useState('All');

     useEffect(() => {
        const query = '*[_type == "works"]';
    
        client.fetch(query).then((data) => {
          setWorks(data);
          setFilterWork(expanded ? data : data.slice(0, 5));
        });  
      }, [expanded]);

      const handleWorkFilter = (item) => {
        setActiveFilter(item);
    
        setTimeout(() => {    
          if (item === 'All') {
            setFilterWork(works);
          } else {
            setFilterWork(works.filter((work) => work.tags.includes(item)));
          }
        }, 100);
      };
    
  return (
    <div className='container mx-auto overflow-y-scroll h-screen overscroll-contain w-screen pb-32 mb-32 p-5'>
        <div className="text-center items-center shadow-black w-full p-3 flex-wrap flex-row flex justify-center space-x-4 space-y-2">
        {['Angular', 'React.js', "React Native",'Next.js', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`bg-black text-white w-18 dark:text-black dark:bg-white rounded text-center p-2 cursor-pointer hover:bg-gray-500 font-medium ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        className="grid lg:grid-cols-4 h-screen  mb-64 overscroll-contain md:grid-cols-3 pb-32 sm:grid-cols-1 m-5 gap-8 justify-center items-center shadow-black text-center"
        > 
         {filterWork.map((work, index) => (
          <div className="mt-5 pb-10" key={index}>
            <div
              className="h-full object-cover hover:opacity-100 relative"
            >
              <img src={urlFor(work.imgUrl)} className="block h-auto" alt={work.name} />
              <div className="w-full overlays justify-center items-center flex flex-col text-white text-center transition ease-in delay-150 absolute h-full object-cover top-0  bottom-0 left-0 right-0">
              <h4 className="font-extrabold text-center">{work.title}</h4>
              <p className="text-center">{work.tags[0]}</p>  
              <div className="flex justify-evenly p-10 text-center  cursor-pointer">  
              <a href={work.projectLink} target="_blank" title='Link' className='icon' rel="noreferrer">
                 <div
                    className="hover:scale-x-105 p-5"
                  >
                    <FaLink title='Link' fontSize={20}  className="hover:scale-x-105  " />
                  </div>
                </a>
                 <a href={work.codeLink} target="_blank" title='Github Link' className='icon' rel="noreferrer">
                  <div
                    className="hover:scale-x-105 p-5"
                  >
                    <AiFillGithub title='GitHub Link' fontSize={20}  className=" hover:scale-x-105 "/>
                  </div>
                </a>
              </div>
            </div>    
            </div>
            <div className="">
              <p className="text-justify text-xl font-extralight" style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </div>
        ))}    
        <div className='bg-black text-white dark:text-black w-32 mb-32 ml-auto mr-auto flex justify-center items-center text-center dark:bg-white rounded text-center p-2 cursor-pointer hover:scale-x-105 font-medium'>
        <button type="button" className='ShowMore-btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </button>
        </div>
        </div> 
    </div>
  )
}

export default PersonalProjects