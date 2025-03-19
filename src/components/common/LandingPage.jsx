

import React, { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";


// import PropertySlider from "./PropertySlider";
import Slider from "react-slick";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/user1.jpg";
import img2 from "../../assets/images/user2.jpg";
import img3 from "../../assets/images/user3.jpg";
import profile1 from "../../assets/images/person1.jpg";
import profile2 from "../../assets/images/person2.jpg";
import profile3 from "../../assets/images/person3.jpg";
import heroImage from "../../assets/images/bg2.jpg"; // Path ko apne folder ke hisaab se adjust karein
import "@fortawesome/fontawesome-free/css/all.min.css";






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

  

  const testimonials = [
    {
      name: "Cameron Webster",
      image: img1,
      review:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      role: "Designer, Co-founder",
    },
    {
      name: "Dave Smith",
      image: img2,
      review:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      role: "Designer, Co-founder",
    },
    {
      name: "James Smith",
      image: img3,
      review:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      role: "Designer, Co-founder",
    },
   
  ];
  const agents = [
    {
      name: "James Doe",
      role: "Real Estate Agent",
      img: profile1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?",
    },
    {
      name: "Jean Smith",
      role: "Real Estate Agent",
      img: profile2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?",
    },
    {
      name: "Alicia Huston",
      role: "Real Estate Agent",
      img: profile3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?",
    },
  ];
  const styles = {
    section: {
      backgroundColor: "#f8f9fa",
      padding: "60px 0",
      textAlign: "center",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
    header: {
      marginBottom: "40px",
    },
    title: {
      fontSize: "2rem",
      color: "#0a2540",
      marginBottom: "10px",
    },
    subtitle: {
      color: "#6c757d",
      fontSize: "16px",
      maxWidth: "600px",
      margin: "0 auto",
    },
    agents: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
    },
    agentCard: {
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      maxWidth: "320px",
      textAlign: "center",
      transition: "transform 0.3s ease-in-out",
    },
    agentCardHover: {
      transform: "translateY(-5px)",
    },
    agentImg: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      overflow: "hidden",
      margin: "-50px auto 10px",
      border: "5px solid white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    agentName: {
      fontSize: "18px",
      margin: "10px 0 5px",
      fontWeight: "bold",
      color: "#0a2540",
    },
    agentRole: {
      display: "block",
      color: "#6c757d",
      fontSize: "14px",
      marginBottom: "10px",
    },
    agentDescription: {
      fontSize: "14px",
      color: "#6c757d",
      marginBottom: "15px",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
    },
    socialLink: {
      background: "#0a2540",
      color: "white",
      width: "35px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      fontSize: "16px",
      transition: "background 0.3s",
      textDecoration: "none",
    },
    socialLinkHover: {
      background: "#0a5d5e",
    },
  };

  const TestimonialSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 },
        },
      ],
    };
  };
      
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  // const Footer = () => {
  //   const footerStyle = {
  //     backgroundColor: "#f8f9fa",
  //     padding: "40px 0",
  //     fontSize: "14px",
  //     color: "#333",
  //     textAlign: "left",
  //   };
  
  //   const widgetStyle = {
  //     marginBottom: "20px",
  //   };
  
  //   const linkStyle = {
  //     color: "#333",
  //     textDecoration: "none",
  //     display: "block",
  //     marginBottom: "8px",
  //   };
  
  //   const socialIconStyle = {
  //     display: "inline-block",
  //     width: "40px",
  //     height: "40px",
  //     lineHeight: "40px",
  //     textAlign: "center",
  //     backgroundColor: "#d3d3d3",
  //     borderRadius: "50%",
  //     margin: "0 5px",
  //     fontSize: "18px",
  //     color: "#333",
  //   };
  
  //   const textCenter = {
  //     textAlign: "center",
  //     marginTop: "30px",
  //   };
  // };
    
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
   
       <div style={{ height: "50px" }}></div>

{/*  Use `PropertySlider` inside `LandingPage` */}
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

 
  
<div style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      <h2 style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold" ,  marginTop: "-30px",}}>
     CUSTOMER SAYS
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{ padding: "20px" }}>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "15px",
                  display: "block",  // Ensures it behaves as a block element
                  margin: "0 auto", 
                  
                }}
              />
              <div style={{ color: "#ffb400", marginBottom: "10px" }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#002b2b" }}>
                {testimonial.name}
              </h3>
              <p
                style={{
                  color: "#6c757d",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {testimonial.review}
              </p>
              <p style={{ color: "#adb5bd", fontSize: "13px", fontStyle: "italic" }}>
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <div
  className="section section-4"
  style={{ backgroundColor: "#f8f9fa", padding: "80px 0" }}
>
  <div className="container">
    <div
      className="row justify-content-center text-center mb-5"
      style={{ marginBottom: "50px" }}
    >
      <div className="col-lg-5">
        <h2
          className="font-weight-bold heading text-primary mb-4"
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#005555",
            textAlign: "center",
          }}
        >
          Let's find home that's perfect for you
        </h2>
        <p
          className="text-black-50"
          style={{ color: "#6c757d", textAlign: "center" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim
          pariatur similique debitis vel nisi qui reprehenderit.
        </p>
      </div>
    </div>
    <div className="row justify-content-between mb-5">
      <div
        className="col-lg-7 mb-5 mb-lg-0 order-lg-2"
        style={{ textAlign: "center" }}
      >
        <div className="img-about dots">
          {/* <img
            src="images/hero_bg_3.jpg"
            alt="Image"
            className="img-fluid"
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          /> */}
          <img
  src={heroImage}
  alt="Luxury House"
  className="img-fluid"
  style={{
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  }}
/>

        </div>
      </div>
      <div className="col-lg-4">
        {[
          { icon: "🏠", title: "2M Properties" },
          { icon: "👤", title: "Top Rated Agents" },
          { icon: "🛡", title: "Legit Properties" },
        ].map((item, index) => (
          <div
            key={index}
            className="d-flex feature-h"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
              padding:"20px",
            }}
          >
            <span
              className="wrap-icon me-3"
              style={{
                width: "60px",
                height: "60px",
                background: "#e9ecef",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                fontSize: "24px",
              }}
            >
              {item.icon}
            </span>
            <div className="feature-text" style={{ flex: 1 }}>
              <h3
                className="heading"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                {item.title}
              </h3>
              <p className="text-black-50" style={{ color: "#6c757d" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="row section-counter mt-5 viewed">
      {[
        { count: "3,298", text: "# of Buy Properties" },
        { count: "2,181", text: "# of Sell Properties" },
        { count: "9,316", text: "# of All Properties" },
        { count: "7,191", text: "# of Agents" },
      ].map((item, index) => (
        <div
          key={index}
          className="col-6 col-sm-6 col-md-6 col-lg-3"
          style={{ textAlign: "center", padding: "20px" }}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span
              className="number"
              style={{ fontSize: "30px", fontWeight: "bold", color: "#005555" }}
            >
              {item.count}
            </span>
            <span
              className="caption"
              style={{
                display: "block",
                marginTop: "5px",
                fontSize: "16px",
                color: "#6c757d",
              }}
            >
              {item.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>;
{/* <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: "#0a2540", marginBottom: "20px" }}>
          Be a part of our growing real estate agents
        </h2>
        <a
          href="#"
          style={{
            backgroundColor: "#0a5d5e",
            color: "white",
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Apply for Real Estate agent */}
        {/* </a>
      </div>
    </div>   */}
<div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
  <div
    style={{
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", // Shadow for floating effect
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    <h2 style={{ color: "#0a2540", marginBottom: "20px" }}>
      Be a part of our growing real estate agents
    </h2>
    <a
      href="#"
      style={{
        backgroundColor: "#0a5d5e",
        color: "white",
        padding: "12px 24px",
        fontSize: "16px",
        borderRadius: "30px",
        textDecoration: "none",
        fontWeight: "bold",
        display: "inline-block",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // Button shadow added
        transition: "all 0.3s ease-in-out",
      }}
      onMouseOver={(e) =>
        (e.target.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.3)")
      }
      onMouseOut={(e) =>
        (e.target.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)")
      }
    >
      Apply for Real Estate agent
    </a>
  </div>
</div>
<div style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Our Agents</h2>
          <p style={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit totam?
            Quod maiores.
          </p>
        </div>
        <div style={styles.agents}>
          {agents.map((agent, index) => (
            <div style={styles.agentCard} key={index}>
              <div style={styles.agentImg}>
                <img src={agent.img} alt={agent.name} style={styles.img} />
              </div>
              <h3 style={styles.agentName}>{agent.name}</h3>
              <span style={styles.agentRole}>{agent.role}</span>
              <p style={styles.agentDescription}>{agent.description}</p>
              <div style={styles.socialIcons}>
                <a href="#" style={styles.socialLink}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={styles.socialLink}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" style={styles.socialLink}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" style={styles.socialLink}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <div style={footerStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Contact Section */}
          {/* <div style={{ flex: "1", paddingRight: "20px" }}>
            <div style={widgetStyle}>
              <h3 style={{ fontWeight: "bold" }}>Contact</h3>
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
              <a href="tel://11234567890" style={linkStyle}>
                +1(123)-456-7890
              </a>
              <a href="tel://11234567890" style={linkStyle}>
                +1(123)-456-7890
              </a>
              <a href="mailto:info@mydomain.com" style={linkStyle}>
                info@mydomain.com
              </a>
            </div>
          </div>

          {/* Sources Section */}
          {/* <div style={{ flex: "1", paddingRight: "20px" }}>
            <div style={widgetStyle}>
              <h3 style={{ fontWeight: "bold" }}>Sources</h3>
              <div style={{ display: "flex" }}>
                <ul style={{ listStyle: "none", padding: 0, marginRight: "30px" }}>
                  <li><a href="#" style={linkStyle}>About us</a></li>
                  <li><a href="#" style={linkStyle}>Services</a></li>
                  <li><a href="#" style={linkStyle}>Vision</a></li>
                  <li><a href="#" style={linkStyle}>Mission</a></li>
                  <li><a href="#" style={linkStyle}>Terms</a></li>
                  <li><a href="#" style={linkStyle}>Privacy</a></li>
                </ul>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li><a href="#" style={linkStyle}>Partners</a></li>
                  <li><a href="#" style={linkStyle}>Business</a></li>
                  <li><a href="#" style={linkStyle}>Careers</a></li>
                  <li><a href="#" style={linkStyle}>Blog</a></li>
                  <li><a href="#" style={linkStyle}>FAQ</a></li>
                  <li><a href="#" style={linkStyle}>Creative</a></li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* Links & Social Icons Section */}
          {/* <div style={{ flex: "1" }}>
            <div style={widgetStyle}>
              <h3 style={{ fontWeight: "bold" }}>Links</h3>
              <a href="#" style={linkStyle}>Our Vision</a>
              <a href="#" style={linkStyle}>About us</a>
              <a href="#" style={linkStyle}>Contact us</a>
            </div>
            <div>
              <a href="#" style={socialIconStyle}><i className="fab fa-instagram"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-twitter"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-facebook-f"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-linkedin-in"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-pinterest"></i></a>
              <a href="#" style={socialIconStyle}><i className="fab fa-dribbble"></i></a>
            </div>
          </div>
        </div> */}

        {/* Copyright Section */}
        {/* <div style={textCenter}>
          <p>Copyright © 2025 . All Rights Reserved. — Designed with love by <a href="https://untree.co" style={linkStyle}>Untree.co</a></p>
          <p>Distributed by <a href="https://themewagon.com/" target="_blank" style={linkStyle}>themewagon</a></p>
        </div>
      </div> 
       <Footer /> */}
     {/* </div> */}




    </div>
    
  );
};

export default LandingPage;