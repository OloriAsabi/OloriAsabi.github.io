import React from 'react';
import logo from "../Images/Olori-logo.png";


function About() {
    
        
    return(
        <section className="sec" >
            <div className="container section">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6 align-item-center about-logo">
            <img src={logo} alt="About pic" style={{ width: "50%"}} className="m-4"/></div>
            <div className="col-sm-12 col-md-6 mt-5"> 
            <h3 className="title">
                About 
            </h3>
            <div className="underline"></div>
            
                        
            <article>
                <p className="text">
                    My name is Ashabi Oduntan and I’m a self taught frontend web developer from Nigeria. I’ve made my entrance onto the scene fairly recently and have so far picked up skills in a number of frontend development technologies.

                    I have an eye for aesthetics and a penchant for paying attention to design details. These personal attributes help me deliver top quality products with an appealing user interface and a most satisfying user experience. 

                    But not only do I pay attention to design, I am a lover of nature with a heightened awareness of its features. Thus, nature is another source from which I take my design inspiration; its simplicity as well as its rich originality.

                    When I am not honing my programming skills by learning new technologies or taking on new projects, I enjoy my other life as a professional disc jockey.
                    </p>
            </article>
            </div>
            </div>
            </div>
        </section>
    )
    
}

export default About;