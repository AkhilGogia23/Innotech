// // frontend/src/components/Signin.js
// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./signin.css";

// export default function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSignin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please fill out all fields.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // Send request to the backend
//       const response = await axios.post("http://localhost:5000/api/auth/signin", {
//         email,
//         password,
//       });

//       if (response.data.token) {
//         // Save the token to localStorage
//         localStorage.setItem("authToken", response.data.token);

//         // Redirect to profile after successful signin
//         navigate("/profile");
//       } else {
//         setError("Signin failed. Please check your credentials.");
//       }
//     } catch (err) {
//       // Handle errors (e.g., server errors, network errors)
//       setError(
//         err.response && err.response.data.message
//           ? err.response.data.message
//           : "Error during signin. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signin-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignin}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Signing in..." : "Sign In"}
//         </button>
//         <div className="new">
//           <Link to="/Signup" className="styl">
//             New user? Sign up here
//           </Link>
//         </div>

//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// }


// frontend/src/components/Signin.js
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // Add success state
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null); // Reset success message

    try {
      // Send request to the backend
      const response = await axios.post("http://localhost:5000/api/auth/signin", {
        email,
        password,
      });

      if (response.data.token) {
        // Save the token to localStorage
        localStorage.setItem("authToken", response.data.token);

        // Set success message
        setSuccess("Sign-in successful! Redirecting to your profile...");

        // Redirect to profile after successful signin
        setTimeout(() => {
          navigate("/home");
        }, 2000); // Redirect after 2 seconds
      } else {
        setError("Signin failed. Please check your credentials.");
      }
    } catch (err) {
      // Handle errors (e.g., server errors, network errors)
      setError(
        err.response && err.response.data.message
          ? err.response.data.message
          : "Error during signin. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <div className="new">
          <Link to="/signup" className="styl">
            New user? Sign up here
          </Link>
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success-message">{success}</p>} {/* Display success message */}
      </form>
    </div>
  );
}
