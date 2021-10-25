/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import searchIcon from '../../assets/icon-search.svg';

// eslint-disable-next-line react/prop-types
export default function SearchBar({ isDarkMode, setUserInput }) {
  const [searchInput, setSearchInput] = useState('');

  const submitHandler = () => {
    setUserInput(searchInput);
  };

  return (
    <div
      className="
      flex items-center gap-1 bg-white w-10/12 m-auto p-2 rounded-xl mt-10 shadow-lg
      dark:bg-custom-grayish-blue-darker
      md:p-4
      lg:w-full"
    >
      <img
        className="
        mr-1 ml-1
        md:mr-3 md:ml-3"
        src={searchIcon}
        alt=""
      />
      <input
        className="
        text-xs mr-auto w-full outline-none
        dark:bg-custom-grayish-blue-darker dark:text-white
        md:text-lg"
        placeholder="Search GitHub username..."
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button
        className="
        bg-custom-blue p-2 rounded-xl text-white
        md:pr-4 md:pl-4 md:font-bold text-xl"
        type="submit"
        onClick={submitHandler}
      >
        Search
      </button>
    </div>
  );
}
