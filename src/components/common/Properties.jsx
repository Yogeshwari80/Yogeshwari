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

import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';
import { Footer } from './Footer';
import PropertyCard from './PropertyCard';
import axios from 'axios';


export const Properties = () => {

  const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [areas, setAreas] = useState([])
    const [stateId, setStateId] = useState("");
const [cityId, setCityId] = useState("");


   useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease',
          once: true,
          offset: 120
        });
        getAllStates()
      }, []);

      const properties = [
        {
          price: "$1,2,000",
          address: "Cg road",
          location: "Ahmedabad, Gujarat",
          imageUrl: "images/img_1.jpg",
          beds: 2,
          baths: 2,
          detailsLink: "/property-single.html"
        },
        {
          price: "$1,291,000",
          address: "Paldi",
          location: "California, USA",
          imageUrl: "images/img_1.jpg",
          beds: 2,
          baths: 2,
          detailsLink: "/property-single.html"
        },
        {
          price: "$1,23331,000",
          address: "5232 California Fake, Ave. 21BC",
          location: "California, USA",
          imageUrl: "images/img_1.jpg",
          beds: 2,
          baths: 2,
          detailsLink: "/property-single.html"
        },
        {
          price: "$1,291,000",
          address: "5232 California Fake, Ave. 21BC",
          location: "California, USA",
          imageUrl: "images/img_1.jpg",
          beds: 2,
          baths: 2,
          detailsLink: "/property-single.html"
        },
        {
          price: "$1,291,000",
          address: "5232 California Fake, Ave. 21BC",
          location: "California, USA",
          imageUrl: "images/img_1.jpg",
          beds: 2,
          baths: 2,
          detailsLink: "/property-single.html"
        },
        {
          price: "$1,291,000",
          address: "5232 California Fake, Ave. 21BC",
          location: "California, USA",
          imageUrl: "images/img_1.jpg",
          beds: 2,
          baths: 2,
          detailsLink: "/property-single.html"
        },
        {
          price: "$1,291,000",
          address: "5232 California Fake, Ave. 21BC",
          location: "California, USA",
          imageUrl: "images/img_1.jpg",
          beds: 2,
          baths: 2,
          detailsLink: "/property-single.html"
        },]


        useEffect(() => {
          getAllStates()
        }, [])
      
        // const getAllStates = async () => {
        //   try {
        //     console.log("get all state");
            
        //     const fetchedState = await axios.get("/api/getStates")
        //     console.log(fetchedState.data.data);
            
        //     setStates(fetchedState.data.data)
        //   } catch (error) {
        //     console.log(error);
            
        //   }
        // }
        
        
          
        
      
        // const getCityByState = async (id) => {
        //   console.log("get city by state");
            
        //     console.log(id);
            
        //     const fetchedCities = await axios.get(`/api/city/${id}`)
        //     console.log(fetchedCities.data.data);
        //     setCities(fetchedCities.data.data)
      
          
        // }
      
        // const getAreaByCity = async (id) => {
        //   console.log("get area by city");
        //   console.log(id);
          
        //   const fetchedAreas = await axios.get(`/api/area/${id}`)
        //   console.log(fetchedAreas.data.data);
          
        //   setAreas(fetchedAreas.data.data)
          
          
        // }

        
  const getAllStates = async () => {
    try {
      const response = await axios.get("/api/getStates");
      console.log("States fetched:", response.data);
      setStates(response.data);
    } catch (error) {
      console.error("Error fetching states:", error.response ? error.response.data : error.message);
    }
  };
  

  const getCitiesByState = async (stateId) => {
    try {
      const response = await axios.get(`/api/city/${stateId}`);
      console.log("Cities fetched for state:", stateId, response.data);
      setCities(response.data);
      setAreas([]); 
    } catch (error) {
      console.error("Error fetching cities:", error.response ? error.response.data : error.message);
    }
  };
  
  
  const getAreasByCity = async (cityId) => {

    try {
      const response = await axios.get(`/api/area/${cityId}`);
      console.log("Areas fetched for city:", cityId, response.data);
      setAreas(response.data);
    } catch (error) {
      console.error("Error fetching areas:", error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <>
  <Navbar/>
  <div
    className="hero page-inner overlay"
    style={{ backgroundImage: `url(${heroBg1})` }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
          <h1 className="heading" data-aos="fade-up">
            Properties
          </h1>
          {/* <nav
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ol className="breadcrumb text-center justify-content-center">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              {/* <li
                className="breadcrumb-item active text-white-50"
                aria-current="page"
              >
                Properties
              </li> 
            </ol>
          </nav> */}
        </div>
        <div className="container hero-content">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9 text-center">
            <h1 className="heading" data-aos="fade-up">
           Find your dream home
            </h1>
            <form 
              action="#" 
              className="narrow-w form-search d-flex align-items-stretch mb-3" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              {/* <div className="form-control px-4">
              <input
                type="text"
                className="form-control px-4"
                placeholder="Your ZIP code or City. e.g. New York"
              /> */}
              {/* <select defaultValue=""
                className="form-control px-4  "
                style={{padding:5}}
              >
                <option value="" disabled >
                  Select State
                </option>
                <option value="10001">New York, NY (10001)</option>
                <option value="90001">Los Angeles, CA (90001)</option>
                <option value="60601">Chicago, IL (60601)</option>
                <option value="75201">Dallas, TX (75201)</option>
                <option value="94101">San Francisco, CA (94101)</option>
              </select> */}
              <select className="form-control px-4" style={{padding:5}}  onChange={(e) => {getCityByState(e.target.value)}} >
                    <option value="">Select State</option>
                    
                  {
                     states?.map((state , index) => {

                      return <option key={index} value={state._id}>{state.name}</option>
                     })
                  }
                  </select>
                  
                  {/* <select className="form-control px-4" style={{padding:5}} id="city"  onChange={(e) => {getAreaByCity(e.target.value)}}>
                    <option value="">Select City</option>
                    {
                     cities?.map((city , index) => {
                      return <option key={index} value={city._id}>{city.name}</option>
                     })
                  }
                  </select> */}
                <select className="form-control px-4" style={{padding:5}} onChange={(e) => {
  const selectedCityId = e.target.value;
  setCityId(selectedCityId);
  getAreasByCity(selectedCityId);
}}>
  <option value="">Select City</option>
  {cities?.map((city) => (
    <option key={city._id} value={city._id}>{city.name}</option>
  ))}
</select>

                
                  {/* <select className="form-control px-4" style={{padding:5}} id="area">
                    <option value="">Select Area</option>
                    {
                      areas?.map((area) => {
                        return <option value={area._id}>{area.name}</option>
                      })
                    }
                  </select> */}
                  <select className="form-control px-4" style={{padding:5}} id="area" onChange={(event) => { 
  getAreasByCity(event.target.value);
}}>
  <option value="">Select Area</option>
  {areas?.map((area) => (
    <option key={area._id} value={area._id}>{area.name}</option>
  ))}
</select>
                
              
              {/* </div> */}
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>


  

  
  



<div className="section section-properties">
      <div className="container">
        <div className="property-grid">
          {properties.map((property, index) => (
            <div key={index} className="property-grid-item">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        
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
