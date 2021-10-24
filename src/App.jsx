import React, { useState } from 'react';

import Navbar from './components/header/Navbar';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  document.body.style.backgroundColor = isDarkMode ? '#1E2A47' : '#F6F8FF';

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} setTheme={setIsDarkMode} />
    </div>

  );
}
