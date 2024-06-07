import React from 'react';
import Navbar from './Navbar';

function Aboutus() {
  return (
    <div>
    <Navbar></Navbar>
  
    <section className="about" id="about">
        <div className="about-text">
            <div className="title">
                <img src="./images/yellow%20wave.png" alt="" />
                <p>
                    <span className="about-move">ABOUT</span>
                    <span className="palatable-move">PALATABLE</span>
                </p>
                <img src="./images/yellow%20wave.png" alt="" />
            </div>
            <p className="des">
                Welcome to Palatable, where culinary delights await! Our passion for exquisite flavors and memorable dining experiences drives everything we do. From savoring mouthwatering dishes to discovering new favorites, Palatable is your go-to destination for culinary adventures. Join us as we embark on a journey to tantalize your taste buds and create unforgettable moments, one bite at a time.
            </p>
            <a href="#">
                Visit Or Book <span>Now</span>
            </a>
        </div>
    </section>
    </div>
  )
}

export default Aboutus;