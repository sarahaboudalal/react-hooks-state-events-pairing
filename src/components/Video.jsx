import React from 'react'
import video from '../data/video'

export default function Video() {
  return (
      <div>
          <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            title={video.title}
            allowFullScreen
          />
      </div>
  )
}
