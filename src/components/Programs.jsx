import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Data_Science from "../assets/dataScience.pdf"
import Full_Stack from "../assets/fullStack.pdf";

function Programs() {
    return (
        <>
            <div className="programs-container" id='courses'>
                <div className='courses-header'>
                    <h1>Explore Our Courses</h1>
                </div>
                <div className="programs-main">

                    <div className="program-card program-left">
                        <img src="https://media.licdn.com/dms/image/v2/D5612AQF_doiagiQJYw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1707215860263?e=2147483647&v=beta&t=__VVVmvkHPzBlz6XjsQPfIvGXfLMFviR35HX0u09vYI" alt="Full Stack Web Development" />
                        <h3>Full Stack Web Development</h3>
                        <p>Partnered with E&ICT, IIT Guwahati and NSDC</p>

                        <div className="program-details">
                            <div className='program-details-batch-size'>
                                <p>Batch size: 60</p>
                            </div>
                            <div className='program-details-duration'>
                                <p>Duration: 8 months</p>
                            </div>
                        </div>

                        <div className="program-content">
                            <p><CheckIcon /> 500+ DSA Questions</p>
                            <p><CheckIcon /> 100+ Real-world projects</p>
                            <p><CheckIcon /> New AI powered Curriculum</p>
                            <p><CheckIcon /> Learn DSA, MERN and AWS</p>
                        </div>

                        <div className="program-actions">
                            <a 
                                href={Full_Stack}
                                className="program-button"
                                download="Geekster_Full_Stack_Brochure.pdf"
                            >
                                Download brochure
                            </a>
                            <a href="https://www.geekster.in/courses/full-stack-web-developer/?utm_source=franchise&utm_medium=vrm&utm_campaign=fswd_vrm" target='_blank' className="program-button"> Learn More </a>
                        </div>
                    </div>

                    <div className="program-card program-right">
                        <img src="https://tech.target.com/_next/image?url=https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_275b3df2-7679-4dc2-8666-c95924b8a201%3Fscl%3D1&w=1080&q=75" alt="Data Science and Gen-AI" />
                        <h3>Data Science and Gen-AI</h3>
                        <p>Partnered with E&ICT, IIT Guwahati and NSDC</p>

                        <div className="program-details">
                            <div className='program-details-batch-size'>
                                <p>Batch size: 60</p>
                            </div>
                            <div className='program-details-duration'>
                                <p>Duration: 8 months</p>
                            </div>
                        </div>

                        <div className="program-content">
                            <p><CheckIcon /> 30+ Business Case Studies</p>
                            <p><CheckIcon /> 50+ Real-world projects</p>
                            <p><CheckIcon /> New AI powered Curriculum</p>
                            <p><CheckIcon /> Comprehensive Data Analytics Skills</p>
                        </div>

                        <div className="program-actions">
                            <a 
                                href={Data_Science}
                                className="program-button"
                                download="Geekster_Data_Science_Brochure.pdf"
                            >
                                Download brochure
                            </a>
                            <a href="https://www.geekster.in/courses/full-stack-web-developer/?utm_source=franchise&utm_medium=vrm&utm_campaign=fswd_vrm" target='_blank'  className="program-button"> Learn More </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Programs;
