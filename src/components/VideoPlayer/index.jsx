import indexStyle from './styles.module.css'
import React, { useRef, useState } from 'react'

const SRC = 'videos/comida.mp4'

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }

    setPlaying(!playing)
  }
  return (
    <div>
      <video className={indexStyle.video}
        src={SRC}
        controls = {false}
        autoPlay
        loop
        muted
        ref={video}
        onError={(e) => console.error('Error al cargar el video', e)}
      />
      <button className={indexStyle.player} onClick={handlePlay}></button>
    </div>

  )
}
