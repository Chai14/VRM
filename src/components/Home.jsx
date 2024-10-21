import React from 'react'
import Navbar from './Navbar'

import Footer from './Footer';
import Hero from './Hero';
import AboutLearning from './AboutLearning';
import Testimonial from './Testimonial';
import Courses from './Cources';
import Programs from './Programs';

function Home() {
    return (
        <>
            <div className='container'>
                <Navbar />
                <Hero/>
                <AboutLearning/>
                <Programs/>
                <Courses/>
                <Testimonial/>
                <Footer/>
            </div>

        </>
    )
}

export default Home;