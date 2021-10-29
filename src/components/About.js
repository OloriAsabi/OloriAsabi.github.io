import React from 'react';
import logo from "../Images/Olori-logo.png";


function About() {
    
        
    return(
        <section className="sec" >
            <div className="container section">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 align-item-center about-logo">
            <img src={logo} alt="About pic" style={{ width: "50%"}} className="m-4"/></div>
            <div className="col-sm-12 col-md-12 mt-5"> 
            <h3 className="title">
                About 
            </h3>
            <div className="underline"></div>
            
                        
            <article>
                <p className="text mb-5 p-3">
                    My name is Ashabi Oduntan and I’m a self taught frontend web developer from Nigeria. I’ve made my entrance onto the scene fairly recently and have so far picked up skills in a number of frontend development technologies.
                    <br />
                     I have an eye for aesthetics and a penchant for paying attention to design details. These personal attributes help me deliver top quality products with an appealing user interface and a most satisfying user experience. 

                    But not only do I pay attention to design, I am a lover of nature with a heightened awareness of its features. Thus, nature is another source from which I take my design inspiration, its simplicity as well as its rich originality.
                        <br />
                        <br />
                    When I am not honing my programming skills by learning new technologies or taking on new projects, I enjoy my other life as a professional disc jockey.
                    </p>
            </article>
            <article>
                <h3 className="text-center title">books</h3>
                <div className="underline"></div>
                <p className="text-black p-3 text">One of my most favorite things to do is to read books, I've a vast range and genres of books, let me share them with you</p>
                <div className="p-3">
                    <ul className="books">
                        <li>The Alchemist by Paulo Coelho</li>
                        <li>Drive by Daniel Pink</li>
                        <li>The War by Steven Pressfield</li>
                        <li>Stillness is the key by Ryan Holiday</li>
                        <li>The Lean Startup by Eric Ries</li>
                        <li>The Price of Progress by Christopher Ryan</li>
                        <li>Books of five rings by Miamoto Musashi</li>
                        <li>The Theory of Everything by Stephen Hawking</li>
                        <li>Meditations by Marcus Aurelius</li>
                        <li>Th Book of The Way by Lao Tzu</li>
                        <li>Hustle Harder by Curtis Jackson</li>
                        <li>Eloquent Javascript - A modern introduction to programming by Marijn Haverbeke</li>
                        <li>Green Book by Gaddaffi</li>
                        <li>In the Company of Giants by Rama Jager</li>
                        <li>Women Who Run With The Wolves by Wild Woman Archetype</li>
                        <li>Javascript The Good Parts by Douglas Crockford</li>
                        <li>African Fractals by Ron Eglash</li>
                        <li>Socrates and Orunmila by Sophie Bosede Oluwole</li>
                        <li>Inner Peace by Awo Falokun Fabunmi</li>
                        <li>Ifa Divination by William Bascom</li>
                        <li>React In Action by Mark Tielens Thomas</li>

                    </ul>
                </div> 
                </article>
            </div>
            
           
            </div>
            </div>
        </section>
    )
    
}

export default About;