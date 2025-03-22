import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import background1 from "../../assets/images/bg1.jpg";
import background2 from "../../assets/images/bg2.jpg";
import background3 from "../../assets/images/bg3.jpg";
import { div } from 'framer-motion/client';


// import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";







export const ContactUs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(background1);
  const [fade, setFade] = useState(true);
  useEffect(() => {
      const images = [background1, background2, background3];
      let index = 0;
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          index = (index + 1) % images.length;
          setCurrentBackground(images[index]);
          setFade(true);
        }, 1000); // Fade out duration
      }, 5000); // Change image every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < testimonials.length ? prevIndex + 1 : 0
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : testimonials.length - 1
      );
    };

        
    const containerStyle = {
        position: "relative", // Ensures overlay and content are positioned correctly
        width: "100vw",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden"
      };
    
      const backgroundStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "opacity 1s ease-in-out",
        opacity: fade ? 1 : 0,
        zIndex: -2,
      };
    
      const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
        zIndex: -1,
      };
    
      const navStyle = {
        backgroundColor: "#005555",
        padding: "20px 25px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        borderRadius: "12px",
      };
      const logoStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        color: "white",
        textDecoration: "none",
      };
    
      const menuStyle = {
        display: "flex",
        listStyle: "none",
        gap: "40px",
        color: "#fff",
        fontSize: "1rem",
        fontWeight: "bold",
      };
      const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontWeight: "500",
      };
      const dropdownStyle = {
        position: "absolute",
        backgroundColor: "#fff",
        listStyle: "none",
        padding: "10px",
        borderRadius: "5px",
        top: "100%",
        left: 0,
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        minWidth: "150px",
        // display: dropdownOpen ? "block" : "none", // Show dropdown when dropdownOpen is true
      };
    
      const dropdownItemStyle = {
        color: "black",
        textDecoration: "none",
        display: "block",
        padding: "8px 15px",
        transition: "background 0.3s",
      };
    
    
  return (
<div>
     <div style={containerStyle}>
      {/* Navbar */}
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>
      <div style={navStyle}>
        <a href="index.html" style={logoStyle}>
          Property
        </a>
       
        <ul style={menuStyle}>
      <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>HOME</Link></li>
      <li><Link to="/properties" style={{ color: "white", textDecoration: "none" }}>PROPERTIES</Link></li>
      <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>SERVICES</Link></li>
      <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>ABOUT</Link></li>
      <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>CONTACT US</Link></li>

      {/* Account Dropdown */}
      <li 
        style={{ position: "relative", cursor: "pointer" }} 
        className="dropdown"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <Link to="#" style={{ color: "white", textDecoration: "none" }}>ACCOUNT ▾</Link>
        <ul style={dropdownStyle} className="dropdown-menu">
          <li><Link to="/login" style={{ color: "#005555", textDecoration: "none", display: "block", padding: "10px 20px" }}>Login</Link></li>
          <li><Link to="/signup" style={{ color: "#005555", textDecoration: "none", display: "block", padding: "10px 20px" }}>Signup</Link></li>
        </ul>
      </li>
    </ul>
 
   </div>
   <h1>Contact Us</h1>
   <br />
   <h6 >Home / Contact Us</h6>
    </div>
     {/* footer */}
     <div style={{ backgroundColor: "#8888", padding: "50px 0" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Contact Section */}
            <div>
              <h4 style={{ fontWeight: "bold" ,color:"#005555"}}>CONTACT</h4>
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
              <p>+1(123)-456-7890</p>
              <p>+1(123)-456-7890</p>
              <p>info@mydomain.com</p>
            </div>
    
            {/* Sources Section */}
            <div>
              <h4 style={{ fontWeight: "bold",color:"#005555" }}>SOURCES</h4>
              <div style={{ display: "flex", gap: "40px" }}>
                <div>
                  <p>About us</p>
                  <p>Services</p>
                  <p>Vision</p>
                  <p>Mission</p>
                  <p>Terms</p>
                  <p>Privacy</p>
                </div>
                <div>
                  <p>Partners</p>
                  <p>Business</p>
                  <p>Careers</p>
                  <p>Blog</p>
                  <p>FAQ</p>
                  <p>Creative</p>
                </div>
              </div>
            </div>
    
            {/* Links Section */}
            <div>
              <h4 style={{ fontWeight: "bold",color:"#005555" }}>LINKS</h4>
              <p>Our Vision</p>
              <p>About us</p>
              <p>Contact us</p>
              {/* Social Media Icons */}
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {["instagram", "twitter", "facebook", "linkedin", "pinterest", "dribbble"].map(
                  (icon, index) => (
                    <div
                      key={index}
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#ddd",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className={`fab fa-${icon}`} style={{ fontSize: "18px" }}></i>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
    
          {/* Copyright Section */}
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              fontSize: "14px",
            }}
          >
            <p>Copyright © 2025. All Rights Reserved. — Designed with love by Untree.co</p>
            <p>Distributed by themewagon</p>
          </div>
        </div>
    </div>
  )
}
