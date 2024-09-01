import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img className='logo1' src={assets.logo1} alt='' />
           <p>Got questions about your order or need help with our food delivery services?
             We're here to assist you! Whether you're craving more information about our menu, 
             have a special request, or need support with a recent order, don't hesitate to reach out.</p> 
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
             </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>
                    +1-212-456-7890
                </li>
                <li>foodies@gmail.com</li>
            </ul>

        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 &copy; Foodies.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
