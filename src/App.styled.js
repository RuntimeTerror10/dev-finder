import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme ? "#121d2e" : "#ddedf0"};
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  transition: all 0.25s ease;

  .App {
    max-width: 800px;
    min-width: 450px;
    width: 80%;
    margin: 0 auto;
    transition: all 0.25s ease;
  }
`;
