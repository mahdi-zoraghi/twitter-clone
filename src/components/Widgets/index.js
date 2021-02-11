import { Search as SearchIcon } from "@material-ui/icons"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed"

import "./Widgets.scss"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId="1353296490010185728" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="NetflixDE"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url="https://facebook.com/netflix"
          options={{ text: "#react.js is awesome", via: "mahdi-zoraghi" }}
        />
      </div>
    </div>
  )
}

export default Widgets
