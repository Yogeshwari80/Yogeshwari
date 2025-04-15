
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const Agent = () => {
  const { register, handleSubmit, reset } = useForm()
  const [formClosed, setFormClosed] = useState(false)

  const submitHandler = async (data) => {
    console.log(" Form Data to Submit:", data)

    try {
      console.log(" Simulating API request...");
      setTimeout(() => {
        console.log(" Closing form...");
        setFormClosed(true)
        reset()
      }, 1000)

      const res = await axios.post("http://localhost:8000/api/agent", data)
      setTimeout(() => {
        console.log(" API response:", res.data)
        setFormClosed(true)
        reset()
      }, 1000)

    } catch (error) {
      console.error(" Error submitting form:", error.response?.data || error.message)
    }
  }

  const handleCloseForm = () => {
    setFormClosed(true)
    reset()
  }

  return (
    <div className="container mt-4" data-aos="fade-up">
      <h3 className="text-center text-primary mb-3">Apply as Real Estate Agent</h3>

      {!formClosed ? (
        <form className="position-relative p-4 bg-white shadow rounded" onSubmit={handleSubmit(submitHandler)}>

          {/* Close icon */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
            onClick={handleCloseForm}
          ></button>

          <div className="mb-3">
            <label className="form-label">Agency Name</label>
            <input type="text" className="form-control" placeholder="Enter agency name" {...register("agency_name")} />
          </div>

          <div className="mb-3">
            <label className="form-label">License Number</label>
            <input type="text" className="form-control" placeholder="Enter your license number" {...register("license_no")} />
          </div>

          <div className="mb-3">
            <label className="form-label">Experience (in years)</label>
            <input type="number" className="form-control" placeholder="e.g. 5" {...register("experience_years")} />
          </div>

          <div className="mb-3">
            <label className="form-label">Rating (Optional)</label>
            <input type="number" step="0.1" className="form-control" placeholder="e.g. 4.5" {...register("rating")} />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea className="form-control" placeholder="Enter your address" rows="3" {...register("address")} />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit Application</button>
        </form>
      ) : (
        <div className="alert alert-success text-center p-4 shadow rounded">
          🎉 Your application was submitted successfully!
        </div>
      )}
    </div>
  )
}

