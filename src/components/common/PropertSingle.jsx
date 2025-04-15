
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
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const PropertSingle = () => {

  const [property, setProperty] = useState({})

  useEffect(() => {
    fetchSingleProperty()
    }, [])
  
    let params = useParams()
    let propertyId = params.propertyid

    const fetchSingleProperty = async () => {

      console.log(propertyId);
      const fetchedSingleProperty = await axios.get(`/api/get_properties/${propertyId}`)
      console.log(fetchedSingleProperty.data.data);
      setProperty(fetchedSingleProperty.data.data)
      }

  return (
    <>
  <Navbar/>
  <div
    className="hero page-inner overlay"
    style={{ backgroundImage: url(`${property.propertyImageURL}`) }}
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
                      src={property.propertyImageURL}
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
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            laborum quo quos omnis sed magnam id, ducimus saepe, debitis error
            earum, iste dicta odio est sint dolorem magni animi tenetur.
          </p>
          <p className="text-black-50">
            Perferendis eligendi reprehenderit, assumenda molestias nisi eius
            iste reiciendis porro tenetur in, repudiandae amet libero.
            Doloremque, reprehenderit cupiditate error laudantium qui, esse quam
            debitis, eum cumque perferendis, illum harum expedita.
          </p>
          <Link to={`/inquiry/${propertyId}`} className="btn btn-primary py-2 px-3 ">
            Contact Us
          </Link>
          <Link to="/favourite" className="btn btn-primary py-2 px-3" style={{marginLeft:10}}>
            Add To Favourite
          </Link>


          <div className="d-block agent-box p-5">
            <div className="img mb-4">
              <img
                src="images/person_2-min.jpg"
                alt="Image"
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