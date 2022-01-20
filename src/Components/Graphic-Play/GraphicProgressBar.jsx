import React from 'react';
import './graphic.css'
import { BiComment } from 'react-icons/bi'
import grafic from '../../Asset/3.png'
function GraphicProgressBar() {
  return <div className="music-play-graphic-div">
    
    <div className="finished-text-div">
      <p className='finished-time'>00.00</p>

    </div>
    <img src={grafic} className="music-graphic-area" alt="" />
    <div className="comment-circle">
      <BiComment className='comment-icon' />
    </div>
    <div className="finished-text-div">
      <p className='finished-time'>01.57</p>

    </div>

  </div>;
}

export default GraphicProgressBar;
