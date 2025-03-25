import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


export const Inquiry = () => {
  const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [areas, setAreas] = useState([])

  
    

  const{register,handleSubmit}=useForm()
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

   const submitHandler=async (data)=>{
    console.log(data)
    const res = await axios.post("http://localhost:8000/api/inquiry",data)
       console.log(res.data);
   }
   
  return (
    
      <div className="card card-primary card-outline mb-4">
          {/* Header */}
          <div className="card-header">
            <div className="card-title"><h3>INQUIRY PAGE</h3></div>
          </div>
          <form onSubmit={handleSubmit(submitHandler)}>
          <div className="card-body">
          <div className="mb-3">
          <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" {...register("fullname")} className="form-control" id="fullname" placeholder="Enter Full name" />
              </div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" {...register("email")} className="form-control" id="email" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone number" className="form-label">Phone Number</label>
                {/* <input type="text" {...register("phone_number ")} className="form-control" id="phone number" placeholder="Enter phone number" /> */}
                <input type="text" {...register("phone_number")} className="form-control" id="phone_number" placeholder="Enter phone number" />

              </div>
              <div className="mb-3">
                <label htmlFor="property type" className="form-label">Property Type</label>
                <select className="form-select" id="property type" {...register("property_type")}>
                  <option value="">Select Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="house">House</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
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
              <h5 className="mb-3">Location Details</h5>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Full Address</label>
                <input type="text" {...register("address")} className="form-control" id="address" placeholder="Enter full address" />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="state" className="form-label">State</label>
               
                  {/* <select className="form-select" onChange={(event) => {getCitiesByState(event.target.value)}}>

                    <option value="">Select State</option>
                    
                  {
                     states?.map((state , index) => {
                      return <option key={index} value={state._id}>{state.name}</option>
                     })
                  } 
                  </select>  */}
      <select className="form-select" {...register("state_id")} onChange={(e) => {
    getCitiesByState(e.target.value);
}}>
  <option value="">Select State</option>
  {states?.map((state, index) => (
    <option key={index} value={state._id}>{state.name}</option>
  ))}
</select>


                </div>
                <div className="col">
                  <label htmlFor="city" className="form-label">City</label>
                  {/* <select className="form-select" id="city"  onChange={(event) => {getAreasByCity(event.target.value)}}>
                    <option value="">Select City</option>
                    {
                     cities?.map((city , index) => {
                      return <option key={index} value={city._id}>{city.name}</option>
                     })
                  }
                  </select> */}
                  <select className="form-select" {...register("city_id")} onChange={(e) => {
    getAreasByCity(e.target.value);
}}>
  <option value="">Select City</option>
  {cities?.map((city, index) => (
    <option key={index} value={city._id}>{city.name}</option>
  ))}
</select>

                </div>
                <div className="col">
                  <label htmlFor="area" className="form-label">Area</label>
                  {/* <select className="form-select" id="city">
                    <option value="">Select Area</option>
                    {
                     areas?.map((area , index) => {
                      return <option key={index} value={area._id}>{area.name}</option>
                     })
                  }
                  </select> */}
                  <select className="form-select" {...register("area_id")}>
  <option value="">Select Area</option>
  {areas?.map((area, index) => (
    <option key={index} value={area._id}>{area.name}</option>
  ))}
</select>

                </div>
                </div>
                
              
              <div className="mb-3">
                <label htmlFor="budget" className="form-label">Budget</label>
                <input type="text" {...register("budget")} className="form-control" id="budget" placeholder="Enter  your budget" />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                  <input type="number" className="form-control" id="bedrooms" {...register("bedrooms")}  placeholder="No. of bedrooms" />
                </div>
                <div className="col">
                  <label htmlFor="bathrooms" className="form-label" >Bathrooms</label>
                  <input type="number" className="form-control" id="bathrooms" {...register("bathrooms")} placeholder="No. of bathrooms" />
                </div>
                <div className="col">
                  <label htmlFor="balconies" className="form-label">Balconies</label>
                  <input type="number" className="form-control" id="balconies" {...register("balconies")} placeholder="No. of balconies" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="furnishing" className="form-label">Furnishing Status</label>
                {/* <select className="form-select" id="furnishing" {...register("furnishingStatus")} > */}
                <select className="form-select" id="furnishing" {...register("furnishing_status")}>

                  <option value="">Select Status</option>
                  <option value="Furnished">Fully Furnished</option>
                  <option value="Semi-Furnished">Semi-Furnished</option>
                  <option value="Unfurnished">Unfurnished</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Parking Availability (Slots)</label>
                {/* <input type="number" className="form-control"  {...register("parkingSlot")} placeholder="Number of parking slots" /> */}
                <input type="number" className="form-control"  {...register("parking_slot")} placeholder="Number of parking slots" />

              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                {/* <input type="text" className="form-control"  {...register("Message")} placeholder="enter message" /> */}
                <input type="text" className="form-control"  {...register("message")} placeholder="Enter message" />

              </div>
              <div className="card-footer">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
          </form>
    </div>
  )
}