import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .footerElement {
    margin: 15px 0;
  }
  .footerElement span,
  .userLink {
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    transition: all 0.25s ease-in-out;
  }
  .cardIcon {
    transition: all 0.25s ease-in-out;
  }
  .userLink,
  span {
    position: relative;
    bottom: 5px;
    left: 5px;
  }
  .userLink {
    color: rgb(14, 144, 255);
  }
  @media (max-width: 600px) {
    .footerElement span,
    .userLink {
      font-size: 1rem;
    }
  }
`;
