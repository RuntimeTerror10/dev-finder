async function getUserInfo(query) {
  const url = `https://api.github.com/users/${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default getUserInfo;
