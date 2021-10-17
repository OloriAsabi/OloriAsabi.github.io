import React from 'react';
import logo from "../Images/Olori-logo.png";


function About() {
    
        
    return(
        <section className="sec" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6 align-item-center">
            <img src={logo} alt="About pic" style={{height:"80%", width: "80%"}} className="about-logo m-4"/></div>
            <div className="col-sm-12 col-md-6"> 
            <h3 className="title">
                About 
            </h3>
            <div className="underline"></div>
            
                        
            <article>
                <p className="text">I'm self taught Frontend developer
                from Nigeria.
                I've been building website since 2020 with a focus on responsive design, accessibility and pleasing aesthetics</p>
            </article></div>
            </div>
            </div>
        </section>
    )
    
}

export default About;