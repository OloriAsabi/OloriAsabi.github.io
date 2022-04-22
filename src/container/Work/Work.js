import React,  { useState, useEffect } from 'react'
import { AiFillGithub,  } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import { PersonalProjects } from './PersonalProjects';

const Work = () => {
  const [works, setWorks] = useState([]); 
 const [expanded, setExpanded] = useState(false)
  // eslint-disable-next-line no-undef
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    const secondQuery = '*[_type == "personalProjects"]'

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(expanded ? data : data.slice(0, 5));
    });

    client.fetch(secondQuery).then((data) => {
      setWorks(data);
    });

  }, [expanded]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id='work'>
       <h2 className="head-text">My Creative <span>Portfolio</span></h2>
       <div className="app__work-filter">
        {['UI/UX','Bootstrap', 'Angular', 'React.js', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <h6 className="project-text">My Personal Projects</h6>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      > 
         {filterWork.map((work, index) => (
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
              </div>
            </div>
          </div>
        ))}
     
      </motion.div> 
        <div className='app__flex'>
        <button type="button" className='ShowMore-btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </button>
        </div>

     <hr className='break'/>
   <PersonalProjects/>
    </div>
  )
}
export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);