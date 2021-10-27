import React from 'react';
import Typical from 'react-typical'
import logo from "../Images/Olori-logo.png";
import image1 from "./ProjectImages/AshabiPieShopHome.png";
import image2 from "./ProjectImages/CocktailHome.png";
import image3 from "./ProjectImages/RandomPerson.png";

function Project() {

    return(
        <section>               
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
                steps={['UpComing Projects:', 'Admin Dashboard built with Angular.js', 800]}
                loop={Infinity}
                wrapper="h4"
            /> 
            </div>
        <main className="project container">
          <div className="row">
                <div className="single-project col-sm-12">    
                        <div><img src={image1} alt="pic"/></div>
                        <div className="project-info">
                            <h4>Ashabi's Pie App</h4>
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
                                <p><a href="https://oloriasabi.github.io/Ashabi-s-Pie-Shop/" className="data">Visit Site</a></p>    
                                </div> 
                                 
                    </div>

                    <div className="single-project col-sm-12">
                        <div><img src={image2} alt="pic" /></div>
                        <div className="project-info">
                            <h4>Cocktail App</h4>
                            <p>
                            A website built to showcase various deligihtful cocktails and API integration in React JS to fetch data
                            </p>
                            <div className="project-list">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React.js</li>
                            </ul>
                            </div>
                           <p> <a href="https://oloriasabi.github.io/cocktail-app/" className="data">Visit Site</a>   
                                </p>    
                                </div> 
                            
                    </div>

                    <div className="single-project col-sm-12">
                        <div><img src={image3} alt="pic" /></div>
                        <div className="project-info">
                            <h4>Random Person App</h4>
                            <p>
                             I built a profile display website and API integration in React JS to fetch data
                            </p>
                            <div className="project-list">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React.js</li>
                            </ul>
                            </div>
                                <a href="https://oloriasabi.github.io/random-person-app/" className="data">Visit Site</a>   
                                </div>
                             
                    </div>
                    </div>
                    </main>
                </section>
    )
}

export default Project;