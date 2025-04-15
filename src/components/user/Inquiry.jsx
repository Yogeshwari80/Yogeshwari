import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


export const Inquiry = () => {
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
