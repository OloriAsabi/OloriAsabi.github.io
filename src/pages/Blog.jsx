import React from 'react'

const Blog = () => {
  return (
<div className='bg-white overflow-y-scroll  overscroll-contain text-black h-screen dark:bg-black dark:text-white'>
        <div className='container mx-auto pb-32 overflow-y-scroll  w-screen h-screen'>
        <h1 className='text-3xl text-start font-extrabold p-10'>Check My Articles On</h1>

        <div className='flex small justify-center items-center text-center'>
            <div className='p-5'>
            <h2 className='font-bold text-2xl p-5'>DEV Community</h2>
            <p className='font-medium text-2xl p-5'>Olorì Àṣàbí</p>
            <a href='https://dev.to/oloriasabi' className='font-medium text-xl p-5 underline underline-offset-8 hover:scale-x-105 cursor-pointer ' target="_blank" rel="noreferrer">
                dev.to/oloriasabi</a>
            </div>
            <div className='p-5'>
                <h2 className='font-bold text-2xl p-5 '>Medium Community</h2>
                <p className='font-medium text-2xl p-5'>Olorì Àṣàbí</p>
                <a href='https://medium.com/@developerqueenlatifa'
                 className='font-medium text-xl p-5 underline underline-offset-8 cursor-pointer  hover:scale-x-105 ' target="_blank" rel="noreferrer">
                        medium.com/@developerqueenlatifa
                    </a>
            </div>
        </div>
        
        <div className='pb-32'>
            <h2 className='text-3xl text-center font-extrabold pt-5'>  My Latest Article </h2>
              <div className='justify-center'>
                <h5 className='text-xl font-bold text-center p-5'>Title: Google OAuth2 using the new Google Identity Services SDK for React using Jwt-decode</h5>
                <a href='https://dev.to/oloriasabi/google-oauth2-using-the-new-google-identity-services-sdk-for-react-using-jwt-decode-2ioo'><p className='text-xl font-bold text-center bg-black text-white rounded-xl dark:text-black dark:bg-white w-20 ml-auto mr-auto  hover:scale-x-105  p-5 cursor-pointer'>Link</p></a>
              </div>
        </div>
        </div>
        </div>
  )
}

export default Blog