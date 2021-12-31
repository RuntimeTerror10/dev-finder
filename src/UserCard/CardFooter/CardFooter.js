import Icon from "@mdi/react";
import { mdiLinkVariant } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiOfficeBuilding } from "@mdi/js";
import { StyledFooter } from "./CardFooter.style";

function CardFooter({ user, cardComponentTheme }) {
  return (
    <StyledFooter componentTheme={cardComponentTheme}>
      <div className="cardFooterLeft">
        <div className="footerElement">
          <Icon className="cardIcon" path={mdiLinkVariant} size={1.3} />
          {!user.blog ? (
            <span>Unavailable</span>
          ) : (
            <a className="userLink" href={user.blog}>
              {user.blog}
            </a>
          )}
        </div>
        <div className="footerElement">
          <Icon className="cardIcon" path={mdiMapMarker} size={1.3} />
          <span>{!user.location ? "unavailable" : user.location}</span>
        </div>
      </div>
      <div className="cardFooterRight">
        <div className="footerElement">
          <Icon className="cardIcon" path={mdiTwitter} size={1.3} />
          <a
            href={`https://twitter.com/${user.twitter_username}`}
            target="__blank"
            className="userLink"
          >
            {!user.twitter_username ? "unavailable" : user.twitter_username}
          </a>
        </div>
        <div className="footerElement">
          <Icon className="cardIcon" path={mdiOfficeBuilding} size={1.3} />
          <span>{!user.company ? "Unavailable" : user.company}</span>
        </div>
      </div>
    </StyledFooter>
  );
}

export default CardFooter;
