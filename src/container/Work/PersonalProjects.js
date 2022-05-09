import React,  { useState, useEffect }  from 'react'
import {  AiFillGithub } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import './Work.scss';


export const PersonalProjects = () => {
    const [works, setWorks] = useState([]); 
    const [expanded, setExpanded] = useState(false)
    const [filterPersonalProjects, setFilterPersonalProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
    useEffect(() => {
      const query = '*[_type == "personalProjects"]'
  
      client.fetch(query).then((data) => {
        setWorks(data);
        setFilterPersonalProjects(expanded ? data : data.slice(0, 5));
      });
  
    }, [expanded]);
  
    const handleWorkFilter = (item) => {
      setActiveFilter(item);
      setAnimateCard([{ y: 100, opacity: 0 }]);
  
      setTimeout(() => {
        setAnimateCard([{ y: 0, opacity: 1 }]);
  
        if (item === 'All') {
          setFilterPersonalProjects(works)
        } else {
          setFilterPersonalProjects(works.filter((work) => work.tags.includes(item)));
        }
      }, 500);
    };

  return (
      <div>
        <div className="app__work-filter">
        {['UI/UX','Bootstrap', 'CSS', 'Angular', 'React.js', 'Next.js', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <h6 className="project-text pt"> Works and Freelances </h6>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      > 
         {filterPersonalProjects.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
             
               
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
  
              <div className="app__work-tag app__flex">  
              <a href={work.projectLink} target="_blank" title='Link' className='icon' rel="noreferrer">
              <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <FaLink title='Link' />
                  </motion.div>
                </a>
                <p className="p-text">{work.tags[0]}</p>  
                 <a href={work.codeLink} target="_blank" title='Github Link' className='icon' rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub title='GitHub Link'/>
                  </motion.div>
                </a>

                <a href={work.figmaLink} target="_blank" title='Figma Link' className='icon' rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <FiFigma title='Figma Link'/>
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        ))}
       
      </motion.div>
      {/* <div className='app__flex'>
        <button type="button" className='ShowMore-btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </button>
        </div> */}
    </div>
  )
}
