import React from 'react'
import { social } from '../data/data';
import {  Newsletter } from "./Newsletter";
import "./Footer.css";


const Footer = () => {
    return (
        <div className="">
             <footer className="footer bg-black">
            <p className="footer__title">Olorì Àṣàbí</p>
            <Newsletter/>
            <div className="footer__social">
                 <ul className="footer__icon">
                      {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url} target="_blank" rel="noreferrer">{icon}</a>
                  </li>
                      );
                    })}
                  </ul>
                  </div>
            <p className="footer__copy">&#169;2021 Olorì Àṣàbí. All rigths reserved</p>
        </footer>


        </div>
    )
}
export default Footer