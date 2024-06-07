import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Creditcard() {
  return (
    <div>
        <section class="info-details" id="info-details">
    <div class="title">
        <img src="./images/yellow%20wave.png" alt="" />
        <p>CREDIT CARD INFO</p>
        <img src="./images/yellow%20wave.png" alt="" />
    </div>
    <p class="sub-title">
        Enter Your Credit Card Details
    </p>
    <form action="masalar.html" method="GET">
        <div class="input">
            <p>Cardholder's Name</p>
            <input type="text" id="cardholder-name" placeholder="Enter your name..." />
        </div>
        <div class="input">
            <p>Card Number</p>
            <input type="text" id="card-number" placeholder="Enter your card number..." />
        </div>
        <div class="input">
            <p>Expiration Date (MM/YY)</p>
            <input type="text" id="expiration-date" placeholder="MM/YY" /> 
        </div>
        <div class="input">
            <p>CVV</p>
            <input type="text" id="cvv" placeholder="Enter your CVV..." />
        </div>
        <button class="btn" type="submit"><li><Link to="/tables">Submit</Link></li></button>
    </form>
</section>
    </div>
  )
}

export default Creditcard;