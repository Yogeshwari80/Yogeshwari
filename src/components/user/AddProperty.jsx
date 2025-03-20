
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const AddProperty = () => {
 
const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);
const [areas, setAreas] = useState([]);
const [categories,setCategories] = useState([])


  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getAllStates();
  }, []);



  const getAllStates = async () => {
    try {
      const response = await axios.get("/api/getStates");
      console.log("States fetched:", response.data);
      setStates(response.data);
    } catch (error) {
      console.error("Error fetching states:", error.response ? error.response.data : error.message);
    }
  };
  
  // const getAllCategories = async () => {
  //   try {
  //     console.log("get all category");
      
  //     const fetchedCategories = await axios.get("/api/category/");
  //     console.log(fetchedCategories.data.data);
      
  //     setCategories(fetchedCategories.data.data)
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  // const getAllCategories = async () => {
  //   try {
  //     const response = await axios.get("/api/category/");
  //     console.log("Categories fetched:", response.data);
  //     setCategories(response.data);
  //   } catch (error) {
  //     console.error("Error fetching states:", error.response ? error.response.data : error.message);
  //   }
  // };
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
  
  const getAllCategories = async () => {
    try {
      const response = await axios.get("/api/category"); // Ensure correct API route
      console.log("Categories fetched:", response.data);
      setCategories(response.data);
    } catch (error) {
      console.error(
        "Error fetching categories:",
        error.response ? error.response.data : error.message
      );
    }
  };
  
  useEffect(() => {
    getAllCategories(); // Fetch categories when component mounts
  }, []);




const submitHandler = async (data) => {
  const userId = localStorage.getItem("id")
  console.log(data);
  data.userId = userId
  console.log(data.propertyImage[0]);


  
  const formData = new FormData();
  formData.append("property_name",data.property_name)
  formData.append("category_id",data.category_id)
  formData.append("listing_type",data.listing_type)
  formData.append("base_price",data.basePrice)
  formData.append("address",data.address)
  formData.append("state_id",data.stateId)
  formData.append("city_id",data.cityId)
  formData.append("areaId",data.areaId)
  formData.append("nearbyLandmark",data.nearbyLandmark)
  formData.append("googleMapLink",data.googleMapLink)
  formData.append("userId",data.userId)
  formData.append("builtUpArea",data.builtUpArea)
  formData.append("carpetArea",data.carpetArea)
  formData.append("bedrooms",data.bedrooms)
  formData.append("balconies",data.balconies)
  formData.append("furnishingStatus",data.furnishingStatus)
  formData.append("propertyAge",data.propertyAge)
  formData.append("facingDirection",data.facingDirection)
  formData.append("parkingSlot",data.parkingSlot)
  formData.append("property_type",data.property_type)
  formData.append("image",data.propertyImage[0])
  console.log(formData);
  
  const res = await axios.post("http://localhost:8000/api/create_property_with_file",formData)
  console.log(res.data);

}


    return (
        <div className="card card-primary card-outline mb-4">
         
          <div className="card-header">
            <div className="card-title">Add Property</div>
          </div>

          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="card-body">

              <h5 className="mb-3">Basic Property Information</h5>
              <div className="mb-3">
                <label htmlFor="propertyTitle" className="form-label">Property Title</label>
                <input type="text" {...register("property_name")} className="form-control" id="propertyTitle" placeholder="Enter property title" />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="propertyType" className="form-label">Property Type</label>
                <select className="form-select" {...register("category_id")} id="propertyType">
                  <option value="">Select Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                  <option value="plot">Plot</option>
                </select>
              </div> */}
               {/* <div className="mb-3">
                <label htmlFor="propertyType" className="form-label" >Property Type</label>
                <select className="form-select"  id="propertyType" {...register("category_id")}>
                  <option value="">Select Type</option>
                  {
                    categories?.map((category) => {
                      return <option value={category._id}>{category.name}</option>
                    })
                  }
                </select>
              </div> */}
              <div className="mb-3">
    <label htmlFor="propertyType" className="form-label">Property Type</label>
    <select className="form-select" id="propertyType" {...register("category_id")}>
      <option value="">Select Type</option>
      {categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.name}
        </option>
      ))}
    </select>
  </div>
              <div className="mb-3">
                <label htmlFor="listingType" className="form-label">Listing Type</label>
                <select className="form-select" id="listingType"{...register("listing_type", { required: true })}>
                  <option value="">Select Listing Type</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                  <option value="lease">Lease</option>
                </select>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input type="number" {...register("basePrice")} className="form-control" id="price" placeholder="Enter price" />
                </div>
                <div className="col">
                  <label htmlFor="negotiable" className="form-label">Negotiable</label>
                  <select className="form-select" id="negotiable"{...register("negotiable", { required: true })}>
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
  
              <h5 className="mb-3">Location Details</h5>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Full Address</label>
                <input type="text" {...register("address")} className="form-control" id="address" placeholder="Enter full address" />
              </div>
              
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="state" className="form-label">State</label>
               
                  <select className="form-select" onChange={(event) => {getCitiesByState(event.target.value)}}>

                    <option value="">Select State</option>
                    
                  {
                     states?.map((state , index) => {
                      return <option key={index} value={state._id}>{state.name}</option>
                     })
                  } 
                  </select> 
      

                </div>
                
                <div className="col">
                  <label htmlFor="city" className="form-label">City</label>
                  <select className="form-select" id="cityc"  onChange={(event) => {getAreasByCity(event.target.value)}}>
                    <option value="">Select City</option>
                    {
                     cities?.map((city , index) => {
                      return <option key={index} value={city._id}>{city.name}</option>
                     })
                  }
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="area" className="form-label">Area</label>
                  <select className="form-select" id="city">
                    <option value="">Select Area</option>
                    {
                     areas?.map((area , index) => {
                      return <option key={index} value={area._id}>{area.name}</option>
                     })
                  }
                  </select>
                </div>
                
                  {/* <div className="col">
                    <label htmlFor="zip" className="form-label">ZIP / Pincode</label>
                    <input type="text" className="form-control" id="zip" placeholder="ZIP or Pincode" />
                  </div> */}
              </div>
              <div className="mb-3">
                <label htmlFor="landmarks" className="form-label">Nearby Landmarks</label>
                <input type="text" className="form-control" id="landmarks" placeholder="E.g., school, hospital" {...register("landmarks")} />
              </div>
              <div className="mb-3">
                <label htmlFor="mapsLink" className="form-label">Google Maps Link</label>
                <input type="url" className="form-control" id="mapsLink"  placeholder="https://maps.google.com/..." {...register("mapsLink")}/>
              </div>
      
          
              <h5 className="mb-3">Property Specifications</h5>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="builtUpArea" className="form-label">Built-up Area</label>
                  <input type="number" className="form-control" id="builtUpArea"placeholder="Enter built-up area" {...register("builtUpArea")}  />
                </div>
                <div className="col">
                  <label htmlFor="carpetArea" className="form-label">Carpet Area</label>
                  <input type="number" className="form-control" id="carpetArea"  placeholder="Enter carpet area" {...register("carpetArea")}  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                  <input type="number" className="form-control" id="bedrooms" placeholder="No. of bedrooms" {...register("bedrooms")}  />
                </div>
                <div className="col">
                  <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                  <input type="number" className="form-control" id="bathrooms" placeholder="No. of bathrooms" {...register("bathrooms")} />
                </div>
                <div className="col">
                  <label htmlFor="balconies" className="form-label">Balconies</label>
                  <input type="number" className="form-control" id="balconies"placeholder="No. of balconies" {...register("balconies")} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="furnishing" className="form-label">Furnishing Status</label>
                <select className="form-select" id="furnishing" {...register("furnishing")}>
                  <option value="">Select Status</option>
                  <option value="fully">Fully Furnished</option>
                  <option value="semi">Semi-Furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                </select>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="age" className="form-label">Age of Property (Years)</label>
                  <input type="number" className="form-control" id="age" placeholder="Years" {...register("age")} />
                </div>
                <div className="col">
                  <label htmlFor="floorNo" className="form-label">Floor Number</label>
                  <input type="number" className="form-control" id="floorNo" placeholder="Floor number" {...register("floorNo")} />
                </div>
                <div className="col">
                  <label htmlFor="totalFloors" className="form-label">Total Floors</label>
                  <input type="number" className="form-control" id="totalFloors" placeholder="Total floors in building" {...register("totalFloors")} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="facing" className="form-label">Facing Direction</label>
                <select className="form-select" id="facing" {...register("facing")}>
                  <option value="">Select Direction</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="parking" className="form-label">Parking Availability (Slots)</label>
                <input type="number" className="form-control" id="parking" placeholder="Number of parking slots" {...register("parking")}  />
              </div>
      
 
              {/* <h5 className="mb-3">Amenities & Features</h5>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="lift"{...register("amenities.lift")} />
                <label className="form-check-label" htmlFor="lift">Lift/Elevator</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="swimmingPool" {...register("amenities.swimmingPool")}/>
                <label className="form-check-label" htmlFor="swimmingPool">Swimming Pool</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="gym" {...register("amenities.gym")}/>
                <label className="form-check-label" htmlFor="gym">Gym</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="garden" {...register("amenities.garden")} />
                <label className="form-check-label" htmlFor="garden">Garden/Park</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="security" {...register("amenities.security")}/>
                <label className="form-check-label" htmlFor="security">Security Guard</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="cctv"{...register("amenities.cctv")} />
                <label className="form-check-label" htmlFor="cctv">CCTV Surveillance</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="powerBackup"{...register("amenities.powerBackup")} />
                <label className="form-check-label" htmlFor="powerBackup">Power Backup</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="clubhouse"{...register("amenities.clubhouse")} />
                <label className="form-check-label" htmlFor="clubhouse">Clubhouse/Community Hall</label>
              </div> */}
      
      {/* Property Media & Documents */}
      <h5 className="mb-3">Property Media & Documents</h5>
              <div className="mb-3">
                <label htmlFor="propertyImages" className="form-label">Upload Property Images</label>
                <input type="file" className="form-control" id="propertyImages" multiple {...register("propertyImage")} />
              </div>
             
      

            </div>
            {/* Footer */}
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Add Property</button>
            </div>
          </form>
        </div>
      );
      
}
