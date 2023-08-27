import React from 'react'
import Navbar from '../components/navbar'

const Blog = () => {
  return (
    <div>
    <Navbar />
    <h1 className="work-page-title">My Creative Writings</h1>
    <p  className="blog-text">Over the years, writing has enabled me to express my most deepest feelings, words and art. Welcome to my article as 
    <br/> I take you through the journey of techinal writing, cultural expression, spiritual insights and artisitic innovation
    </p>
    <div className="blog-body space-y-10"  data-aos="fade-up">
    <div className='blog-content'>
     <h5 className=''>Creating an Authentication Form using React Hook Form, React and Firebase.</h5>
    <a href='https://dev.to/oloriasabi/creating-an-authentication-form-using-react-hook-form-react-and-firebase-5d9h'>
        <p className='blog-btn'>Link</p>
    </a>
    </div>
    <div className='blog-content'>
     <h5 className=''>Google OAuth2 using the new Google Identity Services SDK for React using Jwt-decode</h5>
    <a href='https://dev.to/oloriasabi/google-oauth2-using-the-new-google-identity-services-sdk-for-react-using-jwt-decode-2ioo'>
    <p className='blog-btn'>Link</p>
    </a>
    </div> <div className='blog-content'>
     <h5 className=''>The Yorùbá World View</h5>
    <a href='https://medium.com/think-yoruba-first/the-yorùbá-world-view-b3c0a3e023e6'>
    <p className='blog-btn'>Link</p>
    </a>
    </div> 
    <div className='blog-content'>
     <h5 className=''>How to create table with data grid, checkbox and pagination using React table and Tailwind CSS.</h5>
    <a href='https://dev.to/oloriasabi/how-to-create-table-with-data-grid-checkbox-and-pagination-using-react-table-and-tailwind-css-33c'>
    <p className='blog-btn'>Link</p>
    </a>
    </div> <div className='blog-content'>
     <h5 className=''>The Inclusion of Isese In The Struggle for A Yoruba Nation.</h5>
    <a href='https://medium.com/think-yoruba-first/the-inclusion-of-isese-in-the-struggle-for-a-new-yoruba-nation-d77d00b83738'>
    <p className='blog-btn'>Link</p>
    </a>
    </div>
   <div className='blog-content'>
     <h5 className=''>The Science Of Ògùn Jíjó in Ifá</h5>
    <a href='https://medium.com/think-yoruba-first/the-science-of-ògún-jíjó-in-ifá-7de50fb932d3'>
    <p className='blog-btn'>Link</p>
    </a>
    </div>
    <div className='blog-content'>
     <h5 className=''>The science in Ifa</h5>
    <a href='https://medium.com/think-yoruba-first/the-science-in-ifa-4c0c41382bdb'>
    <p className='blog-btn'>Link</p>
    </a>
    </div>
    <div className='blog-content'>
     <h5 className=''>Form, Page Navigation using React-Router-Dom with Ionic-React, TypeScript, React-Hook-Form, React-Redux, and @reduxjs/toolkit!</h5>
    <a href='https://dev.to/oloriasabi/form-page-navigation-using-react-router-dom-with-ionic-react-typescript-react-hook-form-react-redux-and-reduxjstoolkit-3ba4'>
    <p className='blog-btn'>Link</p>
    </a>
    </div>
    <div className='blog-content'>
     <h5 className=''>The intimate relationship between Orí Bibọ and Orí</h5>
    <a href='https://open.substack.com/pub/oloriasabi/p/the-intimate-relationship-between?r=1rp4x0&utm_campaign=post&utm_medium=web'>
    <p className='blog-btn'>Link</p>
    </a>
    </div>
    <div className='blog-content'>
     <h5 className=''>JAGUN-JAGUN: Ancestry, Awo and Òrìṣà</h5>
    <a href='https://open.substack.com/pub/oloriasabi/p/jagun-jagun-ancestry-awo-and-orisa?r=1rp4x0&utm_campaign=post&utm_medium=web'>
    <p className='blog-btn'>Link</p>
    </a>
    </div>
    <div className='blog-content'>
     <h5 className=''>THE ELDERS OF THE NIGHT</h5>
    <a href='https://open.substack.com/pub/oloriasabi/p/the-elders-of-the-night?r=1rp4x0&utm_campaign=post&utm_medium=web'>
    <p className='blog-btn'>Link</p>
    </a>
    </div>
    <div className='blog-content'>
     <h5 className=''>“Understanding the Psychological Divide in Yoruba Society: Unveiling the Fragmentation Within”</h5>
    <a href='https://open.substack.com/pub/oloriasabi/p/understanding-the-psychological-divide?r=1rp4x0&utm_campaign=post&utm_medium=web'>
    <p className='blog-btn'>Link</p>
    </a>
    </div>

    </div>
    <div>
     <a href='https://medium.com/@developerqueenlatifa'
                 className=' ' target="_blank" rel="noreferrer">
                         medium.com/@developerqueenlatifa
    </a>
    <a href='https://dev.to/oloriasabi' className='font-medium text-xl p-5 underline underline-offset-8 hover:scale-x-105 cursor-pointer ' target="_blank" rel="noreferrer">
    dev.to/oloriasabi</a>   
    <a href='https://oloriasabi.substack.com/' className='font-medium text-xl p-5 underline underline-offset-8 hover:scale-x-105 cursor-pointer ' target="_blank" rel="noreferrer">
    oloriasabi.substack.com</a>   
     </div>
</div>
  )
}

export default Blog