import { FaMouse } from "react-icons/fa"
  import React,{useEffect, useState} from 'react'
import {  client } from '../../client';

import './Quotes.scss'

export const Quotes = () => {
  const [quotes, setQuotes] = useState([{}]);
        

  const getRandomQuotes =() =>  {
        const query = '*[_type == "quotes"]';
        client.fetch(query)
        .then((data) => {
          console.log('Data', data)
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
      console.log('Quotes', quotes);
   
   
    return (
        <div className="main">
          <div className="card">
            <div className="card-body">
                <p className="card-text">{quotes ? quotes.message : 'Awareness is always present, it’s attentiveness we lack '}</p>
                <h3 className="card-title">{quotes ? quotes.name : 'Olorì Àṣàbí'}</h3> 
                <button
                    className="button"
                      onClick={handleClick}
                        type="submit">
                        <FaMouse /> Generate Quote</button>
            </div>
            </div>
        </div>
  )
}
