import React,  { useState }  from 'react';
import Typical from 'react-typical'
import { projectData } from "../data/ProjectData";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import "./Project.css";

function Project() {
    const [index, setIndex] = useState(0);
    const {id, img, text, info, tech, href, url } = projectData[index];
    const checkNumber = (number) => {
        if (number > projectData.length - 1) {
          return 0;
        }
        if (number < 0) {
          return projectData.length - 1;
        }
        return number;
      };
      const nextPerson = () => {
        setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
        });
      };
      const prevPerson = () => {
        setIndex((index) => {
          let newIndex = index - 1;
          return checkNumber(newIndex);
        });
      };
      const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * projectData.length);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
      };
    

    return(
                   <section className="bg-black">      
                  <div className="section">
                 <div className="title">   
                 <h2>My personal Projects</h2>
                <div className="underline"></div>
                  </div>  
          </div>

          <div className="typical">
            <Typical
            className="type"
                steps={['UpComing Projects:', ' React, Redux Website & Material UI', 1000]}
                loop={Infinity}
                wrapper="h4"
            /> 
            </div>
        <main className="project">             
                <div key={id}>            
                        <div className='project-item' >  
                        <div ><img src={img} className="project-img" alt="pic"/></div>  
                         <div className="project-info">
                            <h4>{text}</h4>
                            <p>{info}</p>
                            <span className="project-span">Skills: </span> 
                            <div className="project-list">{tech}</div>
                            <div className="project-icon">
                                <p><a href={href} target="_blank" rel="noreferrer" className="data">Visit Site</a></p> 
                              <a href={url} target="_blank" className="git" rel="noreferrer"><AiOutlineGithub /></a>   
                               </div> 
                               </div>
                          </div>
                          <div className='button-container'>
                                <button className='prev-btn' onClick={prevPerson}>
                                <FaChevronLeft />
                                </button>
                                <button className='next-btn' onClick={nextPerson}>
                                <FaChevronRight />
                                </button>
                            </div>
                            <button className='random-btn' onClick={randomPerson}>
                                Check Projects
                            </button>
                        </div>
                    </main>
                    </section>  
    )
}

export default Project;