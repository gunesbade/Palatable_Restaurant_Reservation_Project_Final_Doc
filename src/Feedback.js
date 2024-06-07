import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import './style.css';

function Feedback() {
  return (
    <div>
        <Navbar></Navbar>
        <section class="feedback" id="feedback">
    <div class="title">
        <img src="./images/yellow%20wave.png" alt="" />
        <p>FEEDBACK</p>
        <img src="./images/yellow%20wave.png" alt="" />
    </div>
    <p class="sub-title2">
        "We value your opinion! Kindly rate your experience with us from 1 to 5."
    </p>
    <form action="" class="form-left">
        <div class="first">
            <div class="input">
                <p>Your full name?</p>
                <input type="text" placeholder="Write your name here..." autocomplete="off" class="input-field2" />
            </div>
            <div class="input">
                <p>Your email address?</p>
                <input type="email" placeholder="Write your email here..." autocomplete="off" class="input-field2" />
            </div>
        </div>
        <div class="mid">
            <div class="input">
                <p>Your phone number?</p>
                <input type="tel" placeholder="Write your number here..." autocomplete="off" class="input-field2" />
            </div>
            <div class="input">
                <p>Your reservation number?</p>
                <input type="text" placeholder="Write your reservation number here..." autocomplete="off" class="input-field2" />
            </div>
            <div class="input">
                <p>How would you rate us?</p>
                <div class="input-i">
                    <select name="rating" class="input-field">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="last">
            <div class="input">
                <p>Any additional comments?</p>
                <textarea name="comments" placeholder="Write your comments here..." autocomplete="off" class="input-field2"></textarea>
            </div>
        </div>

        <div class="content">
        <button class="btn" type="submit"><li><Link to="/">Submit</Link></li></button>
        </div>
    </form>
</section>
    </div>
  )
}

export default Feedback;