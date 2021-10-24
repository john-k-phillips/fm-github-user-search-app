import React from 'react';

import moon from '../../assets/icon-moon.svg';
import sun from '../../assets/icon-sun.svg';

// eslint-disable-next-line react/prop-types
export default function Navbar({ setTheme, isDarkMode }) {
  const toggleTheme = () => {
    setTheme(!isDarkMode);
  };

  return (
    <nav className="w-10/12 flex m-auto mt-10 items-center">
      <span
        className="
        mr-auto text-2xl font-bold text-custom-black-lighter
        dark:text-white"
      >
        devfinder

      </span>
      <div
        className="flex items-center gap-3 cursor-pointer"
        role="button"
        tabIndex="0"
        onClick={toggleTheme}
        onKeyDown={toggleTheme}
      >
        <h2
          className="
          font-bold text-github-blue text-custom-grayish-blue-lighter tracking-widest
          dark:text-white"
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </h2>
        <img src={isDarkMode ? sun : moon} alt="" />
      </div>
    </nav>
  );
}
