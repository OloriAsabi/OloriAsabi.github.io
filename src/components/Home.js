import React from 'react';
import Navbar from "./Navbar"
import { social } from './data';
//import pic from './Images/OloriSketch.png';

function Home () {
        return(
          <main>
            <header>
          <Navbar />
          </header>
            <section className="main">
            <div className="banner container">
            <div className="section-center row">
              <div className="col-sm-12 col-md-12">
              <h4>Welcome </h4>
                <h1>I'm Olorì Àṣàbí</h1>
              </div>
              <div className="col-sm-12 col-md-12">
              <p> Frontend Engineer</p></div>
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
            </section>
          </main>
            )
}

export default Home;