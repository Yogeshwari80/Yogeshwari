

import React, { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
// import PropertySlider from "./PropertySlider";
import background1 from "../../assets/images/bg1.jpg";
import background2 from "../../assets/images/bg2.jpg";
import background3 from "../../assets/images/bg3.jpg";
import property1 from "../../assets/images/property1.jpg";
import property2 from "../../assets/images/property2.jpg";
import property3 from "../../assets/images/property3.jpg";
import property4 from "../../assets/images/property4.jpg";
import property5 from "../../assets/images/property5.jpg";
import property6 from "../../assets/images/property6.jpg";
import property7 from "../../assets/images/property7.jpg";
import property8 from "../../assets/images/property8.jpg";



import { Link, useNavigate } from "react-router-dom";



const properties = [
  property1, property2, property3, property4, 
  property5, property6, property7, property8
];

const PropertySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const visibleProperties = 3;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleProperties < properties.length ? prevIndex + 1 : 0
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProperties < properties.length ? prevIndex + visibleProperties : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleProperties >= 0 ? prevIndex - visibleProperties : properties.length - visibleProperties
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "40px 0", position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px" }}>
      <h2 style={{ color: "black" }}>POPULAR PROPERTIES</h2>
        <button 
          onClick={() => navigate("/signup")}
          style={{ padding: "10px 20px", backgroundColor: "#005555", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          View all properties
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
        <button onClick={prevSlide} style={{ position: "absolute", left: "-40px", background: "none", border: "none", cursor: "pointer" }}>
          <FaChevronLeft size={30} color="#005555" />
        </button>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", overflow: "hidden", width: "100%" }}>
          {properties.slice(currentIndex, currentIndex + visibleProperties).map((property, index) => (
            <div key={index} style={{ width: "300px", position: "relative", textAlign: "left", background: "#fff", borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ position: "relative", width: "100%" }}>
                <img src={property} alt="Property" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
                  {/* <button style={{ padding: "10px 15px", backgroundColor: "#ffffff", color: "#005555", border: "none", borderRadius: "5px", cursor: "pointer" }}>View Details</button> */}
                </div>
              </div>
              <div style={{ padding: "15px", position: "relative", zIndex: 2, textAlign: "center" }}>
                <h3 style={{ color: "#005555", margin: "5px 0" }}>$1,291,000</h3>
                <p style={{ margin: "5px 0", fontSize: "14px" }}>5232 California Fake, Ave. 21BC</p>
                <p style={{ fontWeight: "bold", margin: "5px 0" }}>California, USA</p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>🏠 2 beds 🛁 2 baths</p>
                <button style={{ padding: "10px 15px", backgroundColor: "#005555", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" ,}}>View Details</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} style={{ position: "absolute", right: "-40px", background: "none", border: "none", cursor: "pointer" }}>
          <FaChevronRight size={30} color="#005555" />
        </button>
      </div>
    </div>
  );
};


//   return (
//     <div style={{ textAlign: "center", padding: "40px 20px", position: "relative" }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px"}}>
//         <h2 style={{ color: "black" }}>POPULAR PROPERTIES</h2>
//         <Link to="/properties" style={{ textDecoration: "none" }}>
//           <button style={{ padding: "10px 20px", backgroundColor: "#005555", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>View all properties</button>
//         </Link>
       
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
//         <button onClick={prevSlide} style={{ position: "absolute", left: 0, background: "none", border: "none", cursor: "pointer" }}>
//           <FaChevronLeft size={30} color="#005555" />
//         </button>
//         <div style={{ display: "flex", justifyContent: "center", gap: "20px", overflow: "hidden", width: "80%" }}>
//           {properties.slice(currentIndex, currentIndex + visibleProperties).map((property, index) => (
//             <div key={index} style={{ width: "300px", position: "relative", textAlign: "left", background: "#fff", borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}>
//               <img src={property} alt="Property" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
//               <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.3)" }}></div>
//               <div style={{ padding: "15px", position: "relative", zIndex: 2, textAlign: "center" }}>
//                 <h3 style={{ color: "#005555", margin: "5px 0" }}>$1,291,000</h3>
//                 <p style={{ margin: "5px 0", fontSize: "14px" }}>5232 California Fake, Ave. 21BC</p>
//                 <p style={{ fontWeight: "bold", margin: "5px 0" }}>California, USA</p>
//                 <p style={{ fontSize: "14px", margin: "5px 0" }}>🏠 2 beds 🛁 2 baths</p>
//                 <button style={{ padding: "10px 15px", backgroundColor: "#005555", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>See details</button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button onClick={nextSlide} style={{ position: "absolute", right: 0, background: "none", border: "none", cursor: "pointer" }}>
//           <FaChevronRight size={30} color="#005555" />
//         </button>
//       </div>
//     </div>
//   );
// };


export const LandingPage = () => {
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
    height: "100vh",
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

      {/* Hero Section */}
  
      <h1 >Easiest way to find your dream home</h1>
     
      <div style={searchBoxStyle}>
        <input type="text" placeholder="Your ZIP code or City. e.g. New York" style={inputStyle} />
        <button style={buttonStyle}>Search</button>
      </div>
      </div>
      {/* <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ color: "black" }}>Popular Properties</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          {[property1, property2, property3].map((property, index) => (
            <div key={index} style={{ width: "300px", background: "#fff", borderRadius: "10px", overflow: "hidden", textAlign: "left" }}>
              <img src={property} alt="Property" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h3 style={{ color: "#005555" }}>$1,291,000</h3>
                <p>5232 California Fake, Ave. 21BC</p>
                <p><strong>California, USA</strong></p>
                <p>🏠 2 beds 🛁 2 baths</p>
                <button style={{ padding: "10px 15px", backgroundColor: "#005555", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>See details</button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
       <div style={{ height: "50px" }}></div>

{/* ✅ Use `PropertySlider` inside `LandingPage` */}
<PropertySlider />
<section
  className="features-1"
  style={{
    backgroundColor: "#f8f9fa",
    padding: "60px 20px",
    textAlign: "center",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      {[
        { icon: "flaticon-house", title: "Our Properties" },
        { icon: "flaticon-building", title: "Property for Sale" },
        { icon: "flaticon-house-3", title: "Real Estate Agent" },
        { icon: "flaticon-house-1", title: "House for Sale" },
      ].map((item, index) => (
        <div
          key={index}
          className="col-6 col-lg-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={300 + index * 100}
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            flex: "1",
            minWidth: "250px",
            textAlign: "center",
          }}
        >
          <span
            className={item.icon}
            style={{
              fontSize: "50px",
              color: "#005555",
              display: "block",
              marginBottom: "15px",
            }}
          />
          <h3
            className="mb-3"
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#002b2b",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              color: "#6c757d",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, accusamus.
          </p>
          <p>
            <a
              href="#"
              className="learn-more"
              style={{
                color: "#005555",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-block",
                marginTop: "10px",
                borderBottom: "2px solid #005555",
                paddingBottom: "2px",
              }}
            >
              Learn More
            </a>
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

 
  

    </div>
    
  );
};

export default LandingPage;