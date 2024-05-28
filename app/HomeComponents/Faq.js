'use client'
import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

// Define a simple array of FAQs
const faqData = [
  {
    question: "Is the paint included in the quote?",
    answer: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
  },
  {
    question: "Can you help me select colours?",
    answer: "Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
  },
  {
    question: "When can you get started ?",
    answer: "Server-side rendering can improve the performance of your web applications by reducing the load on the client-side and improving the initial page load times, which is beneficial for both user experience and SEO."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:max-w-[70%] container mx-auto p-5 pb-0 pt-28">
      <h2 className="text-2xl font-bold mb-12 text-center tracking-tight font-poppins text-brand-blue">Frequently asked questions</h2>
      {faqData.map((faq, index) => (
        <div onClick={() => toggleFAQ(index)} key={index} className="mb-4 cursor-pointer">
          <hr className="border-gray-300 my-4" />
          <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold  text-brand-blue" >
            {faq.question}
          </h3>
          <FaChevronUp className={`${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition-all duration-300 ease-in-out`}/>
          </div>
          <div className={`${activeIndex === index ? 'block' : 'hidden'} text-gray-600 mt-2`}>
            {faq.answer}
            
          </div>
        </div>
      ))}
      <hr className="border-gray-300 my-4" />
    </div>
  );
};
//---

export default FAQ;
