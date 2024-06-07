import React from 'react'
import { Link } from "react-router-dom";
import './style.css';

function Navbar() {
  return (
    <div className='navbar'>
        <header><nav>
            <div className='left-links'>
            <li><Link to="/aboutus">About Us</Link></li>
            </div>
            <div className='left-links'>
            <li><Link to="/aboutus">Menu</Link></li>
            </div>
            <div className='left-links'>
            <li><Link to="/aboutus">Gallery</Link></li>
            </div>
            <a class="logo">
            <img src="images/palatable_main_logo.png" alt="" />
            </a>

            <div className='right-links'>
            <li><Link to="/aboutus">Booking</Link></li>
            </div>
            <div className='right-links'>
            <li><Link to="/aboutus">Feedback</Link></li>
            </div>
            <div className='right-links'>
            <li><Link to="/aboutus">Contact</Link></li>
            </div>
            <div className='right-links'>
            <li><Link to="/aboutus">Sign</Link></li>
            </div>
        </nav></header>
        
    </div>
  )
}

export default Navbar;