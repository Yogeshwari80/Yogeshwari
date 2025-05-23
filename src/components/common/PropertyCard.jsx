// // Updated PropertyCard component
// import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';

const PropertyCard = ({ property }) => {
    const {
      _id = 'id is not specified',
      base_price = 'Price not available',
      address = 'Address not provided',
      property_name = 'Location not specified',
      image_url = 'heroBg1',
      baths = 0,
      beds = 2,
      detailsLink = '#'
    } = property || {};
  
    return (
      <div className="property-card">
        <div className="property-item mb-30">
          <a href={detailsLink} className="img">
            <img src={image_url} alt={address} className="img-fluid" />
          </a>
          <div className="property-content">
            <div className="price mb-2">
              <span>{base_price}</span>
            </div>
            <div>
              <span className="d-block mb-2 text-black-50">{address}</span>
              <span className="city d-block mb-3">{property_name}</span>
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
              <Link to={`/singleproperty/${_id}`} className="btn btn-primary py-2 px-3">
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