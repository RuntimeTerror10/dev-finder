import styled from "styled-components";

const StyledWrapper = styled.div`
  .statHeading,
  .statFigure {
    font-size: 1.2rem;
    color: ${({ isDarkTheme }) => (isDarkTheme ? "#fff" : "#121d2e")};
    text-align: center;
    font-weight: bold;
    transition: all 0.25s ease-in-out;
  }
`;

function GithubStats({ statValue, statName, isDarkTheme }) {
  return (
    <StyledWrapper isDarkTheme={isDarkTheme}>
      <p className="statHeading">{statName}</p>
      <p className="statFigure">{statValue}</p>
    </StyledWrapper>
  );
}

export default GithubStats;
