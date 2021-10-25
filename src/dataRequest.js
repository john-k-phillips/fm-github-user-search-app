const sendRequest = (username, setUserData) => {
  const apiUrl = `https://api.github.com/users/${username}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line
      console.log(data);
      setUserData(data);
    });
};

export default sendRequest;
