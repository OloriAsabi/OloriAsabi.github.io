import React, {useState, useEffect} from 'react'
import {  client } from '../../client';

import './Books.scss'

const Books = () => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
      const query = '*[_type == "books"]';
      client.fetch(query)
      .then((data) => {
        setBooks(data)
      })
    },[])
    console.log(books)
  return (
          <article className="article"> 
                   <h3 className="head-text">Books</h3>
                <p className="bold-text">One of my most favorite things to do is to read books, I've a vast range and genres of books, let me share them with you</p>
 
                          <div className="books  section"> 
                            <ul className="">
                    {books.map(( book, index ) => 
                    (
                       <div>
                        <li key={book.title + index}>{book.title}
                        </li>           
                        </div>
                    )
                )}
                   </ul>
                   
                </div> 
                </article> 
  )
}
export default Books