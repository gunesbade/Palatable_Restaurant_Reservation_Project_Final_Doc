import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Randomcode() {
  return (
    <div>
        <body>
<div class="content">
    <h1 class="sub-title">Reservation Confirmed</h1>
    <p class="reservation-message">Your reservation code is <span id="reservation-code">#XXXXXX</span></p>
    <button class="btn" type="submit"><li><Link to="/">Return Home</Link></li></button>
</div>


</body>
    </div>
  )
}

export default Randomcode;