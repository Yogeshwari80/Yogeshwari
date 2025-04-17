

import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import '../../landing/assets/fonts/icommon/style.css';
import '../../landing/assets/fonts/flaticon/flaticon.css';
import '../../landing/css/tiny-slider.css';
import '../../landing/css/aos.css';
import '../../landing/css/style.css';
// import '../../landing/js/aos';
import '../../landing/js/counter';
// import '../../landing/js/custom';
import '../../landing/js/navbar';
import '../../landing/js/tiny-slider';
import 'aos/dist/aos.css';
import 'tiny-slider/dist/tiny-slider.css';
import AOS from 'aos';
import { Footer } from './Footer';
import heroBg3 from '../../landing/assets/img/hero_bg_3.jpg';
import img2 from '../../landing/assets/img/img_2.jpg';
import agentImg from '../../landing/assets/img/person_2-min.jpg';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const PropertSingle = () => {

  const [property, setProperty] = useState({})
  const [favouriteProperty, setFavouriteProperty] = useState([])
  const [favButton,setFavButton] = useState(false)
  const [favouriteId,setFavourites] = useState(null)



  useEffect(() => {
    fetchSingleProperty()
    getFavouriteProperties()
 
    
    
    
  }, [favButton])
  
    let params = useParams()
    let property_id = params.propertyid

    

    const fetchSingleProperty = async () => {

      console.log(property_id);
      const fetchedSingleProperty = await axios.get(`/api/property/${property_id}`)
      console.log(fetchedSingleProperty);
      setProperty(fetchedSingleProperty.data.data)

      
      
    }


    const addToFavourite = async () => {
      try {
        const data = {
          user_id: localStorage.getItem("id"),
          property_id: property_id,
        };
    
        const res = await axios.post(`/api/add_favourite`, data);
        console.log("Added to favourites:", res.data);
        getFavouriteProperties(); // Refresh
      } catch (err) {
        console.error("Error adding to favourites:", err);
      }
    };
    
    const removeFromFavourite = async () => {
      if (!favouriteId) return;
    
      try {
        const res = await axios.delete(`/api/remove_favourite/${favouriteId}`);
        console.log("Removed from favourite", res.data);
        getFavouriteProperties(); // Refresh
      } catch (error) {
        console.error("Error removing favourite", error);
      }
    };
    
    

    const getFavouriteProperties = async () => {
      const userId = localStorage.getItem("id");
    
      try {
        const response = await axios.get(`/api/get_favourites/${userId}`);
        const favourites = response.data;
    
        setFavouriteProperty(favourites);
    
        const currentFavourite = favourites.find(
          (fav) => fav.propertyId?._id === property_id || fav.property_id?._id === property_id
        );
    
        if (currentFavourite) {
          setFavButton(true);
          setFavourites(currentFavourite._id); // This is favouriteId
        } else {
          setFavButton(false);
          setFavourites(null);
        }
    
      } catch (error) {
        console.error("Error fetching favourites", error);
      }
    };
    
    
    
    
        
    

  return (
    <>
  <Navbar/>
  <div
    className="hero page-inner overlay"
    style={{ backgroundImage: `url(${property.image_url})` }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
          <h1 className="heading aos-init aos-animate" data-aos="fade-up">
            {property.propertyName}
          </h1>
          <nav
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay={200}
            className="aos-init aos-animate"
          >
            <ol className="breadcrumb text-center justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/properties">Properties</Link>
              </li>
              
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7">
          <div className="img-property-slide-wrap">
            <div className="tns-outer" id="tns1-ow">
              <div className="tns-nav" aria-label="Carousel Pagination">
                <button
                  type="button"
                  data-nav={0}
                  aria-controls="tns1"
                  style={{}}
                  aria-label="Carousel Page 1 (Current Slide)"
                  className="tns-nav-active"
                />
                <button
                  type="button"
                  data-nav={1}
                  aria-controls="tns1"
                  style={{}}
                  aria-label="Carousel Page 2"
                  className=""
                  tabIndex={-1}
                />
                <button
                  type="button"
                  data-nav={2}
                  aria-controls="tns1"
                  style={{}}
                  aria-label="Carousel Page 3"
                  className=""
                  tabIndex={-1}
                />
              </div>
              <div
                className="tns-liveregion tns-visually-hidden"
                aria-live="polite"
                aria-atomic="true"
              >
                slide <span className="current">2</span> of 3
              </div>
              <div id="tns1-mw" className="tns-ovh">
                <div className="tns-inner" id="tns1-iw">
                  <div
                    className="img-property-slide  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                    id="tns1"
                    style={{
                      transform: "translate3d(-20%, 0px, 0px)",
                      transitionDuration: "0s"
                    }}
                  >
                    <img
                      src={property.image_url}
                      alt="Image"
                      className="img-fluid tns-item tns-slide-cloned"
                      aria-hidden="true"
                      tabIndex={-1}
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h2 className="heading text-primary">{property.address}</h2>
          <p className="meta">{property?.areaId?.name}, {property?.cityId?.name}, {property?.stateId?.name}.</p>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
  <tbody>
    <tr>
      <td><i className="fa fa-tag" style={{ color: "#333", marginRight: "8px" }}></i><strong>Price:₹15000000</strong> {property.basePrice}</td>
      <td><i className="fa fa-map-marker" style={{ color: "#333", marginRight: "8px" }}></i><strong>Nearby Landmark:GEMS School</strong> {property.nearbyLandmark}</td>
    </tr>
    <tr>
      <td><i className="fa fa-expand" style={{ color: "#333", marginRight: "8px" }}></i><strong>Built Up Area:1600</strong> {property.builtUpArea}</td>
      <td><i className="fa fa-compress" style={{ color: "#333", marginRight: "8px" }}></i><strong>Carpet Area:1200</strong> {property.carpetArea}</td>
    </tr>
    <tr>
      <td><i className="fa fa-bed" style={{ color: "#333", marginRight: "8px" }}></i><strong>Bedrooms:</strong> {property.bedrooms}</td>
      <td><i className="fa fa-bath" style={{ color: "#333", marginRight: "8px" }}></i><strong>Bathrooms:</strong> {property.bathrooms}</td>
    </tr>
    <tr>
      <td><i className="fa fa-sun-o" style={{ color: "#333", marginRight: "8px" }}></i><strong>Balconies:</strong> {property.balconies}</td>
      <td><i className="fa fa-car" style={{ color: "#333", marginRight: "8px" }}></i><strong>Parking Slot:2</strong> {property.parkingSlot}</td>
      
    </tr>
    <tr>
      <td><i className="fa fa-hourglass-half" style={{ color: "#333", marginRight: "8px" }}></i><strong>Property Age:8</strong> {property.propertyAge}</td>
      <td><i className="fa fa-compass" style={{ color: "#333", marginRight: "8px" }}></i><strong>Facing Direction:North</strong> {property.facingDirection}</td>
    </tr>
    <tr>
    
  <td style={{ color: "#333", margin: 0 }}>
    <i className="fas fa-couch" style={{ color: "#333", marginRight: "8px" }}></i>
    <strong style={{ color: "#333" }}>Furnishing Status:</strong> {property.furnishingStatus} – A thoughtfully designed space for cozy living.
  </td>

</tr>



   
  </tbody>
</table>
          
          <p style={{ color: "#333" }}>
  <i className="fa fa-home" style={{ color: "#2c3e50", marginRight: "8px" }}></i>
  Discover modern living in this beautifully designed apartment.  
  Spacious interiors, smart amenities, and a prime location.  
  Perfect for those who crave comfort and convenience.  
  Enjoy a secure, vibrant community and a lifestyle of ease.  
  This is more than just a home — it's where you belong.
</p>
          <Link to={`/inquiry/${property_id}`} className="btn btn-primary py-2 px-3 ">
            Contact Us
          </Link>
      
          {
            favButton ? 
            <div onClick={removeFromFavourite} className="btn btn-primary py-2 px-3" style={{marginLeft:10}}>
              Remove From Wishlist
            </div> : 
            <div onClick={addToFavourite} className="btn btn-primary py-2 px-3" style={{marginLeft:10}}>
              Add To Wishlist
            </div>
          }



          <div className="d-block agent-box p-5">
            <div className="img mb-4">
            <img
  src={agentImg}
  alt="Agent"
  className="img-fluid"
/>

            </div>
            <div className="text">
              <h3 className="mb-0">Alicia Huston</h3>
              <div className="meta mb-3">Real Estate</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                laborum quo quos omnis sed magnam id ducimus saepe
              </p>
              <ul className="list-unstyled social dark-hover d-flex">
                <li className="me-1">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="me-1">
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  {/* /.site-footer */}
  {/* Preloader */}
  <div id="overlayer" style={{ opacity: "-0.1", display: "none" }} />
  <div className="loader" style={{ opacity: "-0.1", display: "none" }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
</>

  )
}
