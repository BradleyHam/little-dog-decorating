'use client'
import React, { useState, useEffect } from 'react';
import HeroTestimonial from "./HeroTestimonial";

const testimonials = [
  { id: 1, text: "Testimonial 1 Content." },
  { id: 2, text: "Testimonial 2 Content." },
  { id: 3, text: "Testimonial 3 Content." }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkMediaQuery = () => {
      // Match the Tailwind 'lg:' breakpoint (typically 1024px)
      setIsLargeScreen(window.matchMedia('(min-width: 1024px)').matches);
    };

    checkMediaQuery();
    window.addEventListener('resize', checkMediaQuery);

    return () => window.removeEventListener('resize', checkMediaQuery);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) {
      const interval = setInterval(() => {
        setCurrentIndex(currentIndex => (currentIndex + 1) % testimonials.length);
      }, 3000); // changes every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isLargeScreen]);

  const offset = currentIndex * -100; // Each item moves left by 100% of container width

  return (
    <div className="overflow-hidden w-full  lg:overflow-visible">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: isLargeScreen ? 'none' : `translateX(${offset}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="flex-none w-full  lg:w-1/3">
            <HeroTestimonial text={testimonial.text}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;



// import HeroTestimonial from "./HeroTestimonial";

// export default function HeroTestimonials(){
//     return (
//     <div className="hero-testimonial-row flex justify-around container mx-auto py-24">
//     <HeroTestimonial text='friendly, punctual and reliable'/>
//     <HeroTestimonial text='best painters in town'/>
//     <HeroTestimonial text='surpassed expectations'/>
// </div>
//     )
// }