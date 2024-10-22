import React from 'react'
import learning from '../assets/learning1.jpg'
function AboutLearning() {
    return (
        
            <div className='about-container' id='about'>
                <div className="about-header">
                    <span></span>
                    <h2>About VRM and Our Vision</h2>
                    <span></span>
                </div>
                <div>
                    <div className='about-left'>
                        <img src={learning} alt=""/>
                    </div>
                    <div className='about-right'>
                        {/* <h3>Our Story</h3> */}
                        <p> In remembrance of her late husband and Mr. Varatharajan, Mrs. Subbulakshmi Varatharajan founded the VRM Learning and Development Center.
                            Subbulakshmi is passionate about using cutting edge technology to create lessons that are intended for the future.
                            Using her twenty-five years of information technology experience, she hopes to develop education for the future.  </p>
                    </div>
                </div>

            </div>
        
    )
}

export default AboutLearning;