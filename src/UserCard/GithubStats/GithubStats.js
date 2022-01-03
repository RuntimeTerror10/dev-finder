import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 20px;
  .statHeading,
  .statFigure {
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
  }
  .statFigure {
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    .statHeading,
    .statFigure {
      font-size: 1rem;
    }
  }
`;

function GithubStats({ statValue, statName, isDarkTheme }) {
  return (
    <StyledWrapper isDarkTheme={isDarkTheme}>
      <div className="statHeading">{statName}</div>
      <div className="statFigure">{statValue}</div>
    </StyledWrapper>
  );
}

export default GithubStats;
