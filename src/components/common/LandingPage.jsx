

import React, { useState } from "react";
import background from "../../assets/images/bg.jpg";
import { Link } from "react-router-dom";


export const LandingPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerStyle = {
    backgroundImage: `url(${background})`,// Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw", // ✅ Full width
    height: "100vh", // ✅ Full height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };

  const navStyle = {
    backgroundColor: "#005555", // Dark teal navbar
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


  const searchBoxStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "20px",

  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "25px",
    border: "none",
    width: "300px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#005555", // Dark green button
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const dropdownContainerStyle = {
    position: "relative", 
    cursor: "pointer"
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
    display: dropdownOpen ? "block" : "none", // Show dropdown when dropdownOpen is true
  };

  const dropdownItemStyle = {
    color: "black",
    textDecoration: "none",
    display: "block",
    padding: "8px 15px",
    transition: "background 0.3s",
  };
  return (
    <div style={containerStyle}>
      {/* Navbar */}
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

      {/* Hero Section */}
  
      <h1 >Easiest way to find your dream home</h1>
     
      <div style={searchBoxStyle}>
        <input type="text" placeholder="Your ZIP code or City. e.g. New York" style={inputStyle} />
        <button style={buttonStyle}>Search</button>
      </div>
     
    </div>
  );
};

export default LandingPage;
