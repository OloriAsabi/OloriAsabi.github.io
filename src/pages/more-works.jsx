import React,  { useState, useEffect } from 'react'
import { AiFillGithub,  } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa'
import { urlFor, client } from '../client';
import Navbar from '../components/navbar'

const MoreWorks = () => {
    const [works, setWorks] = useState([]); 
    const [expanded, setExpanded] = useState(false);
     const [filterWork, setFilterWork] = useState([]);
     const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        const query = '*[_type == "works"]';
    
        client.fetch(query).then((data) => {
            console.log(data);
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
        <div>
            <Navbar />
            <h1 className="work-page-title">MY WORKS</h1>
            <div className="text-center nav-filter items-center shadow-black w-full p-3 flex-wrap flex-row flex justify-center space-x-4 space-y-2">
                {['Angular', 'React.js', "React Native",'Next.js', 'All'].map((item, index) => (
                <button
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`resume  ${activeFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </button>
                ))}
            </div>
            <div
        className="work-page"  data-aos="fade-up"
        > 
         {filterWork.map((work, index) => (
            <a href={work.projectLink} target="_blank" rel="noreferrer" >
                <div  className="work-page-container" key={index}>
              <img src={urlFor(work.imgUrl)}  alt={work.name} />
              <div className="work-info">
              <div className="work-info-content">
              <div className="title-icon">
              <h4 className="work-title">{work.title}</h4>
              <p className="technology">{work.tags[0]}</p>
              </div>
              {/* <div className="">
              <p className="" style={{ marginTop: 10 }}>{work.description}</p>
            </div> */}
              <div className="techs">  
              <a href={work.projectLink} target="_blank" title='Link' className='technology' rel="noreferrer">
                    <FaLink title='Link' fontSize={20}  className="" />
                </a>
                 <a href={work.codeLink} target="_blank" title='Github Link' className='technology' rel="noreferrer">
                    <AiFillGithub title='GitHub Link' fontSize={20}  className=""/>
                </a>
                </div>
              </div>
            </div>  
            
            <div className="">
              <p className="text-justify text-xl font-extralight" style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </div> </a> 
        ))}
        </div> 
        <div className=''>
        <button type="button" className='resume btn-show' onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </button>
        </div>
        </div>
    )
}

export default MoreWorks
