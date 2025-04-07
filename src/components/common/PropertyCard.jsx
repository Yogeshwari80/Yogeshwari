// // Updated PropertyCard component
// import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';

const PropertyCard = ({ property }) => {
    const {
      price = 'Price not available',
      address = 'Address not provided',
      location = 'Location not specified',
      imageUrl = 'heroBg1',
      baths = 0,
      beds = 2,
      detailsLink = '#'
    } = property || {};
  
    return (
      <div className="property-card">
        <div className="property-item mb-30">
          <a href={detailsLink} className="img">
            <img src={imageUrl} alt={address} className="img-fluid" />
          </a>
          <div className="property-content">
            <div className="price mb-2">
              <span>{price}</span>
            </div>
            <div>
              <span className="d-block mb-2 text-black-50">{address}</span>
              <span className="city d-block mb-3">{location}</span>
              <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                  <span className="icon-bed me-2" />
                  <span className="caption">{beds} beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                  <span className="icon-bath me-2" />
                  <span className="caption">{baths} baths</span>
                </span>
              </div>
              <Link to="/singleproperty"className="btn btn-primary py-2 px-3">
                See details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  
  PropertyCard.defaultProps = {
    property: {}
  };

  export default PropertyCard;