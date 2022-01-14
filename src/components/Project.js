import React from 'react';
import Typical from 'react-typical'
import logo from "../Images/Olori-logo.png";
import image1 from "./ProjectImages/AshabiPieShopHome.png";
import image2 from "./ProjectImages/CocktailHome.png";
import image4 from "./ProjectImages/Dashboard.png";
import image5 from "./ProjectImages/E-commerce.jpg";
import image6 from "./ProjectImages/GbeduApp.jpg";
import { AiOutlineGithub } from 'react-icons/ai'

function Project() {

    return(
        <section className="container">               
         <div className="section">
                <div className="about-logo">
            <img src={logo} alt="About pic" style={{ width: "50%"}} className="m-4"/></div>
            
           
                 <div className="title">   
                 <h2>My personal Projects</h2>
                <div className="underline"></div>
                  </div>  
          </div>

          <div className="typical">
            <Typical
            className="type"
                steps={['UpComing Projects:', ' Andela Project using Angular', 800]}
                loop={Infinity}
                wrapper="h4"
            /> 
            </div>
        <main className="">
          <div className="project-container ">
                <div className="single-project col-sm-12">    
                        <div><img src={image1} alt="pic"/></div>
                        <div className="project-info">
                            <h4>Ashabi's Pie Shop Website</h4>
                            <p>
                                A pastry website
                            </p>
                            <div className="project-list">
                            <ul>
                                <li>HTML</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                            </ul>
                            </div>
                            <div className="project-info">
                                <p><a href="https://oloriasabi.github.io/Ashabi-s-Pie-Shop/" target="_blank" rel="noreferrer" className="data">Visit Site</a></p> 
                                <a href="https://github.com/OloriAsabi/Ashabi-s-Pie-Shop" target="_blank" rel="noreferrer"><AiOutlineGithub className="text-black git"/></a>   
                               </div> 
                               </div> 
                                 
                    </div>

                    <div className="single-project col-sm-12">
                        <div><img src={image2} alt="pic" /></div>
                        <div className="project-info">
                            <h4>Cocktail Website</h4>
                            <p>
                            A website built to showcase various deligihtful cocktails and API integration in React JS to fetch data
                            </p>
                            <div className="project-list">
                            <ul>
                                <li>CSS</li>
                                <li>React.js</li>
                            </ul>
                            </div>
                           <p><a href="https://oloriasabi.github.io/cocktail-app/" target="_blank" rel="noreferrer" className="data">Visit Site</a>   
                                </p>  
                                <a href="https://github.com/OloriAsabi/cocktail-app" target="_blank" rel="noreferrer"><AiOutlineGithub className="text-black git"/></a>  
                                </div> 
                            
                    </div>        
                    
                    <div className="single-project col-sm-12">
                                    <div>
                                        <img src={image4} alt="pic" />
                                        </div>
                                    <div className="project-info">
                                        <h4>Dashboard Website</h4>
                                        <p>
                                           A website built to showcase a dashboard of random Data
                                        </p>
                                        <div className="project-list">
                                        <ul>
                                            <li>CSS</li>
                                            <li>Angular</li>
                                        </ul>
                                        </div>
                                    <p> 
                                        <a href="https://oloriasabi.github.io/Dashboard-app/" target="_blank" rel="noreferrer" className="data">Visit Site</a></p> 
                                        <a href="https://github.com/OloriAsabi/Dashboard-app" target="_blank" rel="noreferrer"><AiOutlineGithub className="text-black git"/></a> 
                                        
                                </div> 
                    </div>

                    <div className="single-project col-sm-12">    
                        <div><img src={image5} alt="pic"/></div>
                        <div className="project-info">
                            <h4>E-commerce Website</h4>
                            <p>
                                A UI design built to display an E-commerce website 
                            </p>
                            <div className="project-list">
                            <ul>
                                <li>CSS/Styled components</li>
                                <li>React.js</li>
                            </ul>
                            </div>
                                <p><a href="https://oloriasabi.github.io/e-commerce-app/" target="_blank" rel="noreferrer" className="data">Visit Site</a></p> 
                                <a href="https://github.com/OloriAsabi/e-commerce-app" target="_blank" rel="noreferrer"><AiOutlineGithub className="text-black git"/></a>   
                                </div> 
                                 
                    </div>

                    <div className="single-project col-sm-12">    
                        <div><img src={image6} alt="pic"/></div>
                        <div className="project-info">
                            <h4>GbeduApp</h4>
                            <p>
                            GbeduApp used to search for your favorite music using Spotify API
                            </p>
                            <div className="project-list">
                            <ul>
                                <li>CSS/Bootstrap</li>
                                <li>Angular</li>
                                <li>API using Spotify API</li>
                            </ul>
                            </div>
                                <p><a href="https://oloriasabi.github.io/gbedu-app/" target="_blank" rel="noreferrer" className="data">Visit Site</a></p> 
                                <a href="https://github.com/OloriAsabi/gbedu-app" target="_blank" rel="noreferrer"><AiOutlineGithub className="text-black git"/></a>   
                                </div> 
                            </div>

                    </div>
                    </main>
                </section>
    )
}

export default Project;