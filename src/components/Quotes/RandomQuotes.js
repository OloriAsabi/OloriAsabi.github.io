import React, { useState } from 'react';
import QuoteAndAuthor from './Quotes';
import quotes from '../data/QuotesDB'

const generateRandomQuote = (max) => 
    Math.round(Math.random() * ((quotes.length-1) - 0) + 0);
  


const RandomQuote = () => {
  
  const [quote, setQuote]  = useState(quotes[generateRandomQuote()])

  
  const handleNewQuote = () => {
      setQuote(quotes[generateRandomQuote()])
  }



  return (
    <div className="main">
      <QuoteAndAuthor quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  )
} 

export default RandomQuote;