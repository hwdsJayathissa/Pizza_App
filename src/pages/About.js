import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css';

function About
() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage : `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>
                At Pizza World, we're passionate about crafting the perfect pizza experience for you. Our journey began with a simple yet profound love for authentic, mouthwatering pizzas that bring people together. From our humble beginnings in Colombo to our current status as a beloved local institution, we've stayed true to our commitment to quality, flavor, and community.
                What sets us apart? It's our dedication to using only the freshest ingredients, sourced locally whenever possible, to create pizzas that burst with flavor in every bite. Our skilled chefs handcraft each pizza with precision and care, ensuring that every slice is a slice of perfection. Whether you're a fan of classic pepperoni, crave the boldness of BBQ chicken, or prefer a veggie-packed delight, we have something to tantalize your taste buds.
                But Pizza World is more than just a place to grab a delicious meal. We're a part of the fabric of Colombo, supporting local events, schools, and charities because we believe in giving back to the community that has supported us throughout the years. Your satisfaction isn't just our goal; it's our passion.
                So whether you're joining us for a casual dinner with friends, ordering takeout for a cozy night in, or catering your next event with our mouthwatering pizzas, know that you're in for an experience that's as warm and inviting as our freshly baked crust. Thank you for being a part of the Pizza World family—we can't wait to serve you!
            </p>
        </div>

      
    </div>
  )
}

export default About;

