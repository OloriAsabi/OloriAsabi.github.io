import React from 'react';
import { social } from '../data/data';
import image from "../../Images/olori.jpeg";
import "./Home.css";

function Home () {
        return(
          <main className="bg-black container1" id="home">
            <section className="home">
              <div className="home__img">
              <img src={image} alt="home-bg" x="50" y="60"  className="home__blob-img"/>
            </div>
             <div className="home_container">
             <div className="home__data">
              <h1>Welcome  </h1>
                <h3>
                   I'm <span className="home__title-color"> Olorì Àṣàbí </span>
                </h3>
               <p>Responsive Web Developer</p> 
             </div>
             </div>
              <div className="home__social">
                  <ul>
                  {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} className='home__social-icon' target="_blank" rel="noreferrer">{icon}</a>
              </li>
            );
          })}
                  </ul>
              </div>
            
            </section>
          </main>
            )
}

export default Home;