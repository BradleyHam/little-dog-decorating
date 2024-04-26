'use client'
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { MdArrowOutward } from 'react-icons/md';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    message: '',
  });

  useEffect(() => {
    // Replace 'YOUR_PUBLIC_KEY' with the actual Public Key from your EmailJS account
    emailjs.init('ADEpi7IjLDhScCi10');
  }, []); // The empty array ensures this effect runs only once

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setFormStatus({ submitting: false, message: 'Please enter a valid email.' });
      return;
    }

    setFormStatus({ submitting: true, message: '' });

    // emailjs.sendForm('service_blkcc7b', 'template_pserjkx', e.target, 'ADEpi7IjLDhScCi10')
    //   .then((result) => {
    //       setFormData({
    //         name: '',
    //         email: '',
    //         message: '',
    //       }); // Reset form fields
    //       setFormStatus({ submitting: false, message: 'Your message was sent successfully!' });
    //   }, (error) => {
    //       setFormStatus({ submitting: false, message: 'Failed to send your message. Please try again later.' });
    //   });
  };

  return (
    <form className='contact-form flex flex-col' onSubmit={handleSubmit}>
        <input
          className='text-white font-primary opacity-70 mb-2 p-4 shadow rounded'
          placeholder='Your Name'
          aria-label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className='text-white font-primary opacity-70 p-4 mb-2 shadow rounded'
          placeholder='Your Email'
          aria-label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className='mb-5  font-primary opacity-70 p-4 shadow rounded'
          id="message"
          name="message"
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          className='text-light font-primary flex space-x-2 items-center font-medium'
          disabled={formStatus.submitting}
        >
          {formStatus.submitting ? (
            <p className='text-[17px] font-medium'>Sending...</p>
          ) : (
            <>
              <p className='text-[17px] font-medium'>Submit</p>
              <MdArrowOutward />
            </>
          )}
        </button>
        {formStatus.message && (
          <p className="form-status-message text-[17px] italic">{formStatus.message}</p>
        )}
    </form>
  );
}

export default ContactForm;
