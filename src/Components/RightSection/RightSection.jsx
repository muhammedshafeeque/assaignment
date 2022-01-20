import React from 'react';
import ProfileHistory from '../Profile-History/ProfileHistory';
import './right.css'
import grafics from '../../Asset/2.png'
function RightSection() {
  return <div>
      <img src={grafics} className="top-animated-image" alt="" />
      <ProfileHistory/>
  </div>;
}

export default RightSection;
