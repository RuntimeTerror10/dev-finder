import styled from "styled-components";

export const StyledGithubProfileInfo = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 30px 0;
  width: 100%;

  .userBio {
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
    transition: all 0.25s ease-in-out;
  }

  .statsContainer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: ${({ isDarkTheme }) => (isDarkTheme ? "#121d2e" : "#ddedf0")};
    border-radius: 10px;
    margin: 25px 0;
    transition: all 0.25s ease-in-out;
  }
`;
