import React, { useState, useEffect} from 'react';
import Navbar from '../components/navbar'
import arrow from '../images/left-arrow.svg';
import {  client } from '../client';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
      const query = '*[_type == "abouts"]';
      client.fetch(query)
      .then((data) => {
        console.log(data);
        setAbouts(data)
      })
    },[])

    return (
        <div className="container">
             <Navbar/>
            <div className="about" id="about"  data-aos="fade-right">
           <div>
           <h1>ABOUT ME</h1>
            <div className="about-container">
                <div className="vertical-line">
                </div>
                <div>
                {abouts.map((about, index) => (
                <div
                className=""
                key={about.title + index}
                >
                    {/* <h2 className='font-bold text-start sm:text-2xl lg:text-3xl' style={{ marginTop: 20 }}>{about.title} with Modern techniques</h2> */}
                    <p className='text-gray-500 tracking-wide text-justify text-sm lg:text-xl' style={{ marginTop: 20, lineHeight: '30px' }}>{about.description}</p>
                    {/* <h5 className='hover:underline-offset-4 underline text-xl'><a href='https://audiomack.com/iamdjtifa' className='decoration-solid cursor-pointer hover:underline-offset-4'>@iamdjtifa</a></h5> */}
                </div>
                ))}
                    <p className="work-techs">Here are the technologies and tools I work with: </p>
                    <div className="technologies">
                        <div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon" />
                                <p>HTML</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>CSS / SASS</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Javascript</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Typescript</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Git / GitHub</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>BitBucket</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Firebase</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>React-Native</p>
                            </div>
                        </div>
                        <div>
                        <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Styled Components</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>TailwindCSS</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>React.js</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Bootstrap</p>
                            </div>  
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Redux</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Angular</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Next.js</p>
                            </div>
                            <div className="tech">
                                <img className="arrow" src={arrow} alt="icon"  />
                                <p>Wordpress</p>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
            {/* <a href='https://drive.google.com/file/d/1-QzoValyYLl5nu0PZ40mfeYwazMkVFoD/view?usp=sharing' target={"_blank"} rel="noreferrer"><button className='resume'>View Resume</button></a> */}

           </div>


        </div>
        </div>
        
    )
}



export default About
