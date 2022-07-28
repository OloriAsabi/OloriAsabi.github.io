import { GiClick } from "react-icons/gi"
import React,{useEffect, useState} from 'react'
import {  client } from '../client';
import AnimatedText from 'react-animated-text-content';

 const Quotes = () => {
  const [quotes, setQuotes] = useState([{}]);
        

  const getRandomQuotes =() =>  {
        const query = '*[_type == "quotes"]';
        client.fetch(query)
        .then((data) => {
          // console.log('Data', data)
            const index = Math.floor(Math.random() * data.length);
            setQuotes(data[index]);
        })
      }

      useEffect(() => {
        getRandomQuotes();
      }, []);

      const handleClick = () => {
        getRandomQuotes();
        };
      // console.log('Quotes', quotes);
   
   
    return (
        <div className="justify-center text-center p-5">
            <div className="">
               <AnimatedText
                type="words"
                animation={{
                  x: '0px',
                  y: '-10px',
                  scale:1.1,
                  ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph "
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%">
                {quotes ? quotes.message : 'Awareness is always present, it’s attentiveness we lack '}
               </AnimatedText> 
                <h3 className="mt-5 font-bold">{quotes ? quotes.name : 'Olorì Àṣàbí'}</h3> 
                </div>

                <button
                  className="button"
                  onClick={handleClick}
                  type="submit">
                  <GiClick fontSize={28}  className="mt-3 cursor-pointer hover:scale-x-105 "/>       
                </button>
        </div>
  )
}
export default Quotes