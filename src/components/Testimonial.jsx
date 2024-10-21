// import React, { useState } from 'react';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// // import './Testimonial.css';

// function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       image: 'https://i.ytimg.com/vi/KBo__6zXU6k/maxresdefault.jpg',
//       name: 'John Doe',
//       title: 'CEO, Company ABC',
//       text: 'This service was amazing! It exceeded all my expectations and I highly recommend it to anyone looking for quality work.'
//     },
//     {
//       id: 2,
//       image: 'https://endingscene.com/wp-content/uploads/2022/09/Airline-ASL-Database-Transaction-Explainer-Promotional-Video-Marketing-Motion-Graphics-Animated-Promo-Video-EndingSecne-Animation-Studio-Bangladeh.jpg',
//       name: 'Jane Smith',
//       title: 'CTO, Company XYZ',
//       text: 'The team was professional and delivered exceptional results. I am very pleased with the outcome and would use them again.'
//     },
//     {
//       id: 3,
//       image: 'https://media.licdn.com/dms/image/v2/C5612AQGf5a898pJkMA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1563437210254?e=2147483647&v=beta&t=SJ9yijVHsdnXVaMWYBzeisoCBcoaVodFXqG1nflJbuY',
//       name: 'Alice Brown',
//       title: 'Product Manager, Startup 123',
//       text: 'A wonderful experience from start to finish. The service provided was top-notch and the attention to detail was impressive.'
//     },
//     {
//       id: 4,
//       image: 'https://endingscene.com/wp-content/uploads/2022/09/Airline-ASL-Database-Transaction-Explainer-Promotional-Video-Marketing-Motion-Graphics-Animated-Promo-Video-EndingSecne-Animation-Studio-Bangladeh.jpg',
//       name: 'Michael Lee',
//       title: 'Lead Developer, Tech Solutions',
//       text: 'Great collaboration and high-quality results. I would recommend them to anyone looking for skilled professionals.'
//     },
//     {
//       id: 5,
//       image: 'https://media.licdn.com/dms/image/v2/C5612AQGf5a898pJkMA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1563437210254?e=2147483647&v=beta&t=SJ9yijVHsdnXVaMWYBzeisoCBcoaVodFXqG1nflJbuY',
//       name: 'Emily White',
//       title: 'Designer, Creative Agency',
//       text: 'A truly creative and inspiring team. The final product was better than I could have imagined!'
//     },
//     {
//       id: 6,
//       image: 'https://i.ytimg.com/vi/KBo__6zXU6k/maxresdefault.jpg',
//       name: 'David Johnson',
//       title: 'Marketing Head, Global Corp',
//       text: 'Professional, reliable, and excellent at what they do. I couldn’t be happier with the service provided.'
//     },
//     {
//       id: 7,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxc1HdYi9Xt4AlEwqF1tOjPbCzSHaUjeNjRMQRLLzr7TPYBiUeWC__-cBSbUYUuwyloZo&usqp=CAU',
//       name: 'Michael Lee',
//       title: 'Lead Developer, Tech Solutions',
//       text: 'Great collaboration and high-quality results. I would recommend them to anyone looking for skilled professionals.'
//     },
//     {
//       id: 8,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX467HB9BIhJw8FXr-_ypZ0LNR25htqYKAYc9E_IDYp25W6i34AHzzC9erJklw524jC8I&usqp=CAU',
//       name: 'Emily White',
//       title: 'Designer, Creative Agency',
//       text: 'A truly creative and inspiring team. The final product was better than I could have imagined!'
//     },
//     {
//       id: 9,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDigRaF0a7SdQIoy8T9mVehiCxiahrptUMbpC_ElqcpdY9YwUBwWQf3_tcG00WaxOdNgQ&usqp=CAU',
//       name: 'David Johnson',
//       title: 'Marketing Head, Global Corp',
//       text: 'Professional, reliable, and excellent at what they do. I couldn’t be happier with the service provided.'
//     },
//   ];

//   const handleNext = () => {
//     if (currentIndex + 3 < testimonials.length) {
//       setCurrentIndex(currentIndex + 3);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - 3 >= 0) {
//       setCurrentIndex(currentIndex - 3);
//     }
//   };

//   return (
//     <>
//       <div className='testimonial-container'>
//         <div className='testimonial-header'>
//           <h1>Placement and Training activities for colleges across India</h1>
//         </div>
//         <div className="all-testimonials">
//           <button onClick={handlePrev} disabled={currentIndex === 0} className="nav-button"><ArrowCircleLeftIcon /></button>
//           <div className="testimonial-row">
//             {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
//               <div key={testimonial.id} className="testimonial-slide">
//                 <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
//                 <div className="testimonial-content">
//                   <h3 className="testimonial-name">{testimonial.name}</h3>
//                   <p className="testimonial-title">{testimonial.title}</p>
//                   <p className="testimonial-text">"{testimonial.text}"</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="testimonial-navigation">

//             <button onClick={handleNext} disabled={currentIndex + 3 >= testimonials.length} className="nav-button"><ArrowCircleRightIcon /></button>
//           </div>
//         </div>

//       </div>

//     </>

//   );
// }

// export default Testimonial;






import React, { useState, useEffect, useRef } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalTime = 3000; // 3 seconds for each slide
  const totalSlides = 6; // Total number of unique testimonials
  const testimonialContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      image: 'https://cdn.geekster.in/students/kushagra.jfif',
      name: 'Kushagra Gupta',
      title: 'Software Engineer, Airtel',
      text: `From '0 offers' to 'multiple offers, that has been my journey at Geekster. My happiness multiplies when I see my proud family.`
    },
    {
      id: 2,
      image: 'https://images.geekster.in/nikhil.JPG',
      name: 'Nikhilesh Kumar Mishra',
      title: 'Assosiate Software Developer, TSYS',
      text: `To be honest, when I heard of Geekster's ISA program, I thought there must be some hidden charges. But I still wanted to take a chance `
    },
    {
      id: 3,
      image: 'https://images.geekster.in/student/mansi.png',
      name: 'Durga Prasad Behera',
      title: 'Software Development Engineer, Accenture',
      text: 'A wonderful experience from start to finish. The service provided was top-notch and the attention to detail was impressive.'
    },
    {
      id: 4,
      image: 'https://images.geekster.in/durga.jpeg',
      name: 'Michael Lee',
      title: 'Software Engineer, RazorPay',
      text: 'Geekster is an excellent platform for learning new software development technologies to crack interviews at reputed companies. Mentors solve doubts in every possible way.'
    },
    // {
    //   id: 5,
    //   image: 'https://media.licdn.com/dms/image/v2/C5612AQGf5a898pJkMA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1563437210254?e=2147483647&v=beta&t=SJ9yijVHsdnXVaMWYBzeisoCBcoaVodFXqG1nflJbuY',
    //   name: 'Emily White',
    //   title: 'Designer, Creative Agency',
    //   text: 'A truly creative and inspiring team. The final product was better than I could have imagined!'
    // },
    // {
    //   id: 5,
    //   image: 'https://i.ytimg.com/vi/KBo__6zXU6k/maxresdefault.jpg',
    //   name: 'David Johnson',
    //   title: 'Marketing Head, Global Corp',
    //   text: 'Professional, reliable, and excellent at what they do. I couldn’t be happier with the service provided.'
    // },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials]; // Duplicate the testimonials array

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleTransitionEnd = () => {
    // If we've reached the end of the first duplicate, reset without transition
    if (currentIndex >= testimonials.length) {
      testimonialContainerRef.current.style.transition = 'none';
      setCurrentIndex(0); // Reset to original slides
      setTimeout(() => {
        testimonialContainerRef.current.style.transition = 'transform 0.5s ease-in-out'; // Restore the transition
      }, 0);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, intervalTime);

    return () => clearInterval(slideInterval); // Clean up interval
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h1>Student Testimonials</h1>
      </div>
      <div className="all-testimonials">
        <div
          ref={testimonialContainerRef}
          className="testimonial-row"
          style={{
            transform: `translateX(-${(currentIndex % testimonials.length) * (100 / 3)}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-title">{testimonial.title}</p>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;




