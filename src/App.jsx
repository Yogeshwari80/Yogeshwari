


// import './assets/css/adminlte.css'
// import './assets/css/adminlte.min.css'
import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Signup } from './components/common/Signup'
import { Login } from './components/common/Login'
import { AddProperty } from './components/user/AddProperty'
import axios from 'axios'
import PrivateRoutes from './hooks/PrivateRoutes'
import { useEffect } from 'react'


import { Inquiry } from './components/user/Inquiry'
import { ResetPassword } from './components/common/ResetPassword'
import { Landing } from './components/common/Landing'
import { PropertSingle } from './components/common/PropertSingle'
import { Services } from './components/common/Services'
import { About } from './components/common/About'
import { ContactUs } from './components/common/ContactUs'
import { Properties } from './components/common/Properties'



function App() {
  // useLocation hook from react router dom to see current end point
  const location = useLocation()

  axios.defaults.baseURL = "http://localhost:8000"

  // checking if current route is login or signup
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  

  return (
    
    <div
    className={
      location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/"
        ? ""
        : "app-wrapper"
    }
  >
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword/:token" element ={<ResetPassword/>}></Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element ={<Landing/>}></Route>
      <Route path="/singleproperty" element ={<PropertSingle/>}></Route>
      <Route path="/services" element ={<Services/>}></Route>
      <Route path="/about" element ={<About/>}></Route>
      <Route path="/contactus" element ={<ContactUs/>}></Route>
      <Route path="/properties" element ={<Properties/>}></Route>

      {/* <Route path="/" element ={<LandingPage/>}></Route> */}
     
     





      <Route path="" element={<PrivateRoutes />}>
        <Route path="/user" element={<UserSidebar />}>
          <Route path="add-property" element={<AddProperty />} />
          <Route path='inquiry' element={<Inquiry></Inquiry>}></Route>
       
        </Route>
        
        
      </Route>
    </Routes>
  </div>
    
  )
}

export default App
