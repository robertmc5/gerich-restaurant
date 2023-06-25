import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import images from '../../constants/images';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>

      <FooterOverlay />

      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <p className='p__cormorant' style={{color: '#DCCA87', marginBlock: '1.5rem', fontWeight: '400'}}>Contact Us</p>
          <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='p__opensans'>+1 212-344-1230</p>
          <p className='p__opensans'>+1 212-555-1230</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="Gericht App Logo" />
          <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="Spoon" className='spoon__img' style={{marginTop: 15}}/>
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className='app__footer-links_hours'>
          <p className='p__cormorant' style={{color: '#DCCA87', marginBlock: '1.5rem', fontWeight: '400'}}>Working Hours</p>
          <p className='p__opensans'>Monday-Friday:<br />08:00 am -12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:<br />07:00am -11:00 pm</p>
        </div>
      </div>
      <div className='footer_copyright'>
        <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
