import React from 'react'
import './Hero.css'
import hand from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import hero from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand} alt=""/>
            </div>
            <p>collection</p>
            <p>for Everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest collection</div>
            <img src={arrow} alt=""/>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero
