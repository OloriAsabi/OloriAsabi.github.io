import React from 'react';
import { social } from './data';
import logo from "../Images/Olori-logo.png";
//import { AiFillMail } from "react-icons/ai";


function Contact() {
    return(
        <div className="content">
          <div className="container section">
          <div className="row align-item-center">
            <div className="about-logo col-sm-12 col-md-12 align-item-center">
            <img src={logo} alt="About pic" style={{ width: "50%"}} className="m-4"/></div>

            <div className="col-sm-12 col-md-12 mt-5">
            <h1 className="mb-5">Let's get in touch!</h1>
             <p className="mb-5 p-5">
             I'm currently open to working with diverse clientele; from individuals to organisations operating at different scales. I’m excited to bring my design experience to a range of projects: whether they be legacy products needing maintenance or freshly conceptualised ones.

             <br />
             <br />
              I am available via any of the communication channels listed below. Do send a hello and let’s have a conversation.
             </p>
            <div className="socials text-center">
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
            </div>
             </div>

        </div>
    )
}



export default Contact;

