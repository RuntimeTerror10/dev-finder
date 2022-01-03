import styled from "styled-components";

export const StyledUserCard = styled.div`
  padding: 1.3rem;
  background: ${({ isDarkTheme }) => (isDarkTheme ? "#1E2748" : "#fff")};
  color: ${({ isDarkTheme }) => (isDarkTheme ? "#F8F0E3" : "#121d2e")};
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease-in-out;

  .notFoundMsg {
    text-align: center;
    color: ${({ isDarkTheme }) => (isDarkTheme ? "#fff" : "#121d2e")};
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    margin: 50px 0;
  }
`;
