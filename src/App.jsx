import React, { useState } from 'react';

import Navbar from './components/header/Navbar';
import SearchBar from './components/header/SearchBar';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  document.body.style.backgroundColor = isDarkMode ? '#141D2F' : '#F6F8FF';

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} setTheme={setIsDarkMode} />
      <SearchBar isDarkMode={isDarkMode} />
    </div>

  );
}
