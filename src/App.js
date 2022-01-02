import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { StyledContainer } from "./App.styled";
import Header from "./Header/Header";
import UserSearch from "./UserSearch/UserSearch";
import UserCard from "./UserCard/UserCard";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const handleThemeChange = (isThemeDark) => {
    setIsDarkMode(isThemeDark);
  };

  const getUserInfo = (userInfo) => {
    setUserInfo(userInfo);
  };

  return (
    <StyledContainer isDarkTheme={isDarkMode}>
      <Helmet>
        <title>DevFinder</title>
      </Helmet>
      <div className="App">
        <Header onThemeChange={handleThemeChange} />
        <UserSearch onUserSearch={getUserInfo} isDarkTheme={isDarkMode} />
        <UserCard userInfo={userInfo} isDarkTheme={isDarkMode} />
      </div>
    </StyledContainer>
  );
}

export default App;
