import styled from "styled-components";

export const StyledSearch = styled.form`
  display: flex;
  padding: 1rem;
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
    padding: 0.5rem 0;
    font-size: 1.15rem;
    color: ${({ formTheme }) => (formTheme ? "#fff" : "#121d2e")};
    outline: none;
    transition: all 0.25s ease-in-out;
  }
  .searchBtn {
    padding: 0.5rem 1rem;
    background: rgb(14, 104, 255);
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1.15rem;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      background: rgb(14, 80, 255);
    }
  }
`;
