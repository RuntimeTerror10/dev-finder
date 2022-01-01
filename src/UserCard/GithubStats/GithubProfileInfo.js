import { StyledGithubProfileInfo } from "./GithubProfileInfo.style";
import GithubStats from "./GithubStats";

function GithubProfileInfo({ user, isDarkTheme }) {
  return (
    <StyledGithubProfileInfo isDarkTheme={isDarkTheme}>
      <p className="userBio">{user.bio}</p>
      <div className="statsContainer">
        <GithubStats
          statName="Repos"
          statValue={user.public_repos}
          isDarkTheme={isDarkTheme}
        />
        <GithubStats
          statName="Followers"
          statValue={user.followers}
          isDarkTheme={isDarkTheme}
        />
        <GithubStats
          statName="Following"
          statValue={user.following}
          isDarkTheme={isDarkTheme}
        />
      </div>
    </StyledGithubProfileInfo>
  );
}

export default GithubProfileInfo;
