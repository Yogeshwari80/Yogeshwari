
import React, { useState } from 'react';

import headerBackground from "../../assets/images/backgroundForLogin.jpg";
import background from "../../assets/images/backgroundForLogin.jpg";

import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useForm } from 'react-hook-form';
import {Link, useNavigate } from 'react-router-dom';


export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

 
  const submitHandler = async (data) => {
    console.log(data);
    data.roleId = "67c4b09c8385fb8187120578"
    const res = await axios.post("http://localhost:8000/api/user/login", data);
    console.log(res.data.user._id); //axios
    console.log(res.data); //api response
    if(res.status === 200){
        localStorage.setItem("id",res.data.user._id)
        // localStorage.setItem("role",res.data.user.role.name)
    console.log(res);

      navigate("/user")
      alert("Login success");
     
      // if (res.data.user.role.name == "user") {
        if (res.data.user.role._id == "user") {
        toast.success('Login Successfully', {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,

          });
          setTimeout(() => {
            navigate("/user")
          }, 4000);
      }
    }
    
  };
  const forgotPasswordHandler =async()=>{
    alert(`Password reset link sent to ${email}`);
    console.log(email)
    const res = await axios.post("api/forgotpassword?email="+email)
    console.log(res.data)
  }

    
  const validationSchema = {
    emailValidator: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please provide a valid email",
      },
    },
    passwordValidator: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 8,
        message: "Password must contain at least 8 characters*",
      },
      maxLength: {
        value: 30,
        message: "Password should not be greater than 30 characters",
      },
      pattern: {
        value: /^(?=.*[A-Z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
        message: "Password must have a special character, an uppercase letter, and three integers",
      },
    },
  };

  return (
    
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(5px)'
      }}></div>
  
      <div style={{
        width: '470px',
        maxWidth: '90%',
        backgroundColor: 'white',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header section */}
        <div style={{
          height: '160px',
          backgroundImage: `url(${headerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 85, 85, 0.7))'
          }}></div>
          
          {/* Logo */}
          <div style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#005555',
            }}>
              RE<span style={{ color: '#3498db' }}>F</span>
            </div>
          </div>
        </div>
  
        {/* Form section */}
        <div style={{ padding: '40px 30px 30px' }}>
          <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                    />
        
          <h2 style={{ color: '#005555', textAlign: 'center', marginBottom: '30px', fontSize: '22px', fontWeight: '600'
          }}>
            Good to See You Again!
          </h2>
          
          <form onSubmit={handleSubmit(submitHandler)}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#7f8c8d', fontSize: '14px'
              }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                style={{ width: '100%', padding: '12px 15px', border: '1px solid #e1e5e8', borderRadius: '6px', backgroundColor: '#f7f9fa', color: '#005555', fontSize: '15px', outline: 'none', transition: 'all 0.3s'
                }}
                {...register("email", validationSchema.emailValidator)}
              />
              <span><p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.email?.message}</p></span>
            </div>
  
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#7f8c8d',
                fontSize: '14px'
              }}>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                style={{ width: '100%', padding: '12px 15px', border: '1px solid #e1e5e8', borderRadius: '6px', backgroundColor: '#f7f9fa', color: '#34495e', fontSize: '15px', outline: 'none', transition: 'all 0.3s'
                }}
                {...register("password", validationSchema.passwordValidator)}
              />
              <span><p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.password?.message}</p></span>
            </div>
  
          
     <div style={{ textAlign: "right", marginBottom: "20px" }}>
      {/* Forgot Password Link */}
      {!isForgotPasswordClicked ? (
        <div>
          <Link
            to="#"
            style={{
              color: "#005555",
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onClick={() => setIsForgotPasswordClicked(true)}
          >
            Forgot Password?
          </Link>
        </div>
      ) : (
        <div
          style={{
            marginTop: "10px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: "#f7f9fa",
            textAlign: "left",
          }}
        >
          <label
            style={{
              display: "block",
              fontSize: "14px",
              color: "#34495e",
              marginBottom: "5px",
            }}
          >
            Enter Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
              fontSize: "14px",
            }}
          />
          <button
            onClick={forgotPasswordHandler}
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#005555",
              color: "white",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Send
          </button>
        </div>
      )}
    </div>


            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: '#005555',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 6px rgba(52, 152, 219, 0.2)'
              }}
            >
              Login
            </button>
          </form>
  
          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            color: '#7f8c8d',
            fontSize: '14px'
          }}>
            <p>Don't have an account?{' '}
              <Link to="/signup" style={{
                color: '#005555',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};