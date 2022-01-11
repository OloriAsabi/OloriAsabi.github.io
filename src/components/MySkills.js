import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Images/Olori-logo.png";
import Typical from 'react-typical';
import CV from "../Files/Ashabi_Lateefat_Oduntan_most recent.pdf";


function Skills()  {
    return(
        <section className="sec">
          <div className="container skills">
          <div className="about-logo">
            <img src={logo} alt="About pic" style={{ width: "50%"}} className="m-4"/></div>
                
                  <h2 className="text-7 fw-600 mt-5 mb-5 text-center">My Skills</h2>

                  <div className="typical">
            <Typical
            className="type"
                steps={['UpComing Language:', ' Vue.js and Nxt.js', 800]}
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
                            <h5>HTML 5</h5>
                     
                      </div>

                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/919826.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5>CSS</h5>
                      </div>
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-1.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5>JavaScript</h5>
                      </div>
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-1.jpg" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5>Bootstrap</h5>
                      </div>
                     
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-11.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5>SaSS</h5>
                      </div>
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-5.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5>React.Js</h5>
                      </div>
                      <div className="col">
                        <div className="img">
                          <img src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/download-7.png" alt="skills-logo" className='skill-icon'/>
                        </div>
                            <h5>Angular.js</h5>
                      </div>             
                    </div>
                   </div>
               <div>               
                 <p className="text-center mt-5 wow fadeInUp "><a href={CV} className="btn btn-outline-white btn-dark shadow-none rounded-0">Download CV</a></p>
              </div>
              </div>
        </section>
    )
} 

export default Skills;