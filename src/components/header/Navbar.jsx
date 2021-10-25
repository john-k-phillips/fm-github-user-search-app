import React from 'react';
import PropTypes from 'prop-types';

import moon from '../../assets/icon-moon.svg';
import sun from '../../assets/icon-sun.svg';

export default function Navbar({ setTheme, isDarkMode }) {
  const toggleTheme = () => {
    setTheme(!isDarkMode);
  };

  return (
    <nav
      className="
      w-10/12 flex m-auto mt-10 items-center
      md:mt-6
      lg:w-full"
    >
      <span
        className="
        mr-auto text-2xl font-bold text-custom-black-lighter
        dark:text-white
        md:text-3xl"
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
          dark:text-white
          md:text-xl"
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </h2>
        <img src={isDarkMode ? sun : moon} alt={isDarkMode ? 'toggle sun' : 'toggle moon'} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
