import React from 'react';
import './Sidebar.css'
import {AiOutlineHome,
  AiFillStar,AiOutlinePlus} from 'react-icons/ai'
import {ImFilesEmpty,ImLoop} from 'react-icons/im'
import {FaRegFolder} from 'react-icons/fa' 
import {MdQueueMusic}from 'react-icons/md' 
import {BsMic,BsUpload,BsMusicNoteList,BsFillMusicPlayerFill,BsPencilSquare} from 'react-icons/bs'
import {BiCrop} from 'react-icons/bi'
 
function Sidebar() {

  return <div className='Sidebar'>
      <div className="side-bar-logo">
          <img src="" className='logo' alt="" />
      </div>
      <div className="sidebar-home">
          <AiOutlineHome className='icons'/>
          <p>Home</p>
      </div>
      <div className="sidebar-item">
      <ImFilesEmpty className='icons'/>
          <p>Files</p>
      </div>
      <div className="sidebar-item">
      <FaRegFolder className='icons'/>
          <p>Folders</p>
      </div>
      <div className="sidebar-item">
      <MdQueueMusic className='icons'/>
          <p>Traklist</p>
      </div>
      
      <div className="sidebar-item">
      <BsMic className='icons'/>
          <p>Sessions</p>
      </div>
      
      <div className="sidebar-item">
      <AiFillStar className='icons'/>
          <p>Favorites</p>
      </div>
      <hr/>
      <div className="sidebar-item">
      <BsUpload className='icons'/>
          <p>Upload</p>
      </div>
      <div className="sidebar-item">
      <AiOutlinePlus className='icons'/>
          <p>New Folder</p>
      </div>
      <div className="sidebar-item">
      <BsMusicNoteList className='icons'/>
          <p>New Traklist</p>
      </div>
      <div className="sidebar-item">
      <BsFillMusicPlayerFill className='icons'/>
          <p>New Session</p>
      </div>
      <hr/> 
      <div className="sidebar-item">
      <ImLoop className='icons'/>
          <p>Loop</p>
      </div>
      <hr/> 
      <div className="sidebar-item">
      < div className='icons'/>
          <p>Compare</p>
      </div>
      <hr/> 
      <div className="sidebar-item">
      <BiCrop className='icons'/>
          <p>Crop</p>
      </div>
      <hr/> 
      <div className="sidebar-item">
      <BsPencilSquare className='icons'/>
          <p>Comment</p>
      </div>
      
      
      
      
      
      

  </div>
}

export default Sidebar;
