import React from 'react';
import { social } from './data';
//import pic from './Images/OloriSketch.png';

function Home () {
        return(
          <main>
            <section className="section">
            <div className="banner container">
            <div className="section-center row">
              <div className="col-sm-12 col-md-12">
              <h5>Welcome </h5>
                <h1>I'm Àṣàbí</h1>
              </div>
              <div className="col-sm-12 col-md-12 ">
              <p>Frontend engineer</p>
              </div>
              <div className="socials">
                  <ul>
                  {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} >{icon}</a>
              </li>
            );
          })}
                  </ul>
              </div>
            </div>
            </div>
            <div className="bg-photo"></div>
            </section>
          </main>
            )
}

export default Home;