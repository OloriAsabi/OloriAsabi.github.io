import { FaMouse } from "react-icons/fa"
  import React,{useState} from 'react'
import {  client } from '../../client';

import './Quotes.scss'

export const Quotes = () => {


  const [quotes, setQuotes] = useState([]);
        

  const getRandomQuotes =() =>  {
        const query = '*[_type == "quotes"]';
        client.fetch(query)
        .then((data) => {
          console.log(data)
          let randomNum = Math.round(Math.random() * ((data.length-1) - 0) + 0);
          let randomQuote = data[randomNum];
          setQuotes(randomQuote)
        })
      }
      console.log(quotes);
 
      const handleClick = () => {
        getRandomQuotes();
        };

  return (
    <div className="main">
      <div className="card">
        <div className="card-body">
            <p className="card-text">{quotes.message}</p>
            <h3 className="card-title">{quotes.name}</h3>
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
