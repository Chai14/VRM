import React, { useState } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import './Hero.css';  // Import the updated CSS

function Hero() {
  const [showCart, setShowCart] = useState(false);  // State to toggle the cart

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowCart(true);  // Show the cart when register is clicked
  };

  const handleCloseCart = () => {
    setShowCart(false);  // Hide the cart when the cross button is clicked
  };

  return (
    <>
      <div className='hero-container'>

        <div className='hero-left'>
          <h1>VRM Foundation</h1>
          <p>POWERED BY GEEKSTER</p>
          <h3>India's Leading Technical School <br /> Discover, Learn & Grow with our Resources</h3>
          <p>
            VMR Foundation delivers high-quality technical training, complemented by exceptional mentorship sessions with industry experts.
          </p>
          <button href="#about">Learn More</button>
        </div>

        <div className='hero-right'>
          <form className='book-demo-form'>
            <h3>Book a <span>FREE</span> Demo</h3>
            <div>
              <input type='text' placeholder='Your Name' />
            </div>
            <div>
              <input type='email' placeholder='Your Email' />
            </div>
            <div>
              <div className='phone-input'>
                <span className='phone-prefix'>+91</span>
                <input type='tel' placeholder='Your Phone Number' />
              </div>
            </div>
            <button type='submit' onClick={handleRegisterClick}>
              Register <KeyboardDoubleArrowRightIcon />
            </button>
            <p className='terms'>
              By continuing, you agree to the <a href='#'>VRM’s Terms</a> and <a href='#'>Privacy Policy</a>.
            </p>
          </form>
        </div>

      </div>

      {/* Conditional rendering of the cart */}
      {showCart && (
        <div className="cart">
          <button className="close-cart" onClick={handleCloseCart}>✖</button>
          <h4>Select Your Course</h4>
          <div className="cart-options">
            <a href="https://www.geekster.in/courses/full-stack-web-developer/?utm_source=franchise&utm_medium=vrm&utm_campaign=fswd_vrm" target="_blank" rel="noopener noreferrer">Full Stack</a>
            <a href="https://www.geekster.in/courses/data-science-artificial-intelligence/?utm_source=franchise&utm_medium=vrm&utm_campaign=dsai_vrm" target="_blank" rel="noopener noreferrer">Data Science</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
