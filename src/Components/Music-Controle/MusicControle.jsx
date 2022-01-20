import React, { useState } from 'react';
import './music-controle.css'
import { MdRotateLeft, MdRotateRight } from 'react-icons/md'
import { TiArrowShuffle } from 'react-icons/ti'
import { AiFillStepBackward, AiOutlinePauseCircle, AiFillStepForward } from 'react-icons/ai'
import { ImLoop } from 'react-icons/im'
function MusicControle() {
  const [time,setTime]=useState(0)
  return <div className='music-controle-system'>
    <div className="controle-top">
      {/* music controle icons  */}
      <div className="controle-icons">
        <MdRotateLeft className='playback-icon' />
        <TiArrowShuffle className='shuffle' />
        <AiFillStepBackward className='back-and-forword' />
        <AiOutlinePauseCircle className='pause-button' />
        <AiFillStepForward className='back-and-forword' />
        <ImLoop className='lopp-icon' />
        <MdRotateRight className='playback-icon' />
      </div>
      {/* end */}
    </div>
    {/* music input  */}
    <div className="input-controles">
      <p>{time/100}</p>
      <input onChange={(e)=>{
        setTime(e.target.value)
      }} className='music-input' min="0" max="408" type="range" />
      <p>{(408-time)/100}</p>
    </div>
    {/* end  */}
  </div>
}

export default MusicControle;
