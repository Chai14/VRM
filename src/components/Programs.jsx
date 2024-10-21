import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CallMadeIcon from '@mui/icons-material/CallMade';

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
                            <button className="program-button">Download brochure</button>
                            <a href="https://www.geekster.in/courses/full-stack-web-developer/?utm_source=franchise&utm_medium=vrm&utm_campaign=fswd_vrm" className="program-button"> Learn More </a>
                        </div>
                    </div>
                    <div className="program-card program-right">
                        <img src="src\assets\datascience.jpg" alt="Data Science and Gen-AI" />
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
                            <button className="program-button">Download brochure</button>
                            <a href="https://www.geekster.in/courses/data-science-artificial-intelligence/?utm_source=franchise&utm_medium=vrm&utm_campaign=dsai_vrm" className="program-button"> Learn More </a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Programs;



<div className="programs-container">
  <div className="programs-main">
    <div className="program-card">
      <img src="your-image.jpg" alt="Program Image" />
      <div className="program-content">
        <h3>Full Stack Web Development</h3>
        <p>Partnered with IIT Guwahati</p>
        <div className="program-details">
          <p>Batch size: 60</p>
          <p>Duration: 8 months</p>
        </div>
        <div className="program-actions">
          <button className="program-button">Download Brochure</button>
          <button className="program-button">Learn More</button>
        </div>
      </div>
    </div>
    {/* <!-- Add more program cards here --> */}
  </div>
</div>



// <div className="program-card program-right">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-AZjOBsjiwGUYDQA2VMhih5s60Up9XXvZ3nGKJyoLBWbKZi2DjF7EmnOYCFTnQSmD1U&usqp=CAU" alt="Data Science and Gen-AI" />
//                         <h3>Data Science and Gen-AI</h3>
//                         <p>Partnered with E&ICT, IIT Guwahati and NSDC</p>

//                         <div className="program-details">
//                             <div className='program-details-batch-size'>
//                                 <p>Batch size: 60</p>
//                             </div>
//                             <div className='program-details-duration'>
//                                 <p>Duration: 8 months</p>
//                             </div>
//                         </div>

//                         <div className="program-content">
//                             <p><CheckIcon /> 30+ Business Case Studies</p>
//                             <p><CheckIcon /> 50+ Real-world projects</p>
//                             <p><CheckIcon /> New AI powered Curriculum</p>
//                             <p><CheckIcon /> Comprehensive Data Analytics Skills</p>
//                         </div>

//                         <div className="program-actions">
//                             <button className="program-button">Download brochure</button>
//                             <button className="program-button">Learn More</button>
//                         </div>
//                     </div>