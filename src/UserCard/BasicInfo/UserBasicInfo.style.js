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
    color: ${({ isDarkTheme }) => (isDarkTheme ? "#fff" : "#121d2e")};
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

  @media (max-width: 600px) {
    .userName {
      font-size: 1.4rem;
    }
    .userLogin,
    .joinedDate {
      font-size: 1rem;
    }
    .userProfileImage {
      width: 140px;
      height: 140px;
    }
  }

  @media (max-width: 370px) {
    .userProfileImage {
      width: 120px;
      height: 120px;
    }
  }
`;
