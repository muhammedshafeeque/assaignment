import React from 'react';
import GraphicProgressBar from '../Graphic-Play/GraphicProgressBar';
import MusicTable from '../MusicTable/MusicTable';
import './midle.css'
import grafic from '../../Asset/1.png'

function MidleSection() {
  return <div>
    
    <img src={grafic} className='graphic-image' alt="" />
      
    <GraphicProgressBar/>
    <div className="comment-header">
      <div className="comant-list-button">
        <p>Show Comments</p>
      </div>
    </div>
    <MusicTable/>


  </div>;
}

export default MidleSection;
