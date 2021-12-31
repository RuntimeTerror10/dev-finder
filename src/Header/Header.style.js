import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  font-family: "Roboto", sans-serif;

  .themeIcon {
    transition: all 0.25s ease-in-out;
  }

  .header {
    font-size: 2.7rem;
    color: ${({ appTheme }) => (appTheme ? "#fff" : "#121d2e")};
    transition: all 0.25s ease-in-out;
  }

  .themeBtn {
    background: transparent;
    border: none;
    transition: all 0.25s ease;
  }
`;
