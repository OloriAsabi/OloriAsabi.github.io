import 'bootstrap/dist/css/bootstrap.min.css';
import Typical from 'react-typical';
import CV from "../../Files/Ashabi_Lateefat_Oduntan_most recent.pdf";
import './Skill.css'


function Skills()  {
    return(
        <section className="sec bg-black">
          <div className="container skills">      
                  <h2 className="text-7 fw-600 text-center">My Skills</h2>
                  <div className="typical">
            <Typical
            className="type"
                steps={['UpComing Framework:', ' Vue.js and Nxt.js', 800]}
                loop={Infinity}
                wrapper="h4"
            /> 
            </div>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download.png" alt="skills-logo"  className='skill-icon'/>
                        </div>
                            <h5 className="skill-title">HTML 5</h5>
                     
                      </div>

                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/919826.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5 className="skill-title">CSS</h5>
                      </div>
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-1.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5 className="skill-title">JavaScript</h5>
                      </div>
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-1.jpg" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5 className="skill-title">Bootstrap</h5>
                      </div>
                     
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-11.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5 className="skill-title">SaSS</h5>
                      </div>
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-5.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5 className="skill-title">React.Js</h5>
                      </div>
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-7.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5 className="skill-title">Angular.js</h5>
                      </div>             
                    </div>
                   </div>
               <div> 
                 <div className=" text-center">            
                 <a href={CV} className="btn">Download CV</a></div>  
              </div>
              </div>
        </section>
    )
} 

export default Skills;