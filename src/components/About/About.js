import React,{useState} from 'react';
import RandomQuote from '../Quotes/RandomQuotes';
import "./About.css";
import Book from "./Book";


 function About()  {
const [readMore, setReadMore] = useState(false);

const linkName = readMore?'Read Less':'Read More'
    return(
        <section className="sec bg-black" >
            <div className="container section">
                <div className="row align-items-center">
                
            <div className="col-sm-12 col-md-12 mt-5">
                <div>
                  <RandomQuote />  
                </div>
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
            
                <div>{readMore && <Book /> }
                <a className="article-btn" onClick={()=>setReadMore(!readMore)}> 
                            <h2>{linkName}</h2>
                            </a>
                            </div>
              
            </div>
            </div>
            </div>

        </section>
    )
        
}

export default About;