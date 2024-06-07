import React from 'react';
import { Link } from "react-router-dom";


function Booking() {
  return (
    <div>
        

        <section class="booking" id="booking">
    <div class="title">
        <img src="./images/yellow%20wave.png" alt="" />
        <p>BOOKING</p>
        <img src="./images/yellow%20wave.png" alt="" />
    </div>
    <p class="sub-title">
   
        Booking request +90-123-4567890 or fill the booking form.
    </p>
    <form action="creditcardinfo.html" method="GET">
        <div class="first">
            <div class="input">
                <p>Your full name?</p>
                <input type="text" placeholder="Write your name here..." />
            </div>
            <div class="input">
                <p>Your email address?</p>
                <input type="email" placeholder="Write your email here..." />
            </div>
        </div>
        <div class="mid">
            <div class="input">
                <p>How many people?</p>
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
                    <i class='bx bxs-down-arrow'></i>
                </div>
            </div>
            <div class="input">
                <p>What time?</p>
                <div class="input-i">
                    <input type="time" />
                </div>
            </div>
        </div>
        <div class="last">
            <div class="input">
                <p>What is the date?</p>
                <div class="input-i">
                    <input type="date" />
                </div>
            </div>
            <div class="input">
                <p>Your phone number?</p>
                <input type="tel" placeholder="Write your number here..." />
            </div>
        </div>
        <button class="btn" type="submit"><li><Link to="/creditcard">Submit</Link></li></button>
    </form>
</section>
    </div>
  )
}

export default Booking;