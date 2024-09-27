import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Grow your skills with us</h1>
        <p>Learn new skills with our online courses</p>
        <button className='btn'>Get Started <img src={dark_arrow} alt='icon' />'</button>
      </div>
    </div>
  )
}

export default Hero
