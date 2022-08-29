import React from 'react';

import './Footer.scss';


import { Link } from 'react-router-dom';

import bg from '../../Assets/Images/MYXJ_20211114113852445_save (2).jpg'
import Logo from '../../Assets/Images/logo.svg';

const Footer = () => {
  return (
    <div className="footer" style={{backgroundImage: `url(${bg})`}}>
      <div className="footer__content">
        <div className="footer__content__logo">
          <div className="logo">
            
            <Link to="/"> Flexify </Link>

          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Terms And Condiions</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">FAQ</Link>
            <Link to="/">Get Premium</Link>
            <Link to="/">Terms And Condiions</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Contact The Developer</Link>
            <Link to="/">About The Developer</Link>
            <Link to="/">Github</Link>
            <Link to="/">Open Source Community</Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer;