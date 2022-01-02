import { useState } from "react";
import { StyledSearch } from "./UserSearch.style";
import getUserInfo from "../getUserInfo";

function UserSearch({ onUserSearch, isDarkTheme }) {
  const [userSearch, setUserSearch] = useState("");

  const handleUserInput = (e) => {
    setUserSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserInfo(userSearch).then((data) => {
      onUserSearch(data);
    });
  };

  return (
    <StyledSearch onSubmit={handleSubmit} isDarkTheme={isDarkTheme}>
      <input
        className="userInput"
        type="search"
        placeholder="Enter Github username here..."
        onChange={handleUserInput}
      />
      <button className="searchBtn">Search</button>
    </StyledSearch>
  );
}

export default UserSearch;
