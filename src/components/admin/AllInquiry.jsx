import React, { useEffect, useState } from 'react'
import { AdminNavbar } from './AdminNavbar '
import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';
import '../../landing/assets/fonts/icommon/style.css';
import '../../landing/assets/fonts/flaticon/flaticon.css';
import '../../landing/css/tiny-slider.css';
import '../../landing/css/aos.css';
import '../../landing/css/style.css';
import '../../landing/js/counter';
import '../../landing/js/navbar';
import '../../landing/js/tiny-slider';
import 'aos/dist/aos.css';
import 'tiny-slider/dist/tiny-slider.css';
import AOS from 'aos';
import axios from 'axios';


export const AllInquiry = () => {

    const [inquiry, setinquiry] = useState([])
    

    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease',
          once: true,
          offset: 120
        });
        getAllInquiry()
      }, []);

      const getAllInquiry = async () => {
        const res = await axios.get("http://localhost:8000/api/inquiry")
        console.log(res.data);
        setinquiry(res.data)

        
      }
  return (
    <div>
        <AdminNavbar/>
        <div
                className="hero page-inner overlay"
                style={{ backgroundImage: `url(${heroBg1})` }}
              >
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-9 text-center mt-5">
                      <h1 className="heading" data-aos="fade-up" data-aos-delay="200">
                        All Inquiry
                      </h1>
                      
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <table className="table table-dark" >
                <thead>
                    <tr>
                        <td>ID</td>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Message</th>
                     
                        
                    </tr>
                </thead>
                <tbody>
                {inquiry?.map((inquiry)=>{
                    return(
                        <tr>
                            <td>{inquiry.id}</td>
                            <td>{inquiry.fullname}</td>
                            
                            <td>{inquiry.email}</td>
                            <td>{inquiry.phone_number}</td>
                            <td>{inquiry.message}</td>
                            
                        </tr>
                    )
                })}
                </tbody>

            </table>


        
    </div>
  )
}
