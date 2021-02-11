import { useState } from "react"
import { Button, Avatar } from "@material-ui/core"

import db from "../../firebase"

import "./TweetBox.scss"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = event => {
    event.preventDefault()
    db.collection("posts").add({
      displayName: "Mahdi Zoraghi",
      username: "mahdi_zoraghi",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQH9wqgzewDEXw/profile-displayphoto-shrink_200_200/0/1606933512586?e=1616025600&v=beta&t=PdpPyOH6D8uuRCVXQQemeqUWAZ5Y74V9L7SAxwaa7uU",
    })
    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH9wqgzewDEXw/profile-displayphoto-shrink_200_200/0/1606933512586?e=1616025600&v=beta&t=PdpPyOH6D8uuRCVXQQemeqUWAZ5Y74V9L7SAxwaa7uU" />
          <input
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
            onChange={e => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
