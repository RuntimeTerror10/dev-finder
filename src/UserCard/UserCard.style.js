import styled from "styled-components";

export const StyledUserCard = styled.div`
  padding: 0.3rem 0.5rem;
  background: ${({ isDarkTheme }) => (isDarkTheme ? "#1E2748" : "#fff")};
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease-in-out;

  .userCard {
    margin: 0 10px;
  }
  .notFoundMsg {
    text-align: center;
    color: ${({ isDarkTheme }) => (isDarkTheme ? "#fff" : "#121d2e")};
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    margin: 50px 0;
  }
`;
