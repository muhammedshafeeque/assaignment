import React from 'react';
import './Profile-history.css'
function ProfileHistory() {
  return <div className="file-history">
        
            <p className="history-header">File History</p> 
          
          <div className='history-body' >
                <div className="left-part">
                    <p className="history-sub-head">Date added</p>
                    <p className="history-value">01/10/21</p>
                    <p className="history-sub-head"># Of Merges</p>
                    <p className="history-value">0</p>
                    <p className="history-sub-head">Of Downloads</p>
                    <p className="history-value">3</p>
                    <p className="history-sub-head">File Type</p>
                    <p className="history-value">MP3</p>
                </div>
                <div className="right-part">
                <p className="history-sub-head">Date added</p>
                    <p className="history-value">01/10/21</p>
                    <p className="history-sub-head">Date added</p>
                    <p className="history-value">01/10/21</p>
                    <p className="history-sub-head">Date added</p>
                    <p className="history-value">01/10/21</p>
                </div>
          </div>
  </div>;
}

export default ProfileHistory;
