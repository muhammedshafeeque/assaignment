import React from 'react';
import GraphicProgressBar from '../Graphic-Play/GraphicProgressBar';
import MusicTable from '../MusicTable/MusicTable';
import './midle.css'

function MidleSection() {
  return <div>
    
    <div className='graphic-image'>

    </div>
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
