import { useState } from "react";
import { StyledHeader } from "./Header.style";
import Icon from "@mdi/react";
import { mdiWeatherSunny } from "@mdi/js";
import { mdiMoonWaxingCrescent } from "@mdi/js";

function Header({ onThemeChange }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    if (isDarkMode) {
      onThemeChange(false);
      setIsDarkMode(false);
    } else {
      onThemeChange(true);
      setIsDarkMode(true);
    }
  };

  return (
    <StyledHeader appTheme={isDarkMode}>
      <h1 className="header">DevFinder</h1>
      <div>
        <button className="themeBtn" onClick={handleThemeChange}>
          {isDarkMode ? (
            <Icon
              className="themeIcon"
              path={mdiWeatherSunny}
              title="Change Theme"
              size={1.5}
              cursor="pointer"
              color="#F8F0E3"
            />
          ) : (
            <Icon
              className="themeIcon"
              path={mdiMoonWaxingCrescent}
              title="Change Theme"
              size={1.5}
              cursor="pointer"
              color="#121d2e"
            />
          )}
        </button>
      </div>
    </StyledHeader>
  );
}

export default Header;
