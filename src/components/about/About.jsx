import React from 'react'
import './about.css'

import launchLogo from '../../assets/Rocket_Launch_Logo.png'
import smokeLogo from '../../assets/rocket_smoke_logo.png'
import minnesotaLogo from '../../assets/minnesota_launch.png'

const About = () => {
  return (
    <div className='br__about'>

      <div className='br__about-who'>
        <img className='br__about-who_img' src={smokeLogo} alt='rocket_launch_logo' />
        <div className='br__about-who_text'>
          <h1>About Bulldog Rocketry</h1>
          <p>As the premier engineering organization at the University of Minnesota Duluth, 
          we are shaping the future of the industry. Shooting for the stars, 
          and building the team and tools to get there.</p>
        </div>
      </div>

      <div className='br__about-mission'>
        <div className='br__about-mission_text'>
          <h1>Mission Statement</h1>
          <p>Bulldog Rocketry provides an inclusive team for members to grow in areas of 
          ingenuity and perseverance while maintaining a kinetic environment of excellence.</p>
        </div>
          <img className='br__about-mission_img' src={launchLogo} alt='rocket_launch_logo' />
      </div>

      <div className='br__about-vision'>
        <img className='br__about-vision_img' src={minnesotaLogo} alt='rocket_smoke_logo' />
        <div className='br__about-vision_text'>
          <h1>Our Vision</h1>
          <p>To propel the boundaries of what's possible for student led rocketry teams</p>
        </div>
      </div>

      <div className='br__about-contact'>

      </div>

    </div>
  )
}

export default About