import styled from "styled-components";

export const StyledUserCard = styled.div`
  width: 100%;
  padding: 1.3rem 1rem;
  background: ${({ cardTheme }) => (cardTheme ? "#1E2748" : "#fff")};
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease-in-out;

  .userCard {
    margin: 0 10px;
  }
  .notFoundMsg {
    text-align: center;
    color: ${({ cardTheme }) => (cardTheme ? "#fff" : "#121d2e")};
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    margin: 50px 0;
  }
`;
