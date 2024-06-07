import React from 'react';
import Navbar from './Navbar';

function Contact() {
  return (
    <div>
        <Navbar></Navbar>
        <section class="contact" id="contact">
    <div class="title">
        <img src="./images/yellow%20wave.png" alt="" />
        <p>CONTACT</p>
        <img src="./images/yellow%20wave.png" alt="" />
    </div>
    <div class="contact-info">
        <p>Phone: +90-123-4567890</p>
        <p>Instagram: <a href="https://www.instagram.com/palatable_restaurant" target="_blank">@palatable_restaurant</a></p>
        <p>Location: 9 Conduit St, London W1S 2XG, UK</p>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2483.0283270995274!2d-0.1441039!3d51.5126963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052a8fed866b%3A0xb07500db019d0324!2sSketch!5e0!3m2!1str!2str!4v1714104727089!5m2!1str!2str"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
</section>
    </div>
  )
}

export default Contact;