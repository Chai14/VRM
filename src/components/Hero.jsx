import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function Hero() {
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
            <h3>Book a <span>  FREE </span>Demo</h3>
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
            <button type='submit'>Register <KeyboardDoubleArrowRightIcon /></button>
            <p className='terms'>
              By continuing, you agree to the <a href='#'>VRM’s Terms</a> and <a href='#'>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Hero