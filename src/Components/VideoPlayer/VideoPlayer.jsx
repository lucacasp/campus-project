import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video-1.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = () => {
      setPlayState(false)
    }
  return (
    <div className={`video-player ${playState?'':'hide'}`}>
      <video src={video} autoPlay muted controls></video>
      <div className="close-btn" onClick={closePlayer}>Chiudi</div>
    </div>
  )
}

export default VideoPlayer
