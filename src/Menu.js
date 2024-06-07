import React from 'react';
import Navbar from './Navbar';

function Menu() {
  return (
    <div>
        <Navbar></Navbar>

        <section class="menu" id="menu">
        <img src="images/menu.png" class="hand" alt="" />
        <div class="menu-text">
        <div class="title">
            <img src="./images/white%20wave.png" alt="" />
            <p>OUR FOOD QUALITY</p>
            <img src="./images/white%20wave.png" alt="" />
        </div>
        <p class="des">
            Discover Palatable's menu, a blend of traditional and modern flavors.
            Each dish, from our signature truffle risotto to the slow-roasted lamb shank,
            showcases a unique fusion of locally sourced ingredients prepared with inventive flair.
            Join us for a dining experience that delights the senses.
        </p>
    </div>
    </section>
    </div>
  )
}

export default Menu;