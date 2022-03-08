import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { AiFillMail } from "react-icons/ai";

 const SocialMedia = () => {
  return (
    <div className="app__social">
    <div>
        <a href='mailto:developeroloriasabi@gmail.com'>
      <AiFillMail /></a>
    </div>
    <div>
        <a href='https://www.linkedin.com/in/ashabilateefatoduntan/'>
      <FaLinkedin/></a>
    </div>
    <div>
        <a href='https://github.com/OloriAsab'>
        <FaGithubSquare/></a>
    </div>
    <div>
        <a href='https://www.twitter.com/olorii_ashabi'>
        <FaTwitter/></a>
    </div>
  </div>
  )
}
export default SocialMedia