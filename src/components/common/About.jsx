import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import background1 from "../../assets/images/bg1.jpg";
import background2 from "../../assets/images/bg2.jpg";
import background3 from "../../assets/images/bg3.jpg";
import { div } from 'framer-motion/client';
import bgImage from '../../assets/images/bg3.jpg'; 
import "@fortawesome/fontawesome-free/css/all.min.css";





// import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";









export const About = () => {
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
      {/* <li 
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
      </li> */}
      {/* Account Dropdown */}
<li 
  style={{ position: "relative", cursor: "pointer" }} 
  className="dropdown"
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>
  <Link to="#" style={{ color: "white", textDecoration: "none" }}>ACCOUNT ▾</Link>
  <ul 
    style={{ 
      ...dropdownStyle, 
      display: dropdownOpen ? "block" : "none" // Ensure dropdown visibility is controlled
    }} 
    className="dropdown-menu"
  >
    <li>
      <Link to="/login" style={{ color: "#005555", textDecoration: "none", display: "block", padding: "10px 20px" }}>
        Login
      </Link>
    </li>
    <li>
      <Link to="/signup" style={{ color: "#005555", textDecoration: "none", display: "block", padding: "10px 20px" }}>
        Signup
      </Link>
    </li>
  </ul>
</li>

    </ul>
 
   </div>
   <h1>Services</h1>
   <br />
   <h6 >Home    /   About</h6>
    </div>
            {/* aboutus */}
            <div className="section" style={{ padding: '50px 0', backgroundColor: '#f8f9fa' }}>
  <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div className="row" style={{ textAlign: 'left', marginBottom: '30px' }}>
      <div className="col-12">
        <h2 style={{ fontWeight: 'bold', color: '#002855', marginBottom: '20px' }}>About Us</h2>
      </div>
      <div className="col-lg-6">
        <p style={{ color: 'rgba(0, 0, 0, 0.5)', lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim
          pariatur similique debitis vel nisi qui reprehenderit totam? Quod
          maiores.
        </p>
        <p style={{ color: 'rgba(0, 0, 0, 0.5)', lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe,
          explicabo nihil. Est, autem error cumque ipsum repellendus veniam sed
          blanditiis unde ullam maxime veritatis perferendis cupiditate, at non
          esse!
        </p>
        <p style={{ color: 'rgba(0, 0, 0, 0.5)', lineHeight: '1.6' }}>
          Enim, nisi labore exercitationem facere cupiditate nobis quod autem
          veritatis quis minima expedita. Cumque odio illo iusto reiciendis,
          labore impedit omnis, nihil aut atque, facilis necessitatibus
          asperiores porro qui nam.
        </p>
      </div>
      <div className="col-lg-6">
        <p style={{ color: 'rgba(0, 0, 0, 0.5)', lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe,
          explicabo nihil. Est, autem error cumque ipsum repellendus veniam sed
          blanditiis unde ullam maxime veritatis perferendis cupiditate, at non
          esse!
        </p>
        <p style={{ color: 'rgba(0, 0, 0, 0.5)', lineHeight: '1.6' }}>
          Enim, nisi labore exercitationem facere cupiditate nobis quod autem
          veritatis quis minima expedita. Cumque odio illo iusto reiciendis,
          labore impedit omnis, nihil aut atque, facilis necessitatibus
          asperiores porro qui nam.
        </p>
      </div>
    </div>
  </div>
</div>
{/* <div className="section" style={{ paddingTop: '0px' }}>
  <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div className="row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}> */}
      
      {/* Right Side Image */}
      {/* <div className="col-lg-7" style={{ marginBottom: '50px', order: '2' }}>
        <div className="img-about" style={{ position: 'relative' }}>
        <img 
                src={bgImage} 
                alt="Image" 
                className="img-fluid" 
                style={{ width: '100%', borderRadius: '10px' }} 
              />
        </div>
      </div> */}

      {/* Left Side Features */}
      {/* <div className="col-lg-4"> */}
        
        {/* Feature 1 */}
        {/* <div className="d-flex feature-h" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <span className="wrap-icon" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#f8f9fa', 
            marginRight: '15px' 
          }}>
            <span className="icon-home2" style={{ fontSize: '24px' }} />
          </span>
          <div className="feature-text">
            <h3 className="heading" style={{ margin: '0', fontWeight: '600', color: '#002855' }}>Quality properties</h3>
            <p style={{ color: 'rgba(0, 0, 0, 0.5)', marginTop: '5px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.
            </p>
          </div>
        </div> */}

        {/* Feature 2 */}
        {/* <div className="d-flex feature-h" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <span className="wrap-icon" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#f8f9fa', 
            marginRight: '15px' 
          }}>
            <span className="icon-person" style={{ fontSize: '24px' }} />
          </span>
          <div className="feature-text">
            <h3 className="heading" style={{ margin: '0', fontWeight: '600', color: '#002855' }}>Top rated agents</h3>
            <p style={{ color: 'rgba(0, 0, 0, 0.5)', marginTop: '5px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.
            </p>
          </div>
        </div> */}

        {/* Feature 3 */}
        {/* <div className="d-flex feature-h" style={{ display: 'flex', alignItems: 'center' }}>
          <span className="wrap-icon" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#f8f9fa', 
            marginRight: '15px' 
          }}>
            <span className="icon-security" style={{ fontSize: '24px' }} />
          </span>
          <div className="feature-text">
            <h3 className="heading" style={{ margin: '0', fontWeight: '600', color: '#002855' }}>Easy and safe</h3>
            <p style={{ color: 'rgba(0, 0, 0, 0.5)', marginTop: '5px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</div> */}
 
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
