import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
  font-family: "Roboto", sans-serif;

  .themeIcon {
    transition: all 0.25s ease-in-out;
  }

  .header {
    font-size: 2.3rem;
    color: ${({ appTheme }) => (appTheme ? "#fff" : "#121d2e")};
    transition: all 0.25s ease-in-out;
  }

  .themeBtn {
    background: transparent;
    border: none;
    transition: all 0.25s ease;
  }
  @media (max-width: 600px) {
    .header {
      font-size: 2rem;
    }
  }
`;
