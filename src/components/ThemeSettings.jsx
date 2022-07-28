import React, { useContext} from 'react';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';

import { Context } from "../context/Context"

const ThemeSettings = () => {
    const { theme, setTheme } = useContext(Context);
  return (
    <div  className='ease-in transition'>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-white dark:text-white bg-black text-center p-10 ease-in transition focus:outline-none shadow-none p-2 rounded-full outline-none ring-transparent cursor-pointer"
        >
         <BsToggle2On className="text-center" fontSize={28} />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-dark dark:text-black text-center p-10  bg-white shadow-none p-2  ease-in transition focus:outline-none rounded-full outline-none ring-transparent cursor-pointer"
        >
         <BsToggle2Off className="text-center " fontSize={28} />
        </button>
      )}
    </div>
  );
};

export default ThemeSettings;