import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { AiFillMail } from "react-icons/ai";
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: 'about',
    text: 'about',
  },
  {
    id: 3,
    url: 'projects',
    text: 'projects',
  },
  {
    id: 4,
    url: 'skills',
    text: 'skills',
  },
  {
    id: 5,
    url: 'contact',
    text: 'contact',
  }
];

export const social = [
  
  {
    id: 1,
    url: 'mailto:developerqueenlatifa@gmail.com',
    icon: < AiFillMail />,
  },

  {
    id: 2,
    url: 'https://www.twitter.com/olorii_ashabi',
    icon: < FaTwitter/>,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/ashabi-lateefat-oduntan-93b25b1a1/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/OloriAsabi',
    icon: <FaGithubSquare />,
  },
];
