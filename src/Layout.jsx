import React, { useState } from 'react'
import {AiOutlineClose } from "react-icons/ai";
import './Sidebar.css'

function Layout() {
const [isShowmodalOpen, setIsShowmodalOpen] = useState(false);

const handleShowmodal=()=>{
  setIsShowmodalOpen(!isShowmodalOpen);
}

const closeSidebar = () =>{
  setIsShowmodalOpen(!isShowmodalOpen);
}

  return (
    <div>
      <div>
      {!isShowmodalOpen && 
      <button onClick={handleShowmodal} className='show-modal-card'>
      Show modal
      </button>
}
      </div>
      <div>
{isShowmodalOpen ? (
  <button className='show-modal-card-child'>Modal content <span className='close-card' onClick={closeSidebar}> <AiOutlineClose /></span></button>
  ): ''
} 
</div>
    </div>
  )
}

export default Layout