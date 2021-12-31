import { StyledGithubProfileInfo } from "./GithubProfileInfo.style";
import GithubStats from "./GithubStats";

function GithubProfileInfo({ user, cardComponentTheme }) {
  return (
    <StyledGithubProfileInfo componentTheme={cardComponentTheme}>
      <p className="userBio">{user.bio}</p>
      <div className="statsContainer">
        <GithubStats
          statName="Repos"
          statValue={user.public_repos}
          componentTheme={cardComponentTheme}
        />
        <GithubStats
          statName="Followers"
          statValue={user.followers}
          componentTheme={cardComponentTheme}
        />
        <GithubStats
          statName="Following"
          statValue={user.following}
          componentTheme={cardComponentTheme}
        />
      </div>
    </StyledGithubProfileInfo>
  );
}

export default GithubProfileInfo;
