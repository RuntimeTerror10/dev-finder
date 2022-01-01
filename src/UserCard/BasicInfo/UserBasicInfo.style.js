import styled from "styled-components";

export const StyledUserBasicInfo = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;

  .userProfileImage {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  .userName,
  .userLogin,
  .joinedDate {
    margin: 0;
    padding: 0;
    transition: all 0.25s ease-in-out;
  }

  .userDetails {
    display: flex;
    justify-content: space-around;
    align-self: center;
    flex: 1;
    flex-wrap: wrap;
  }
  .userName,
  .joinedDate {
    color: ${({ componentTheme }) => (componentTheme ? "#fff" : "#121d2e")};
  }

  .userLogin,
  .joinedDate {
    font-size: 1.2rem;
  }

  .userName {
    font-size: 2rem;
  }

  .userLogin {
    text-decoration: none;
    color: rgb(14, 104, 255);
  }
  .joinedDate {
    margin-top: 1rem;
  }
`;
