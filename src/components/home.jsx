import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   
    return (
        <div className="header" data-aos="fade-right">
            <div className="header-text">
                <p>Hello, I am Olorì Àṣàbí</p>
                <p className="job">A FRONT-END <br />ENGINEER</p>
                <p className="">and I own a</p>
                <p className="job"> TECHNICAL <br/> COMPANY </p>
                 <p>that provides technical solutions,
                <br/> such web and mobile application development, 
                <br/>UI/UX design, QA tester, 
                <br/> backend development and solution architectural services </p>
                <p>I create innovative solutions! <Link to="/projects">Check it out my creative works.</Link></p>
            </div>
        </div>
    )
}

export default Header
