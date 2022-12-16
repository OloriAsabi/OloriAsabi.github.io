import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import email from '../assests/email.png';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGithubSquare, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState(
    { 
     name: '',
     user_email: "",
     message: ''
     }
    );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    setFormData({ ...formData,  [e.target.name]: e.target.value});
  };

  // console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setLoading(true);
    emailjs.send(
      "service_f7pyqhc",
      "template_j6q5j28",
      formData,
      "s7CVxZ2hSWavjmlJG"
    )
    .then(response => {
      console.log('SUCCESS!', response);
      setLoading(false);
      setIsFormSubmitted('SUCCESS');
    })
  }

  return (
    <div className='bg-white overflow-y-scroll overscroll-contain w-screen h-screen mb-32 mt-32 text-black dark:text-white dark:bg-black'>      
    <div className='container mx-auto'>
      <div className="text-center">
          <h1 className='p-5 font-bold md:text-3xl lg:text-3xl sm:text-xl'>Contact Us</h1>
          <p className='font-bold p-5'>
          Are you ready to start your next project, contact us below.
          </p>
      </div>

        <div className="flex space-evenly justify-center mt-8 mb-4 text-center">
        <div className="w-full ml-auto mr-auto items-center p-px cursor-pointer m-px">
          <img src={email} className='w-28 h-28 m-px ml-auto mr-auto' alt="email" />
          <a href="mailto:developeroloriasabi@gmail.com" className="p-3 font-bold">developeroloriasabi@gmail.com</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit} className=" text-center flex justify-center items-center p-5 flex-col w-full">
          <div className="m-15 border-black">
            <input 
            className="p-3 
            m-5 
            w-80
            dark:bg-black 
            dark:text-white 
            h-18 
            hover:scale-x-105 
            border
            rounded
            border-black 
            dark:border-white
            flex-column
            transition 
            delay-3 
            ease-in" 
            type="text" 
            placeholder="Your Name" 
            name="name"
            value={formData.name} 
            onChange={handleChangeInput} />
          </div>
          <div className="">
            <input 
            className="p-3 
            m-5 
            w-80
            dark:bg-black 
            dark:text-white 
            flex-column 
            h-18 
            border-black 
            border
            rounded
            dark:border-white 
            hover:scale-x-105 
            transition 
            delay-3 
            ease-in" 
            type="email" 
            placeholder="Your Email" 
            name="user_email"
            value={formData.user_email}
            onChange={handleChangeInput}
             />
          </div>
          <div>
            <textarea
              className="p-3 
              m-5 
              w-80
              h-32 
              dark:bg-black 
              border
              rounded
              border-black 
              dark:text-white 
              hover:scale-x-105 
              dark:border-white 
              transition 
              delay-3 
              ease-in"
              placeholder="Your Message"
              value={formData.message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
            <button type="button" className="text-center w-32 text-center bg-black text-white dark:text-black dark:bg-white rounded p-2 mb-5 cursor-pointer hover:scale-x-105  font-medium" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
          </form>
         ) : (
        <div>
          <h3 className="text-center font-bold p-3">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      </div>
      {/* <div className='mt-10 p-5 text-center'>
        <h1 className='text-center uppercase font-bold mb-5'>KEEP IN TOUCH</h1>
        <p className='chat text-gray-500 mb-5 tex-xl text-center'>Do not hesitate to contact me with any questions. Feel free to drop in for a chat on whatsapp</p>
                <a href='https://api.whatsapp.com/send?phone=2348175509185'>
       <button className='bg-black text-white dark:text-black dark:bg-white text-center rounded-3xl p-3 cursor-pointer hover:scale-x-105 font-medium'>
      <BsWhatsapp  fontSize={28} />
        </button>
        </a>
    </div> */}

    <div className=" text-center flex justify-evenly p-5 pb-32 cursor-pointer items-center">
    <div>
        <a href='https://www.linkedin.com/in/ashabilateefatoduntan/'>
      <FaLinkedin className='hover:scale-x-105 mb-32 ' fontSize={28}/></a>
    </div>
    <div>
        <a href='https://github.com/OloriAsab'>
        <FaGithubSquare className='hover:scale-x-105 mb-32' fontSize={28}/></a>
    </div>
    <div>
        <a href='https://www.twitter.com/olorii_ashabi'>
        <FaTwitter className='hover:scale-x-105 mb-32 ' fontSize={28}/></a>
    </div>
    </div>
      </div>
  )
}

export default Contact