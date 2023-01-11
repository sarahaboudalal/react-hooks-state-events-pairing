import React from 'react'
import video from "../data/video"
import Comments from './Comments'
import Votes from './Votes'

export default function Details() {
  return (
      <div>
          <h1>{video.title}</h1>
          <p>{video.views} Views | Uploaded {video.createdAt}</p>
          <Votes upVotes={video.upvotes} downVotes={video.downvotes} />
          <Comments comments={video.comments}/>
      </div>
  )
}
