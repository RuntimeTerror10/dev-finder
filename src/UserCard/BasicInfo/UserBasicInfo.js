import { StyledUserBasicInfo } from "./UserBasicInfo.style";

function UserBasicInfo({ user, cardComponentTheme }) {
  const joinDateInfo = new Date(user.created_at);
  const joinDate = joinDateInfo.getDate();
  const joinMonth = joinDateInfo.toLocaleString("default", { month: "short" });
  const joinYear = joinDateInfo.getFullYear();

  return (
    <StyledUserBasicInfo componentTheme={cardComponentTheme}>
      <img
        className="userProfileImage"
        src={user.avatar_url}
        alt="user profile picture"
      />
      <div className="userDetails">
        <div>
          <h1 className="userName">{user.name}</h1>
          <a className="userLogin" href={user.html_url}>
            @{user.login}
          </a>
        </div>
        <h3 className="joinedDate">
          Joined {joinDate} {joinMonth} {joinYear}
        </h3>
      </div>
    </StyledUserBasicInfo>
  );
}

export default UserBasicInfo;
