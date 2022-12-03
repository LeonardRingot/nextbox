import React from 'react'
import Style from '../styles/AudioPlayer.module.css'

export default function AudioPlayer({music, setPlay}) {

  return (
    <>
     <audio src={music != undefined ? `assets/musics/${music}` : ''} controls onPause={() => setPlay(false)} onPlay={() => setPlay(true)} className={Style.audio} autoPlay></audio>
    </>
  )
}