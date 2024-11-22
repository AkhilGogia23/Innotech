import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup"; // Import the Signup component
import Signin from "./Signin"; // Import the Signin component (you can create it as well)
import TopRatedServices from "./TopRatedServices";
import Features from "./Features";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Slider from "./Slider"; 
import About from "./Aboutus";// If you have a slider component
import Services from "./Services";
import Profile from "./Profile";

import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar will be shown on all pages */}
      <Navbar />
      
      {/* Define all routes here */}
      <Routes>
        {/* Route for Signup page */}

        {/* Route for Signin page */}
       
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        
        {/* Default route for the main page */}
        <Route
          path="/Home"
          element={
            <div>
            

              <Slider />
              <TopRatedServices />
              <Features />
              <Testimonials />
              
              <Footer />
            </div>
          }
        />
        <Route path="/" element={<Navigate to="/Home" />} />

        <Route
        path="/About"
        element={<div>
          <About/>
        </div>
          
        } 
        />
        <Route
        path="/services"
        element={<div>
          <Services/>
        </div>
          
        } 
        />
            <Route
        path="/contact"
        element={<div>
          <ContactForm/>
        </div>
          
        } 
        />

        
        {/* You can add other routes for other pages in the future */}
      </Routes>
    </Router>
  );
}

export default App;
