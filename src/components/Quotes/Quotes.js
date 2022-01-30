import React from 'react'
import { FaMouse } from "react-icons/fa"

const QuoteAndAuthor = ({ quote, handleNewQuote }) => {
    return (
        <div className="card mb-5" >

            <div className="card-body" key={quote.id}>
               <p className="card-text">{quote.text}</p>
                <h3 className="card-title">{quote.author}</h3>
                <button
                className="button"
                    onClick={handleNewQuote}
                    type="submit">
                    <FaMouse /> Generate Quote</button>
                {/*
                <button
                    className="ml-3"
                    onClick={() => {
                       handleNewQuote()
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                type="submit"> <FaTwitter/> Share Quote</button>
                */}
            </div>
        </div>
    )
}

export default QuoteAndAuthor;