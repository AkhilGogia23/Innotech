// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // For navigation
// import "./signup.css";

// export default function Signup() {
//   const [username, setUsername] = useState(""); // Change from 'name' to 'username'
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState(""); // For password confirmation
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate(); // Navigation hook

//   const handleSignup = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     if (!username || !email || !password || !confirmPassword) {
//       setError("Please fill out a");
//       return;
//     }

    

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // Send the signup data to the backend API
//       const response = await axios.post("http://localhost:5000/api/auth/signup", {
//         username,  // Send username instead of name
//         email,
//         password,
//       });

//       if (response.data.success) {
//         // Redirect to login page after successful signup

//         if (response.data.token) {
//             localStorage.setItem("authToken", response.data.token); // Store token in localStorage
//           }
    
//           // Show success message
//           setSuccess("You have successfully signed up! You can now log in.");
//         navigate("/signin"); // Redirect to Sign In page
//       } else {
//         setError(response.data.message || "Signup failed. Please try again.");
//       }
//     } catch (err) {
//       setError(
//         err.response && err.response.data.message
//           ? err.response.data.message
//           : "Error during signup. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}  // Change to username
//             placeholder="Enter your username"
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter a strong password"
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Re-enter your password"
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>

//         {error && <p className="error">{error}</p>}
//         {/* Show success message */}
//         {success && <p className="success-message">{success}</p>}
//       </form>
//     </div>
//   );
// }


import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./signup.css";

export default function Signup() {
  const [username, setUsername] = useState(""); // Changed name to username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For password confirmation
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // New state for success message
  const navigate = useNavigate(); // Navigation hook

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Send the signup data to the backend API
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username, // Sending username instead of name
        email,
        password,
      });

      if (response.data.success) {
        // Optionally store JWT token in localStorage for auto-login
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token); // Store token in localStorage
        }

        // Show success message
        setSuccess("You have successfully signed up! You can now log in.");

        // Delay before redirecting to the login page
        setTimeout(() => {
          navigate("/signin");
        }, 1500); // 1.5 second delay
      } else {
        setError(response.data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError(
        err.response && err.response.data.message
          ? err.response.data.message
          : "Error during signup. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username:</label> {/* Changed from Name to Username */}
          <input
            type="text"
            value={username} // Updated to use username
            onChange={(e) => setUsername(e.target.value)} // Updated to handle username
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a strong password"
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {error && <p className="error">{error}</p>}

      
      </form>
    </div>
  );
}
