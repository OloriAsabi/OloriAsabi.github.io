import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import {  client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss'
import Books from '../Books/Books';
import { Quotes } from '../Quotes/Quotes';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const [readMore, setReadMore] = useState(false);

const linkName = readMore?'Read Less':'Read More'

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
    .then((data) => {
      setAbouts(data)
    })
  },[])
  return (
    <div className='about'>
     <div>
        <Quotes />
     </div>

      <div className='app__profiles section'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}
          >
            <h2 className='about_text' style={{ marginTop: 20 }}>{about.title}</h2>
             <h5><a href='https://www.tm30.net/'>I'm currently an intern @ TM30</a></h5>
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.description}</h2>
            <h5><a href='https://audiomack.com/iamdjtifa'> @iamdjtifa </a></h5>
          </motion.div>
        ))}
      </div>

      <div>{readMore && <Books /> }
                <div className='flex_center' >
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  > 
                  <button className="article-btn" onClick={()=>setReadMore(!readMore)}>
                    {linkName}  
                      </button> 
                       </motion.div>
                      </div>
                            </div>

    </div>
  )
}
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);