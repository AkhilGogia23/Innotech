import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact</a>
      </div>
      <p>&copy; 2024 Your Website Name. All Rights Reserved.</p>
    </footer>
  );
}
