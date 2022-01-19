import React from 'react';
import './table.css'
import { HiAdjustments } from 'react-icons/hi'
import { FiCopy, FiSearch } from 'react-icons/fi'
import { CgArrowTopRight } from 'react-icons/cg'
import { MdDelete } from 'react-icons/md'
import { HiMusicNote } from 'react-icons/hi'
import {BiDotsVerticalRounded} from 'react-icons/bi'
function MusicTable() {
  return <div>
    <div className="table-navbar">
      <div className="sort">
        <p>Sort By</p>
        <select className='sort-select' name="cars" id="cars" />

      </div>
      <div className="sort">
        <p>Filters </p>
        <HiAdjustments className='filter' />

      </div>
      <div className="manage-area">
        <FiCopy className='manage-icon' />
        <CgArrowTopRight className='manage-icon' />
        <MdDelete className='manage-icon' />
      </div>
      <div className="search-section">
        <FiSearch className='manage-icon' />
      </div>



    </div>
    <table >
      <thead>
        <tr>
          <th>TITLE</th>
          <th>DATE ADDED</th>
          <th># OF SHARES</th>
          <th>FOLDER</th>
          <th>DURATION.BP</th>
        </tr>

      </thead>

      <tbody>
        <tr>

          <td> <div className='table-first-coloum'>
            <div className="music-icondiv">
              <HiMusicNote className='music-icon' />
            </div><p>Song name</p> </div></td>
          <td>  jan 25 2021</td>
          <td>20 shares</td>
          <td>Planet her</td>
          <td>312.128 BPM</td>
          <td><BiDotsVerticalRounded/></td>
        </tr>
        <tr>

          <td> <div className='table-first-coloum'>
            <div className="music-icondiv">
              <HiMusicNote className='music-icon' />
            </div><p>Song name</p> </div></td>
          <td>  jan 25 2021</td>
          <td>20 shares</td>
          <td>Planet her</td>
          <td>312.128 BPM</td>
          <td><BiDotsVerticalRounded/></td>
        </tr>

      </tbody>


    </table>
  </div>;
}

export default MusicTable;
