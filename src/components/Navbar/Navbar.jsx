import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const LinksMenu = () => (
  <>
    <li className='p__opensans'><a href="#home">Home</a></li>
    <li className='p__opensans'><a href="#about">About</a></li>
    <li className='p__opensans'><a href="#menu">Menu</a></li>
    <li className='p__opensans'><a href="#awards">Awards</a></li>
    <li className='p__opensans'><a href="#contact">Contact</a></li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="Gericht App Logo" />
      </div>
      <ul className='app__navbar-links'>
        <LinksMenu />
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}}/>

        { toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu className='overlay__close' onClick={() => {setToggleMenu(false)}} />
            <ul className='app__navbar-smallscreen_links'>
              <LinksMenu />
              <li className='app__navbar-smallscreen_links-login p__opensans'><a href="#login">Log In / Register</a></li>
              <li className='app__navbar-smallscreen_links-login p__opensans'><a href="/">Book Table</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
