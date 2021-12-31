import styled from "styled-components";

const StyledWrapper = styled.div`
  .statHeading,
  .statFigure {
    font-size: 1.5rem;
    color: ${({ statTheme }) => (statTheme ? "#fff" : "#121d2e")};
    text-align: center;
    font-weight: bold;
    transition: all 0.25s ease-in-out;
  }
`;

function GithubStats({ statValue, statName, componentTheme }) {
  return (
    <StyledWrapper statTheme={componentTheme}>
      <p className="statHeading">{statName}</p>
      <p className="statFigure">{statValue}</p>
    </StyledWrapper>
  );
}

export default GithubStats;
