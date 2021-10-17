import React from 'react';
import { social } from './data';
import logo from "../Images/Olori-logo.png";
//import { AiFillMail } from "react-icons/ai";


function Contact() {
    return(
        <div className="content container">
            <div className="col-sm-12 col-md-6 align-item-center">
            <img src={logo} alt="About pic" style={{height:"80%", width: "80%"}} className="about-logo m-4"/></div>
            <h1 className="mb-5">Let's get in touch!</h1>
             <p className="mb-5">
            I'm seeking out opportunities to collaborate with companies / agencies / 
            individuals, not just work for them. I want to bring my collective design
            experience to the table where we can work together to solve real business-problems 
            in a way that optimizes all of our respective experience and knowledge.
             </p>
            <div className="socials col-sm-12 col-md-12">
                 <ul>
                      {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                      );
                    })}
                  </ul>
              </div>

             

        </div>
    )
}



export default Contact;

