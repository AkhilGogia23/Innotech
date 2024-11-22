// import React, { useState } from "react";
// import "./navbar.css";
// import { Link } from "react-router-dom";
// export default function Navbar (){
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive((prevState) => !prevState);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">OTW</div>
//       <ul className={`nav-links ${menuActive ? "active" : ""}`}>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//       <Link to="/signin">
//         <button className="login">Login/Sign Up</button>
//       </Link>
//       <div className="menu-toggle" onClick={toggleMenu}>
//         &#9776; {/* Hamburger Icon */}
//       </div>
//     </nav>
//   );
// };


// import React, { useState } from "react";
// import axios from "axios"; // Import axios for API calls
// import "./navbar.css";

// export default function Navbar() {
//   const [menuActive, setMenuActive] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if the user is logged in
//   const [loading, setLoading] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive((prevState) => !prevState);
//   };

//   const handleLoginLogout = async () => {
//     if (isAuthenticated) {
//       // Perform logout
//       localStorage.removeItem("authToken");
//       setIsAuthenticated(false);
//     } else {
//       // Handle login
//       setLoading(true);
//       try {
//         const response = await axios.post("http://localhost:5000/api/login", {
//           email: "user@example.com", // Replace with dynamic email input
//           password: "password123", // Replace with dynamic password input
//         });

//         // Store the JWT token in localStorage
//         localStorage.setItem("authToken", response.data.token);
//         setIsAuthenticated(true);
//       } catch (error) {
//         console.error("Login failed", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">OTW</div>
//       <ul className={`nav-links ${menuActive ? "active" : ""}`}>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//       <button className="login" onClick={handleLoginLogout}>
//         {loading ? "Loading..." : isAuthenticated ? "Logout" : "Login/Sign Up"} 
//       </button>
//       <div className="menu-toggle" onClick={toggleMenu}>
//         &#9776; {/* Hamburger Icon */}
//       </div>
//     </nav>
//   );
// }


// Navbar.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

// export default function Navbar() {
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive((prevState) => !prevState);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">OTW</div>
//       <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//       <Link to="/signin">
//         <button className="login">Login/Sign Up</button>
//       </Link>
//       <div className="menu-toggle" onClick={toggleMenu}>
//         &#9776; {/* Hamburger Icon */}
//       </div>
//     </nav>
//   );
// }


import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure you use Link for navigation
import "./navbar.css";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="logo">OTW</div>
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="/home">Home</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Adjusted Link */}
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Link to="/signin">
        <button className="login">Login/Sign Up</button>
      </Link>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </div>
    </nav>
  );
}
