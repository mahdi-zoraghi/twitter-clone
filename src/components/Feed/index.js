import { useState, useEffect } from "react"
import FlipMove from "react-flip-move"

import TweetBox from "../TweetBox"
import Post from "../Post"

import db from "../../firebase"

import "./Feed.scss"

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => doc.data()))
    )
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map(
          ({ displayName, username, verified, text, avatar, image }, i) => (
            <Post
              key={i}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              avatar={avatar}
              image={image}
            />
          )
        )}
      </FlipMove>
    </div>
  )
}

export default Feed
