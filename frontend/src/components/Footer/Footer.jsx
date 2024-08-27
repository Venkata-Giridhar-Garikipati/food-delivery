import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img className='logo1' src={assets.logo1} alt='' />
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Soluta minus dolorem ipsum vero error nemo ea id iusto voluptate quis,
             corporis fugit aliquid ex doloremque nulla, consequuntur consequatur sed doloribus.</p> 
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
