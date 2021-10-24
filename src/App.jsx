import React, { useState, useEffect } from 'react';

import Navbar from './components/header/Navbar';
import SearchBar from './components/header/SearchBar';

import requestData from './dataRequest';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    requestData(userInput);
  }, [userInput]);

  document.body.style.backgroundColor = isDarkMode ? '#141D2F' : '#F6F8FF';

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} setTheme={setIsDarkMode} />
      <SearchBar isDarkMode={isDarkMode} setUserInput={setUserInput} />
    </div>
  );
}
