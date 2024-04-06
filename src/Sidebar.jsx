import React, {useState, useEffect} from 'react'
import {FaHome, FaFacebook, FaTwitter, FaBehance, FaLinkedin} from 'react-icons/fa'
import { ImFolderOpen } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import 'bootstrap/dist/css/bootstrap.css';
import {AiOutlineTeam, AiOutlineUnorderedList,AiOutlineClose } from "react-icons/ai";
import { IoDiamond } from "react-icons/io5";

import { Link } from 'react-router-dom';

import './Sidebar.css';


function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsSidebarOpen(!isSidebarOpen);
    }

const closeSidebar = () =>{
  setIsSidebarOpen(!isSidebarOpen);
}

useEffect(() => {
  const handleBodyClick = (event) => {
            if (isSidebarOpen && !event.target.closest('.side-bar-container-1')) {
          closeSidebar();
      }
  };

    document.body.addEventListener('click', handleBodyClick);
  return () => {
      document.body.removeEventListener('click', handleBodyClick);
  };
}, [isSidebarOpen]);


  return (
    <div>
      <div>
{!isSidebarOpen && <button className='sidebar-toggle' onClick={toggleSidebar}><AiOutlineUnorderedList /></button>}
</div>
<div>
    {isSidebarOpen ? (
      <div className='side-bar-container-1'>
      <div className='side-bar-container-2'>
        <div className="sidebar-title-content">
        <ul>
          <li>
        <Link exact to="/" className='sidebar-container-top'>Coding  <span className='addict-color'>Addict</span> <span className='close-card-2' onClick={closeSidebar}> <AiOutlineClose /></span></Link>
        </li>
        </ul>
        </div>
      <div  className='sidebar-container-middle'>
        <ul className='sidebar-container-middle-2'>
                        <li><Link exact to="/" > <FaHome /> <span>Home</span></Link></li>
        <li><Link to="/team" ><AiOutlineTeam /> <span>Team</span></Link></li>
        <li><Link to="/projects" ><ImFolderOpen /> <span>Projects</span></Link></li>
        <li><Link to="/calender" ><SlCalender /> <span>Calender</span></Link></li>
        <li><Link to="/documents" ><LiaFileInvoiceSolid /> <span>Documents</span></Link></li>
      </ul>
      </div>
      </div>
      <div  className='sidebar-container-bottom'>
        <a href="https://facebook.com">            <FaFacebook />         </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedin />
        </a>
        <a href="https://behance.net/">
                 <FaBehance />
        </a>
        <a href="https://uxwing.com/">
        <IoDiamond />
        </a>
      </div>
      </div>
      ): ''}
      </div>
      
    </div>
  )
}

export default Sidebar