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
            <li><Link to="/menu">Menu</Link></li>
            </div>
            <div className='left-links'>
            <li><Link to="/gallery">Gallery</Link></li>
            </div>
            <a class="logo">
            <li><Link to="/"><img src="images/palatable_main_logo.png" alt="" /></Link></li>
            </a>

            <div className='right-links'>
            <li><Link to="/booking">Booking</Link></li>
            </div>
            <div className='right-links'>
            <li><Link to="/feedback">Feedback</Link></li>
            </div>
            <div className='right-links'>
            <li><Link to="/contact">Contact</Link></li>
            </div>
            <div className='right-links'>
            <li><Link to="/sign">Sign</Link></li>
            </div>
        </nav></header>
        
    </div>
  )
}

export default Navbar;