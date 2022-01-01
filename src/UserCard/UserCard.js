import UserBasicInfo from "./BasicInfo/UserBasicInfo";
import GithubProfileInfo from "./GithubStats/GithubProfileInfo";
import CardFooter from "./CardFooter/CardFooter";
import { StyledUserCard } from "./UserCard.style";

function userCard({ userInfo, isDarkTheme }) {
  return (
    <>
      {userInfo == null ? (
        <div></div>
      ) : "id" in userInfo ? (
        <StyledUserCard isDarkTheme={isDarkTheme}>
          <div className="userCard">
            <UserBasicInfo user={userInfo} isDarkTheme={isDarkTheme} />
            <GithubProfileInfo user={userInfo} isDarkTheme={isDarkTheme} />
            <CardFooter user={userInfo} isDarkTheme={isDarkTheme} />
          </div>
        </StyledUserCard>
      ) : (
        <StyledUserCard isDarkTheme={isDarkTheme}>
          <div className="notFoundMsg">No User found :(</div>
        </StyledUserCard>
      )}
    </>
  );
}

export default userCard;
