import React, {useState, useEffect } from "react";
//import { FaToggleOn }from "react-icons/fa";


const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };
  
  function ToggleBtn() {
    const [theme, setTheme] = useState(getStorageTheme());
  
    function toggleTheme() {
          if (theme === 'light-theme') {
              setTheme('dark-theme');
          } else {
              setTheme('light-theme');
          }
      }
  
    useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }, [theme]);
    return(

        <div>
        <button className="btn" onClick={toggleTheme}>
        toggle
        </button>
        </div>

    )
}

export default ToggleBtn;