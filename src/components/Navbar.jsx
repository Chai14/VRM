import React, { useEffect, useState } from 'react';
import logo from '../assets/VRM-logo.png';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // Track visibility of the navbar

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(false); // Hide navbar when scrolling past 100vh
      } else {
        setIsVisible(true); // Show navbar when above 100vh
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <nav style={{ display: isVisible ? 'flex' : 'none' }}>
        <img src={logo} alt="Logo" />
        <ul className='navbar-menu'>
          <a href="#about">About Us</a>
          {/* <a href="#services">Services</a> */}
          <a href="#footer">Contact</a>
          <a href="#courses">Courses</a>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
