import React, { useState } from 'react'
import './navbar.css'


import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF } from 'react-icons/fa'
import logo from '../../assests/MN_Orbit.png'

const Navbar = () => {
  return (
    <div className='br__navbar'>

        <div className='br__navbar-links'>

            {/* Bulldog Rocketry Brand Logo */}
            <div className='br__navbar-links_logo'>
                 <a href='home' > <img src = {logo} alt='logo' /> </a>
            </div>

            {/* Menu Navigation Links */}
            <div className='br__navbar-links_container-menu'>
                <Menu />
            </div>

            {/* Social Media Links */}
            <div className='br__navbar-links_container-socials'>
                <Socials />
            </div>

        </div> {/* br__navbar-links */}

    </div> /* br__navbar */
  )
}

const Menu = () => (
    <>
        <p> <a href='/home'>Home</a> </p>
        <p> <a href='/support'>Support us</a> </p>
        <p> <a href='/join'>New Student</a> </p>
        <p> <a href='/contact'>Contact us</a> </p>
    </>
)

const Socials = () => (
    <>
        <p> <a href='https://www.instagram.com/bulldogrocketry/' target='_blank' > <FaInstagram className='br__navbar-links_container-socials-logo' />  </a> </p>
        <p> <a href='https://www.linkedin.com/company/bulldog-rocketry/' target='_blank' > <FaLinkedinIn className='br__navbar-links_container-socials-logo' /> </a> </p>
        <p> <a href='https://www.youtube.com/@bulldogrocketry3002' target='_blank' > <FaYoutube className='br__navbar-links_container-socials-logo' /> </a> </p>
        <p> <a href='https://www.facebook.com/UMDRocketry/' target='_blank' > <FaFacebookF className='br__navbar-links_container-socials-logo' /> </a> </p>
    </>
)

export default Navbar