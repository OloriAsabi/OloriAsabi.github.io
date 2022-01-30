import React from 'react'
import { list } from "../data/data";

const Book = () => {
    return (
           <article className="article"> 
                   <h3 className="text-center title">books</h3>
                <div className="underline"></div>
                <p className="p-3 text">One of my most favorite things to do is to read books, I've a vast range and genres of books, let me share them with you</p>
 
                          <div className="p-3"> 
                            <ul className="books mb-5">
                    {list.map(( book ) => {
                            const{ books, id} = book
            return (
                <div>
                        <li key={id}>{books}
                        </li>

           
                        </div>
                    )
                })}
                   </ul>
                   
                </div> 
                </article> 
    )
}
export default Book