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
      dark:bg-custom-grayish-blue-darker"
    >
      <img
        className="
        mr-1 ml-1"
        src={searchIcon}
        alt=""
      />
      <input
        className="
        text-xs mr-auto w-full outline-none
        dark:bg-custom-grayish-blue-darker dark:text-white
        "
        placeholder="Search GitHub username..."
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button
        className="bg-custom-blue p-2 rounded-xl text-white"
        type="submit"
        onClick={submitHandler}
      >
        Search
      </button>
    </div>
  );
}
