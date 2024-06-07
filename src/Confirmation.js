import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Confirmation() {
  return (
    <div>
 
        <body>
<section class="booking1" id="booking1">

    <div class="title">
        <img src="./images/yellow%20wave.png" alt="" />
        <p>BOOKING TABLE</p>
        <img src="./images/yellow%20wave.png" alt="" />
    </div>
    <p class="sub-title">
        You can complete the booking process by confirming the table you chose.
    </p>
    
    <div class="sub-title">
        <p class="input-label">Confirm your table number...</p>
        <div class="input-i">
            <select name="table-number" class="input-field">
                <option value="1">Table 1</option>
                <option value="2">Table 2</option>
                <option value="3">Table 3</option>
                <option value="4">Table 4</option>
                <option value="5">Table 5</option>
                <option value="6">Table 6</option>
                <option value="7">Table 7</option>
                <option value="8">Table 8</option>
                <option value="9">Table 9</option>
                <option value="10">Table 10</option>
                <option value="11">Table 11</option>
                <option value="12">Table 12</option>
            </select>
        </div>
    </div>
    
    <form>
        <div class="sub-title">
            <div class="input-label">
                <p>Confirm number of people...</p>
                <div class="input-i">
                    <select name="rating" class="input-field">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
            </div>
        </div>
        <button class="btn" type="submit"><li><Link to="/randomcode">Submit</Link></li></button>
    </form>
</section>
</body>
    </div>
  )
}

export default Confirmation;