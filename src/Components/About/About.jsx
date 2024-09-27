import React from 'react'
import './About.css'
import about_img from '../../Assets/about.png'
import play_icon from '../../Assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaderrs Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem
          dignissimos necessitatibus provident magnam odit autem dolore
          doloribus aspernatur esse quisquam est nesciunt doloremque deserunt
          dicta harum, mollitia, vero error facilis corporis deleniti. Assumenda
          eos exercitationem iure praesentium minima consequatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem
          dignissimos necessitatibus provident magnam odit autem dolore
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem
        </p>
      </div>
    </div>
  );
}

export default About
