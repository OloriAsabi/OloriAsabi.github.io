import React, {useState, useEffect} from 'react'
import {  client } from '../client';


const Books = () => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
      const query = '*[_type == "books"]';
      client.fetch(query)
      .then((data) => {
        setBooks(data)
      })
    },[])
    
    return (
          <article className="p-5 transition-all ease-in pb-32 overflow-y-scroll delay-150"> 
                   <h3 className="text-center about-text font-bold text-xl mb-3">Books</h3>
                    <p className="text-start text-xl m-5 ">One of my most favorite things to do is to read books, I've a vast range and genres of books, let me share them with you</p>
                  <div className=""> 
                  <ul className="list-disc leading-8 pb-32 text-base p-5 italic">
                    {books.map(( book, index ) => 
                    (
                       <div>
                        <li 
                        className='ease-in- text-start text-xl hover:scale-x-105 duration-300' 
                        key={book.title + index}
                        >
                          {book.title}
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