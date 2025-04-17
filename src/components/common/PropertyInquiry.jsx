// import React, { useEffect, useState } from 'react'
// import { Navbar } from './Navbar'
// import '../../landing/assets/fonts/icommon/style.css';
// import '../../landing/assets/fonts/flaticon/flaticon.css';
// import '../../landing/css/tiny-slider.css';
// import '../../landing/css/aos.css';
// import '../../landing/css/style.css';
// // import '../../landing/js/aos';
// import '../../landing/js/counter';
// // import '../../landing/js/custom';
// import '../../landing/js/navbar';
// import '../../landing/js/tiny-slider';
// import 'aos/dist/aos.css';
// import 'tiny-slider/dist/tiny-slider.css';
// import AOS from 'aos';
// import { Footer } from './Footer';
// import heroBg3 from '../../landing/assets/img/hero_bg_3.jpg';
// import img2 from '../../landing/assets/img/img_2.jpg';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';


// export const PropertyInquiry = () => {
//   const{register,handleSubmit}=useForm()
//    const submitHandler=async (data)=>{

//     console.log(data)
//     const res = await axios.post("http://localhost:8000/api/inquiry",data)
//        console.log(res.data);
//    }
   
//   return (

//     <>
//     <Navbar/>
//     <div
//       className="hero page-inner overlay"
//       style={{ backgroundImage: `url(${property.propertyImageURL})` }}
//     >
//       <div className="container">
//         <div className="row justify-content-center align-items-center">
//           <div className="col-lg-9 text-center mt-5">
//             <h1 className="heading aos-init aos-animate" data-aos="fade-up">
//               {property.propertyName}
//             </h1>
//             <nav
//               aria-label="breadcrumb"
//               data-aos="fade-up"
//               data-aos-delay={200}
//               className="aos-init aos-animate"
//             >
//               <ol className="breadcrumb text-center justify-content-center">
//                 <li className="breadcrumb-item">
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li className="breadcrumb-item">
//                   <Link to="/properties">Properties</Link>
//                 </li>
                
//               </ol>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="section">
//       <div className="container">
//         <div className="row">
//           <div
//             className="col-lg-4 mb-5 mb-lg-0 aos-init aos-animate"
//             data-aos="fade-up"
//             data-aos-delay={100}
//           >
//             <div className="col-lg-110">
//                       <h2 className="heading text-primary">{property.address}</h2>
//                       <p className="meta">{property?.areaId?.name}, {property?.cityId?.name}, {property?.stateId?.name}.</p>
//                       <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
//     <tbody>
//       <tr>
//         <td><i className="fa fa-tag" style={{ color: "#333", marginRight: "8px" }}></i><strong>Price:₹</strong> {property.basePrice}</td>
//         <td><i className="fa fa-map-marker" style={{ color: "#333", marginRight: "8px" }}></i><strong>Nearby Landmark:</strong> {property.nearbyLandmark}</td>
//       </tr>
//       <tr>
//         <td><i className="fa fa-expand" style={{ color: "#333", marginRight: "8px" }}></i><strong>Built Up Area:</strong> {property.builtUpArea}</td>
//         <td><i className="fa fa-compress" style={{ color: "#333", marginRight: "8px" }}></i><strong>Carpet Area:</strong> {property.carpetArea}</td>
//       </tr>
//       <tr>
//         <td><i className="fa fa-bed" style={{ color: "#333", marginRight: "8px" }}></i><strong>Bedrooms:</strong> {property.bedrooms}</td>
//         <td><i className="fa fa-bath" style={{ color: "#333", marginRight: "8px" }}></i><strong>Bathrooms:</strong> {property.bathrooms}</td>
//       </tr>
//       <tr>
//         <td><i className="fa fa-sun-o" style={{ color: "#333", marginRight: "8px" }}></i><strong>Balconies:</strong> {property.balconies}</td>
//         <td><i className="fa fa-car" style={{ color: "#333", marginRight: "8px" }}></i><strong>Parking Slot:</strong> {property.parkingSlot}</td>
        
//       </tr>
//       <tr>
//         <td><i className="fa fa-hourglass-half" style={{ color: "#333", marginRight: "8px" }}></i><strong>Property Age:</strong> {property.propertyAge}</td>
//         <td><i className="fa fa-compass" style={{ color: "#333", marginRight: "8px" }}></i><strong>Facing Direction:</strong> {property.facingDirection}</td>
//       </tr>
//       <tr>
      
//     <td style={{ color: "#333", margin: 0 }}>
//       <i className="fas fa-couch" style={{ color: "#333", marginRight: "8px" }}></i>
//       <strong style={{ color: "#333" }}>Furnishing Status:</strong> {property.furnishingStatus} – A thoughtfully designed space for cozy living.
//     </td>
  
//   </tr>
  
  
  
     
//     </tbody>
//   </table>
                      
            
            
                      
                      
//                     </div>
//             <div className="contact-info">
//               <div className="address mt-2">
//                 <i className="icon-room" />
//                 <h4 className="mb-2">Location:</h4>
//                 <p>
//                   43 Raymouth Rd. Baltemoer,
//                   <br />
//                   London 3910
//                 </p>
//               </div>
//               <div className="open-hours mt-4">
//                 <i className="icon-clock-o" />
//                 <h4 className="mb-2">Open Hours:</h4>
//                 <p>
//                   Sunday-Friday:
//                   <br />
//                   11:00 AM - 2300 PM
//                 </p>
//               </div>
//               <div className="email mt-4">
//                 <i className="icon-envelope" />
//                 <h4 className="mb-2">Email:</h4>
//                 <p>info@Untree.co</p>
//               </div>
//               <div className="phone mt-4">
//                 <i className="icon-phone" />
//                 <h4 className="mb-2">Call:</h4>
//                 <p>+1 1234 55488 55</p>
//               </div>
//             </div>
  
//           </div>
//           <div
//             className="col-lg-8 aos-init aos-animate"
//             data-aos="fade-up"
//             data-aos-delay={200}
//           >
           
//             <form onSubmit={handleSubmit(submitHandler)}>
//               <div className="row">
//                 <div className="col-6 mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Your Name"
//                     fdprocessedid="r8r3k7"
//                     {...register("fullname")}
//                   />
//                 </div>
//                 <div className="col-6 mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Your Email"
//                     fdprocessedid="7a9s7j"
//                     {...register("email")}
//                   />
//                 </div>
//                 <div className="col-12 mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Contact Number"
//                     fdprocessedid="sjdoo"
//                     {...register("phone_number")}
//                   />
//                 </div>
//                 <div className="col-12 mb-3">
//                   <textarea
//                     name=""
//                     id=""
//                     cols={30}
//                     rows={7}
//                     className="form-control"
//                     placeholder="Message"
//                     defaultValue={""}
//                     {...register("message")}
//                   />
//                 </div>
//                 <div className="col-12">
//                   <input
//                     type="submit"
//                     defaultValue="Send Message"
//                     className="btn btn-primary"
//                     fdprocessedid="h5w4fn"
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     {/* /.site-footer */}
//     {/* Preloader */}
//     <div id="overlayer" style={{ opacity: "-0.1", display: "none" }} />
//     <div className="loader" style={{ opacity: "-0.1", display: "none" }}>
//       <div className="spinner-border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>
//     </div>
//   </>

//     //   <div className="card card-primary card-outline mb-4">
//     //       {/* Header */}
//     //       <div className="card-header">
//     //         <div className="card-title"><h3>INQUIRY PAGE</h3></div>
//     //       </div>
//     //       <form onSubmit={handleSubmit(submitHandler)}>
//     //       <div className="card-body">
//     //       <div className="mb-3">
//     //       <div className="mb-3">
//     //             <label htmlFor="fullname" className="form-label">Full Name</label>
//     //             <input type="text" {...register("fullname")} className="form-control" id="fullname" placeholder="Enter Full name" />
//     //           </div>
//     //             <label htmlFor="email" className="form-label">Email</label>
//     //             <input type="text" {...register("email")} className="form-control" id="email" placeholder="Enter email" />
//     //           </div>
//     //           <div className="mb-3">
//     //             <label htmlFor="phone number" className="form-label">Phone Number</label>
//     //          <input type="text" {...register("phone_number")} className="form-control" id="phone_number" placeholder="Enter phone number" />

//     //           </div>
//     //           <div className="mb-3">
//     //             <label className="form-label">Message</label>
             
//     //             <input type="text" className="form-control"  {...register("message")} placeholder="Enter message" />
                
//     //           </div>
//     //           <div className="card-footer">
//     //           <button type="submit" className="btn btn-primary">Submit</button>
//     //         </div>
//     //       </div>
//     //       </form>
//     // </div>
//   )
// }
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


export const PropertyInquiry = () => {
  const{register,handleSubmit}=useForm()
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
             <input type="text" {...register("phone_number")} className="form-control" id="phone_number" placeholder="Enter phone number" />

              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
             
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
