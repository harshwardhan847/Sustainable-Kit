import React from 'react';
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineShop} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import './style.scss'
const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <ul className="nav-items">
            <li className="nav-item"><AiOutlineHome/></li>
            <li className="nav-item"><AiOutlineShop/></li>
            <li className="nav-item"><AiOutlinePhone/></li>
        </ul>
      
    </div>
  )
}

export default Navbar
