import React from 'react';
import { social } from './data';
//import pic from './Images/OloriSketch.png';

function Home () {
        return(
            <main className="main">
            <div className="banner container">
            <div className="section-center row align-items-center">
              <div className="col-sm-12 col-md-12">
              <h3>Hi I'm Olorì Àṣàbí</h3>
              </div>
              <div className="col-sm-12 col-md-12">
              <p className="title"> Frontend Engineer</p></div>
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
            </div>
            <div className="bg-photo"></div>
            </main>
          
            )
}

export default Home;