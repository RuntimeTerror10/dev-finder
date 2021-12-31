import styled from "styled-components";

export const StyledSearch = styled.form`
  width: 100%;
  display: flex;
  padding: 1.3rem 1rem;
  justify-content: space-between;
  background: ${({ formTheme }) => (formTheme ? "#1E2748" : "#fff")};
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease-in-out;

  .userInput {
    background: transparent;
    border: none;
    margin-right: 10px;
    flex: 1;
    padding: 1rem 0rem;
    font-size: 1.4rem;
    color: ${({ formTheme }) => (formTheme ? "#fff" : "#121d2e")};
    outline: none;
    transition: all 0.25s ease-in-out;
  }
  .searchBtn {
    padding: 0.5rem 3rem;
    background: rgb(14, 104, 255);
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      background: rgb(14, 80, 255);
    }
  }
`;
