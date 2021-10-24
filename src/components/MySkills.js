import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import logo from "../Images/Olori-logo.png";
import CV from "../Files/Ashabi_Lateefat_Oduntan_most recent.pdf";


function Skills()  {
    return(
        <section className="sec">
          <div className="container skills">
          <div className="about-logo">
            <img src={logo} alt="About pic" style={{ width: "50%"}} className="m-4"/></div>
                
            <h2 className="text-7 fw-600 mt-5 mb-4 pb-2 wow fadeInUp">My Skills</h2>
            <div className="row gx-5">
          <div className="col-md-6 wow fadeInUp">
            <p className="fw-500 text-start mb-2">Web Design</p>
            <ProgressBar variant="danger" now={65} />
            <p className="fw-500 text-start mb-2">HTML/CSS</p>
            <ProgressBar variant="danger" now={95} />
            <p className="fw-500 text-start mb-2">JavaScript</p>
            <ProgressBar variant="danger" now={80} />
          </div>
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <p className="fw-500 text-start mb-2">React JS</p>
            <ProgressBar variant="danger" now={70} />
            <p className="fw-500 text-start mb-2">Angular Js</p>
            <ProgressBar variant="danger" now={60} />
            <p className="fw-500 text-start mb-2">Bootstrap</p>
            <ProgressBar variant="danger" now={99} />
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