import React, { useState } from 'react'

export default function Votes({ upVotes, downVotes }) {

    const [up, setUp] = useState(upVotes)
    const [down, setDown] =useState(downVotes)

    const handleUpVotes = () => {
        setUp(up+1)
    }

    const handleDownVotes = () => {
        setDown(down+1)
    }
  return (
      <div>
          <button onClick={handleUpVotes}>{up}👍</button>
          <button onClick={handleDownVotes}>{down}👎</button>
      </div>
  )
}
