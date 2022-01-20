import React from 'react';
import Music from '../music/Music';
import './Footer.css'
import { AiOutlineStar } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import MusicControle from '../Music-Controle/MusicControle';
import { ImShare } from 'react-icons/im'
function Footer() {
    return <div className='footer'>
        {/* footer left side area */}
        <div className="footer-left-area">
            <Music />
            <p>Song Name</p>
            <AiOutlineStar className='footer-favorite-icon' />
            <BiComment className='footer-icon' />
        </div>
        {/* end */}

        {/* music controle area */}
        <div className="music-controles">
            <MusicControle />
        </div>
        {/* end */}
        <div className="footer-right-area">
            <ImShare className='share-icon' />
            <p>Share</p>
        </div>

    </div>;
}

export default Footer;
