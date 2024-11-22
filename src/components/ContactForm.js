import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm  () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }
    
    // Reset the error message if validation passes
    setError("");
    
    // Log form data (you can replace this with a real submit function)
    console.log("Form submitted", { name, email, message });
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <label>Email:</label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label>Message:</label>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

