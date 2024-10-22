import React from 'react';
import logo from '../assets/VRM-logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
    return (
        <div id='footer'>
            <footer className="footer-container" >
               
                <div className="footer-content">
                    {/* <div className="footer-section links">
                        <div className="footer-title">Products</div>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div> */}
                    <div className="footer-section links">
                        <div className="footer-title">Quick Links</div>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="">Book a Demo</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <div className="footer-title">Contact Us</div>
                        {/* <p>Email: info@vrmfoundation.com</p>
                        <p>Phone: +91 12345 67890</p> */}
                        <ul>
                        <li>GoodWorks Infinity Park - Coworking Space </li> 
                        <li>Managed Office </li> 
                        <li>Virtual Office in Electronic City - 080887 07700</li>
                        </ul>
                    </div>
                    <div className="footer-section about">
                    <div className="footer-title">
                        {/* <h2>VRM Foundation</h2> */}
                        <img src={logo} alt="VRM Foundation Logo" />
                    </div>
                </div>
                </div>

                {/* Sub-Footer Section */}

            </footer>
            <div className="sub-footer">
                <div className="footer-bottom">
                    <div className='sub-footer-left'>
                        <p> Copyright © 2024 Vrm Learning and development centre  - All Rights Reserved.</p>
                    </div>
                    <div className="social-icons">
                        <ul>
                            <i className="fab fa-facebook-f"><InstagramIcon /></i>
                            <i className="fab fa-twitter"><FacebookIcon/></i>
                            <i className="fab fa-linkedin-in"><RedditIcon/></i>
                            <i className="fab fa-linkedin-in"><TwitterIcon/></i>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;





{/* <div className="footer-bottom">
                <p>&copy; 2024 VRM Foundation. All rights reserved.</p>
            </div> */}