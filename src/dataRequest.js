const sendRequest = (username) => {
  const apiUrl = `https://api.github.com/users/${username}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export default sendRequest;
