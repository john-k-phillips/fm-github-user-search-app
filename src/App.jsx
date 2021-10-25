import React, { useState, useEffect } from 'react';

import Navbar from './components/header/Navbar';
import SearchBar from './components/header/SearchBar';
import ProfileCard from './components/main/ProfileCard';

import requestData from './dataRequest';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    requestData(userInput, setUserData);
  }, [userInput]);

  document.body.style.backgroundColor = isDarkMode ? '#141D2F' : '#F6F8FF';
  document.body.style.height = '100vh';
  document.body.style.height = '100vh';
  document.body.style.display = 'grid';
  document.body.style.placeItems = 'center';

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} setTheme={setIsDarkMode} />
      <SearchBar isDarkMode={isDarkMode} setUserInput={setUserInput} />
      {userData.message === 'Not Found' ? '' : <ProfileCard userData={userData} isDarkMode={isDarkMode} />}
    </div>
  );
}
