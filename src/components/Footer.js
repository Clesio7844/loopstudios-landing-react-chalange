import React from 'react';
import logo from '../images/logo.svg';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Events</button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </div>
        <div>
          <ul className='social'>
            <li>
              <GrFacebook />
            </li>
            <li>
              <GrTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
          <div className='copyright'>
            &copy; 2021 David De Castro. All right reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
