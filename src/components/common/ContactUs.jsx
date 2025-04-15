
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar';
import '../../landing/assets/fonts/icommon/style.css';
import '../../landing/assets/fonts/flaticon/flaticon.css';
import '../../landing/css/tiny-slider.css';
import '../../landing/css/aos.css';
import '../../landing/css/style.css';
import '../../landing/js/counter';
import '../../landing/js/navbar';
import '../../landing/js/tiny-slider';
import 'aos/dist/aos.css';
import 'tiny-slider/dist/tiny-slider.css';
import AOS from 'aos';

import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';

export const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
      offset: 120
    });
  }, []);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(contactForm);

    try {
      const res = await axios.post('http://localhost:8000/api/contact-us', contactForm);
      console.log(res.data);
      alert('Message sent successfully!');
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to send message.');
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="hero page-inner overlay"
        style={{ backgroundImage: `url(${heroBg1})` }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center mt-5">
              <h1 className="heading" data-aos="fade-up" data-aos-delay="200">
                Contact Us
              </h1>
              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="300">
                <ol className="breadcrumb text-center justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-decoration-none hover-lift">Home</a>
                  </li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay={100}>
              <div className="contact-info">
                <div className="address mt-2">
                  <i className="icon-room" />
                  <h4 className="mb-2">Location:</h4>
                  <p>43 Raymouth Rd. Baltemoer, <br />London 3910</p>
                </div>
                <div className="open-hours mt-4">
                  <i className="icon-clock-o" />
                  <h4 className="mb-2">Open Hours:</h4>
                  <p>Sunday-Friday: <br />11:00 AM - 11:00 PM</p>
                </div>
                <div className="email mt-4">
                  <i className="icon-envelope" />
                  <h4 className="mb-2">Email:</h4>
                  <p>info@Untree.co</p>
                </div>
                <div className="phone mt-4">
                  <i className="icon-phone" />
                  <h4 className="mb-2">Call:</h4>
                  <p>+1 1234 55488 55</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
              <form onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      className="form-control"
                      rows={7}
                      placeholder="Message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer remains unchanged */}
      <div className="site-footer">
        <div className="container">
          <div className="row">
            {/* Footer content same as before */}
            {/* ... */}
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <p>
                Copyright © 2025 . All Rights Reserved. — Designed with love by
                <a href="https://untree.co"> Untree.co</a>
              </p>
              <div>
                Distributed by <a href="https://themewagon.com/" target="_blank" rel="noreferrer">themewagon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
