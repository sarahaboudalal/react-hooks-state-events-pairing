import React from 'react'

export default function Comments({comments}) {
  return (
      <div>
        <hr/>
          <h1>{comments.length} Comments</h1>
          {comments.map((comment) => {
              return (
                  <div key={comment.id}>
                    <h3>{comment.user}</h3>
                    <p>{comment.comment}</p>
                  </div>
              )
          })}
      </div>
  )
}
