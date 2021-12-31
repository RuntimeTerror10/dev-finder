import styled from "styled-components";

export const StyledGithubProfileInfo = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 35px 0;
  width: 100%;

  .userBio {
    color: ${({ componentTheme }) => (componentTheme ? "#fff" : "#121d2e")};
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    transition: all 0.25s ease-in-out;
  }

  .statsContainer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: ${({ componentTheme }) =>
      componentTheme ? "#121d2e" : "#ddedf0"};
    border-radius: 10px;
    margin: 30px 0;
    transition: all 0.25s ease-in-out;
  }
`;
