import UserBasicInfo from "./BasicInfo/UserBasicInfo";
import GithubProfileInfo from "./GithubStats/GithubProfileInfo";
import CardFooter from "./CardFooter/CardFooter";
import { StyledUserCard } from "./UserCard.style";

function userCard({ userInfo, appTheme }) {
  return (
    <>
      {userInfo == null ? (
        <div></div>
      ) : "id" in userInfo ? (
        <StyledUserCard cardTheme={appTheme}>
          <div className="userCard">
            <UserBasicInfo user={userInfo} cardComponentTheme={appTheme} />
            <GithubProfileInfo user={userInfo} cardComponentTheme={appTheme} />
            <CardFooter user={userInfo} cardComponentTheme={appTheme} />
          </div>
        </StyledUserCard>
      ) : (
        <StyledUserCard cardTheme={appTheme}>
          <div className="notFoundMsg">No User found :(</div>
        </StyledUserCard>
      )}
    </>
  );
}

export default userCard;
