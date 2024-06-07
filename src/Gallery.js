import React from 'react';
import Navbar from './Navbar';

function Gallery() {
  return (
    <div>
    <Navbar></Navbar>

        <section class="gallery" id="gallery">
    <div class="title">
        <img src="./images/yellow%20wave.png" alt="" />
        <p>GALLERY</p>
        <img src="./images/yellow%20wave.png" alt="" />
    </div>
    <div class="gallery-images">
        <div>
            <img src="./images/g1-min.png" alt="" />
            <img src="./images/g2-min.png" alt="" />
        </div>
        <div>
            <img src="./images/g3-min.png" alt="" />
            <img src="./images/g4-min.png" alt="" />
            <img src="./images/g5-min.png" alt="" />
        </div>
        <div>
            <img src="./images/g6-min.png" alt="" />
            <img src="./images/g7-min.png" alt="" />
        </div>
    </div>
</section>
    </div>
  )
}

export default Gallery;