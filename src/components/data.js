import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { AiFillMail } from "react-icons/ai";
export const links = [
  {
    id: 1,
    img:"./ProjectImages/AshabiPieShopHome.png",
    url: 'https://oloriasabi.github.io/Ashabi-s-Pie-Shop/',
    text: "Ashabi's Pie App",
    info: "Built with HTML, CSS,JavaScript and Bootstrap to build this app"
  },
  {
    id: 2,
    img:"./ProjectImages/CocktailHome.png",
    url: 'https://oloriasabi.github.io/cocktail-app/',
    text: 'Cocktail App',
    info: "Using API to fecth the necessary display data and I used React.js, CSS to build this App"
  },
  {
    id: 3,
    img:"./ProjectImages/RandomPerson.png",
    url: 'https://oloriasabi.github.io/random-person-app/',
    text: 'Random Person App', 
    info: "Using API to fecth the necessary display data and I used React.js, CSS to build this App",
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
